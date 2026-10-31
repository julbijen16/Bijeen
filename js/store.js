/* Bijeen opslag en synchronisatie.
   Alles staat eerst op de telefoon (werkt offline) en gaat daarna naar Supabase.
   Wijzigingen van de rest van het gezin komen live binnen via realtime. */
(function(){
const CFG = window.BIJEEN_CONFIG || {};
const LS = {
  get(k,d){ try{ const v=localStorage.getItem('bijeen.'+k); return v==null?d:JSON.parse(v); }catch(e){ return d; } },
  set(k,v){ try{ localStorage.setItem('bijeen.'+k, JSON.stringify(v)); }catch(e){ console.warn('opslag vol?',e); } },
  del(k){ localStorage.removeItem('bijeen.'+k); },
};
const online = () => !!sb && navigator.onLine;
const sb = CFG.url && CFG.anonKey && window.supabase ? window.supabase.createClient(CFG.url, CFG.anonKey, {
  auth:{ persistSession:true, autoRefreshToken:true, detectSessionInUrl:true, storageKey:'bijeen.auth' },
  realtime:{ params:{ eventsPerSecond:20 } },
}) : null;

/* --- the shape of the app state (S) and how it maps to documents --- */
const LISTS = { event:'events', todo:'todos', shop:'shop', note:'notes', act:'activity' };
const CFGKEYS = ['away','todoLists','shopLists','shopCats','layout','homeCfg','worker','order'];
const DEFAULTS = {
  away:[], todoLists:['Huis','Deze week'], shopLists:['Boodschappen'],
  shopCats:['Groente & fruit','Brood & bakker','Zuivel','Vlees & vis','Voorraad','Diepvries','Drinken','Verzorging','Schoonmaak'],
  layout:{}, homeCfg:{}, worker:'', order:[],
};
const key = (kind,id) => kind+'/'+id;

let docs = LS.get('docs', {});        // key -> {kind,id,data,deleted,updated_at}
let outbox = LS.get('outbox', {});    // key -> {kind,id,data,deleted}
let sess = LS.get('session', null);   // {family_id, member_id, family_name}
let snap = {};                        // key -> json string of what S held at last sync
let S = null, onChange = ()=>{}, onStatus = ()=>{};
let channel = null, flushing = false, flushAgain = false;

function build(){
  const s = { events:[], todos:[], shop:[], notes:[], activity:[], people:{}, prefs:{}, me: sess && sess.member_id };
  for(const c of CFGKEYS) s[c] = JSON.parse(JSON.stringify(DEFAULTS[c]));
  for(const d of Object.values(docs)){
    if(d.deleted) continue;
    if(LISTS[d.kind]) s[LISTS[d.kind]].push({...d.data, id:d.id});
    else if(d.kind==='cfg' && CFGKEYS.includes(d.id)) s[d.id] = d.data.v;
    else if(d.kind==='person') s.people[d.id] = {...d.data};
    else if(d.kind==='pref') s.prefs[d.id] = {...d.data};
  }
  s.activity.sort((a,b)=>b.at.localeCompare(a.at));
  if(s.me && !s.prefs[s.me]) s.prefs[s.me] = {};
  s.settings = s.me ? s.prefs[s.me] : {};
  return s;
}
/* one entry per document that S currently holds */
function entries(s){
  const out = {};
  for(const [kind,arr] of Object.entries(LISTS)) for(const x of s[arr]||[]){ const {id,...data}=x; out[key(kind,id)] = {kind,id,data}; }
  for(const c of CFGKEYS) out[key('cfg',c)] = {kind:'cfg',id:c,data:{v:s[c]}};
  for(const [id,p] of Object.entries(s.people||{})) out[key('person',id)] = {kind:'person',id,data:p};
  if(s.me && s.settings) out[key('pref',s.me)] = {kind:'pref',id:s.me,data:s.settings};
  return out;
}
function takeSnap(){ snap = {}; for(const [k,e] of Object.entries(entries(S))) snap[k] = JSON.stringify(e.data); }

/* called by the app after every change: find what changed and queue it */
function save(){
  if(!S || !sess) return;
  S.prefs[S.me] = S.settings;
  const now = entries(S); let n = 0;
  for(const [k,e] of Object.entries(now)){
    const j = JSON.stringify(e.data);
    if(snap[k] !== j){ snap[k] = j; queue(e.kind, e.id, e.data, false); n++; }
  }
  for(const k of Object.keys(snap)) if(!now[k]){ const [kind,...r]=k.split('/'); delete snap[k]; queue(kind, r.join('/'), docs[k]?docs[k].data:{}, true); n++; }
  if(n){ LS.set('docs', docs); LS.set('outbox', outbox); status(); flush(); }
}
function queue(kind,id,data,deleted){
  const k = key(kind,id), copy = JSON.parse(JSON.stringify(data));
  outbox[k] = {kind,id,data:copy,deleted};
  docs[k] = {kind,id,data:copy,deleted,updated_at:(docs[k]||{}).updated_at||''};
}

/* --- photos: kept on the phone as data: URL until they are uploaded --- */
function findData(v,out=[]){
  if(typeof v==='string'){ if(v.startsWith('data:image/')) out.push(v); }
  else if(Array.isArray(v)) v.forEach(x=>findData(x,out));
  else if(v && typeof v==='object') Object.values(v).forEach(x=>findData(x,out));
  return out;
}
function swap(v,from,to){
  if(Array.isArray(v)){ for(let i=0;i<v.length;i++){ if(v[i]===from) v[i]=to; else swap(v[i],from,to); } }
  else if(v && typeof v==='object'){ for(const k of Object.keys(v)){ if(v[k]===from) v[k]=to; else swap(v[k],from,to); } }
}
function uuid(){ return crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36)+Math.random().toString(36).slice(2); }
async function upload(dataUrl){
  const blob = await (await fetch(dataUrl)).blob();
  const path = `${sess.family_id}/${uuid()}.jpg`;
  const { error } = await sb.storage.from('photos').upload(path, blob, { contentType:'image/jpeg', cacheControl:'31536000' });
  if(error) throw error;
  urls[path] = { url: URL.createObjectURL(blob), exp: Date.now()+864e5 }; // show it right away
  return 'sb:'+path;
}
let urls = {}; let urlWant = new Set(), urlT = null;
const urlCache = LS.get('urls', {});
Object.assign(urls, urlCache);
function src(u){
  if(!u || !u.startsWith('sb:')) return u||'';
  const p = u.slice(3), c = urls[p];
  if(c && c.exp > Date.now()+36e5) return c.url;
  if(sb){ urlWant.add(p); clearTimeout(urlT); urlT = setTimeout(fetchUrls, 30); }
  return c ? c.url : 'data:image/gif;base64,R0lGODlhAQABAAAAACw=';
}
async function fetchUrls(){
  const want = [...urlWant]; urlWant.clear(); if(!want.length || !online()) return;
  const { data, error } = await sb.storage.from('photos').createSignedUrls(want, 7*86400);
  if(error || !data) return;
  const keep = {};
  for(const r of data) if(r.signedUrl){ urls[r.path] = keep[r.path] = { url:r.signedUrl, exp:Date.now()+7*864e5 }; }
  Object.assign(urlCache, keep); LS.set('urls', urlCache);
  onChange('photos');
}

/* --- sending and receiving --- */
async function flush(){
  if(!online() || !sess) return;
  if(flushing){ flushAgain = true; return; }
  flushing = true;
  try{
    for(const [k,o] of Object.entries(outbox)){
      for(const d of new Set(findData(o.data))){
        const to = await upload(d);
        swap(o.data, d, to);
        const live = S && liveObj(o.kind, o.id); if(live) swap(live, d, to);
      }
      if(S){ const e = entries(S)[k]; if(e) snap[k] = JSON.stringify(e.data); }
      const { data, error } = await sb.from('docs').upsert({ family_id:sess.family_id, kind:o.kind, id:o.id, data:o.data, deleted:o.deleted }).select('updated_at').single();
      if(error) throw error;
      if(outbox[k] === o) delete outbox[k];
      docs[k] = {...o, updated_at:data.updated_at};
      LS.set('outbox', outbox); LS.set('docs', docs);
    }
  }catch(e){ console.warn('synchroniseren lukt nu niet', e); }
  flushing = false; status();
  if(flushAgain){ flushAgain = false; flush(); }
}
function liveObj(kind,id){
  if(LISTS[kind]) return S[LISTS[kind]].find(x=>x.id===id);
  if(kind==='person') return S.people[id];
  if(kind==='pref') return S.prefs[id];
  if(kind==='cfg') return S[id];
}
/* a document came in from the server */
function apply(row){
  const k = key(row.kind,row.id);
  if(row.family_id && sess && row.family_id !== sess.family_id) return false;
  if(outbox[k]) return false; // our own newer change is still on its way
  const old = docs[k];
  if(old && old.updated_at && row.updated_at){
    const a = Date.parse(old.updated_at), b = Date.parse(row.updated_at);
    if(a > b || (a === b && old.deleted === row.deleted && JSON.stringify(old.data) === JSON.stringify(row.data))) return false;
  }
  docs[k] = {kind:row.kind,id:row.id,data:row.data,deleted:row.deleted,updated_at:row.updated_at};
  if(!S) return true;
  const L = LISTS[row.kind];
  if(L){
    const arr = S[L], i = arr.findIndex(x=>x.id===row.id);
    if(row.deleted){ if(i>=0) arr.splice(i,1); }
    else if(i>=0){ const o=arr[i]; for(const p of Object.keys(o)) delete o[p]; Object.assign(o,row.data,{id:row.id}); }
    else arr.push({...row.data,id:row.id});
    if(L==='activity') arr.sort((a,b)=>b.at.localeCompare(a.at));
  } else if(row.kind==='cfg' && CFGKEYS.includes(row.id)) S[row.id] = row.deleted ? DEFAULTS[row.id] : row.data.v;
  else if(row.kind==='person'){ if(row.deleted) delete S.people[row.id]; else { const o=S.people[row.id]; if(o){ for(const p of Object.keys(o)) delete o[p]; Object.assign(o,row.data); } else S.people[row.id]={...row.data}; } }
  else if(row.kind==='pref'){ const o=S.prefs[row.id]||(S.prefs[row.id]={}); for(const p of Object.keys(o)) delete o[p]; Object.assign(o,row.data); }
  snap[k] = row.deleted ? undefined : JSON.stringify(row.kind==='cfg'?{v:row.data.v}:row.data);
  if(snap[k]===undefined) delete snap[k];
  return true;
}
async function pull(){
  if(!online() || !sess) return;
  const since = LS.get('since', '');
  let q = sb.from('docs').select('*').eq('family_id', sess.family_id).order('updated_at').limit(5000);
  if(since) q = q.gt('updated_at', since);
  const { data, error } = await q;
  if(error){ console.warn(error); if(error.code==='PGRST301'||error.status===401) check(); return; }
  let changed = false, last = since;
  for(const r of data){ if(apply(r)) changed = true; last = r.updated_at; }
  LS.set('docs', docs); if(last) LS.set('since', last);
  if(changed) onChange('pull');
}
function listen(){
  if(!sb || !sess || channel) return;
  channel = sb.channel('fam-'+sess.family_id)
    .on('postgres_changes', { event:'*', schema:'public', table:'docs', filter:'family_id=eq.'+sess.family_id }, p=>{
      const r = p.new && p.new.id ? p.new : null; if(!r) return;
      if(apply(r)){ LS.set('docs', docs); onChange('live'); }
    })
    .subscribe(st=>{ if(st==='SUBSCRIBED') pull(); });
}
async function sync(){ await flush(); await pull(); listen(); }
function status(){ onStatus({ online:navigator.onLine, pending:Object.keys(outbox).length, configured:!!sb }); }
window.addEventListener('online', ()=>{ status(); sync(); });
window.addEventListener('offline', status);
document.addEventListener('visibilitychange', ()=>{ if(document.visibilityState==='visible') sync(); });

/* --- signing in --- */
async function ensureAnon(){
  if(!sb) throw new Error('De app is nog niet met de server verbonden.');
  const { data } = await sb.auth.getSession();
  if(data.session) return data.session;
  const r = await sb.auth.signInAnonymously();
  if(r.error) throw new Error('Inloggen bij de server lukt niet ('+(r.error.message||r.error.status||'onbekend')+')');
  return r.data.session;
}
const rid = () => 'm'+Math.random().toString(36).slice(2,8);
function err(e){ const m = (e && e.message) || String(e); return new Error(m.replace(/^.*?: /,'')); }

async function startSession(s){
  sess = s; LS.set('session', sess);
  S = build(); takeSnap(); status(); await sync(); S = build(); takeSnap(); onChange('session');
}
const API = {
  configured: !!sb, client: sb,
  get session(){ return sess; },
  load(cb, st){ onChange = cb; onStatus = st || onStatus; if(sess){ S = build(); takeSnap(); } return S; },
  get state(){ return S; },
  save, src, sync, status, newId: rid,
  async createFamily(family, name, pin, email){
    await ensureAnon();
    const id = rid();
    const person = { name, color:'blauw', order:0 };
    const { data, error } = await sb.rpc('create_family', { p_family:family, p_person_id:id, p_person:person, p_pin:pin });
    if(error) throw err(error);
    docs = {}; outbox = {}; LS.set('since','');
    await startSession({ family_id:data.family_id, member_id:id, family_name:family });
    S.worker = id; S.order = [id]; save();
    if(email) await API.setEmail(email).catch(()=>{});
    return data;
  },
  async lookup(code){
    await ensureAnon();
    const { data, error } = await sb.rpc('lookup_family', { p_code:code });
    if(error) throw err(error);
    return data;
  },
  async join(code, member, pin, familyName, person){
    const { data, error } = await sb.rpc('join_family', { p_code:code, p_member:member, p_pin:pin, p_person:person||null });
    if(error) throw err(error);
    if(!data.ok) return false;
    docs = {}; outbox = {}; LS.set('since','');
    await startSession({ family_id:data.family_id, member_id:member, family_name:familyName });
    return true;
  },
  async verifyPin(pin){
    if(!online()) return null;
    const { data, error } = await sb.rpc('verify_pin', { p_pin:pin });
    if(error) throw err(error);
    return data;
  },
  async setPin(pin){ const { error } = await sb.rpc('set_pin', { p_pin:pin }); if(error) throw err(error); },
  async renewCode(){ const { data, error } = await sb.rpc('renew_code'); if(error) throw err(error); return data; },
  async family(){
    if(!online()) return LS.get('family', null);
    const { data } = await sb.from('families').select('name,code,code_expires').maybeSingle();
    if(data) LS.set('family', data);
    return data;
  },
  async setEmail(email){
    const { error } = await sb.auth.updateUser({ email }, { emailRedirectTo: location.origin+location.pathname+'#bevestigd' });
    if(error) throw err(error);
  },
  async email(){ if(!sb) return ''; const { data } = await sb.auth.getUser(); return data.user ? (data.user.email || data.user.new_email || '') : ''; },
  async recoverStart(email){
    if(!sb) throw new Error('De app is nog niet met de server verbonden.');
    const { error } = await sb.auth.signInWithOtp({ email, options:{ shouldCreateUser:false } });
    if(error) throw new Error(/not found|signups not allowed/i.test(error.message) ? 'Dit e-mailadres is niet bekend als reserve e-mail.' : err(error).message);
  },
  async recoverCode(email, token){
    const { error } = await sb.auth.verifyOtp({ email, token, type:'email' });
    if(error) throw new Error('Die code klopt niet of is verlopen.');
    const { data } = await sb.rpc('hello', { p_label: deviceLabel() });
    if(!data || data.blocked) throw new Error('Deze persoon hoort (nog) niet bij een gezin.');
    await sb.auth.signOut({ scope:'others' }).catch(()=>{}); // oude telefoon uitloggen
    docs = {}; outbox = {}; LS.set('since','');
    const f = await sb.from('families').select('name').maybeSingle();
    await startSession({ family_id:data.family_id, member_id:data.member_id, family_name:(f.data||{}).name||'' });
    return true;
  },
  /* is this phone still part of the family? */
  async check(){ return check(); },
  async logout(){
    try{ if(channel) await sb.removeChannel(channel); }catch(e){}
    channel = null;
    if(sb) await sb.auth.signOut({ scope:'local' }).catch(()=>{});
    for(const k of ['docs','outbox','session','since','family','lock','urls']) LS.del(k);
    docs = {}; outbox = {}; sess = null; S = null; snap = {};
  },
  async pushKey(){ if(!online()) return null; const { data } = await sb.rpc('vapid_public'); return data; },
  async savePush(sub){
    const j = sub.toJSON();
    const { error } = await sb.from('push_subs').upsert({ endpoint:j.endpoint, user_id:(await sb.auth.getUser()).data.user.id, family_id:sess.family_id, member_id:sess.member_id, sub:j });
    if(error) throw err(error);
  },
  async dropPush(endpoint){ if(sb) await sb.from('push_subs').delete().eq('endpoint', endpoint); },
};
async function check(){
  if(!online() || !sess) return true;
  const { data, error } = await sb.rpc('hello', { p_label: deviceLabel() });
  if(error) return true; // network trouble: keep working offline
  if(!data || data.blocked || data.family_id !== sess.family_id){ await API.logout(); onChange('loggedout'); return false; }
  return true;
}
function deviceLabel(){ const u=navigator.userAgent; return /iPhone/.test(u)?'iPhone':/iPad/.test(u)?'iPad':/Android/.test(u)?'Android':'Computer'; }
window.DB = API;
})();
