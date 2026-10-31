document.documentElement.lang='nl';
/* ---------- icons ---------- */
const I = {
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z"/></svg>',
  cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="15" rx="3"/><path d="M8 3v4M16 3v4M3.5 10h17"/><rect x="7" y="13" width="4" height="3" rx="1" fill="currentColor" stroke="none"/></svg>',
  todo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="m8.5 12 2.5 2.5 4.5-5"/></svg>',
  shop:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l-1.2 10.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8z"/><path d="M9 8V7a3 3 0 0 1 6 0v1"/></svg>',
  notes:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5h8.5L19 8v11.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1z"/><path d="M14 3.5V8.5h5M8.5 13h7M8.5 16.5h5"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
  left:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 5-7 7 7 7"/></svg>',
  right:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg>',
  rig:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="7.5" width="16" height="12" rx="2.5"/><path d="M9 7.5V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5v2M4 12.5h16M11 12.5v2h2v-2"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7h14M10 7V5h4v2M7 7l1 12h8l1-12M10.5 11v5M13.5 11v5"/></svg>',
  heli:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h14M11 5v3M7 12a4 4 0 0 1 4-4h3a3 3 0 0 1 3 3v1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zM17 11h4M8 18h8M10 14v4M14 14v4"/></svg>',
  baby:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="7"/><path d="M12 6c0-2 1.5-3 3-3M9.5 12h.01M14.5 12h.01M10 15.5c1.2 1 2.8 1 4 0"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"/></svg>',
  camera:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15 3l6 6-3 1-4 4 .5 4.5L13 20l-3.5-3.5L4 22l-.5-.5L9 16l-3.5-3.5L7 11l4.5.5 4-4z"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.6 1.8H4.4z"/><path d="M10 21a2.3 2.3 0 0 0 4 0"/></svg>',
  route:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11 21 3l-8 18-2-8z"/></svg>',
  cloudoff:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18h10a4 4 0 0 0 .7-7.94A6 6 0 0 0 6.2 9.1 4.5 4.5 0 0 0 7 18z"/><path d="m3 3 18 18"/></svg>',
  face:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"/><path d="M9 9v1M15 9v1M12 9v4h-1M9.5 16c1.5 1 3.5 1 5 0"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4-4"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg>',
  info:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.5h.01"/></svg>',
  home2:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11 12 4l8 7M6 9.5V20h12V9.5"/></svg>',
};

/* ---------- dates ---------- */
let NOW = new Date(), TODAY = '';
const esc = t => String(t??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const pad2 = n => String(n).padStart(2,'0');
const parse = s => { const [y,m,d]=s.split('-').map(Number); return new Date(y,m-1,d,12); };
const iso = d => `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`;
const add = (s,n) => { const d=parse(s); d.setDate(d.getDate()+n); return iso(d); };
const diff = (a,b) => Math.round((parse(b)-parse(a))/864e5);
const monday = s => { const d=parse(s); const k=(d.getDay()+6)%7; return add(s,-k); };
const WD = ['zo','ma','di','wo','do','vr','za'];
const WDL = ['zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag'];
const MOS = ['jan','feb','mrt','apr','mei','jun','jul','aug','sep','okt','nov','dec'];
const cap = t => t[0].toUpperCase()+t.slice(1);
const MO = ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'];
const fmt = (s,o={}) => { const d=parse(s); let t=''; if(o.wd) t+=WD[d.getDay()]+' '; t+=d.getDate()+' '+(o.long?MO[d.getMonth()]:MOS[d.getMonth()]); return t; };
const mins = t => { const [h,m]=t.split(':').map(Number); return h*60+m; };
let nowMin = 0;
/* the clock: keeps "today" and the red now-line up to date */
function tick(){ NOW=new Date(); nowMin=NOW.getHours()*60+NOW.getMinutes(); const t=iso(NOW), changed=!!TODAY&&t!==TODAY; TODAY=t; return changed; }
tick();

/* ---------- people ---------- */
/* family members come from the shared data: S.people = {id:{name,color,photo,child}} */
const GONE={name:'Oud gezinslid',init:'?',gone:true};
let P = new Proxy({}, {get:(t,k)=>t[k]||GONE});
const PK = () => { if(!S) return []; const ids=Object.keys(S.people); const o=(S.order||[]).filter(k=>ids.includes(k)); return [...o,...ids.filter(k=>!o.includes(k))]; };
const ADULTS = () => PK().filter(k=>!S.people[k].child);
/* the person with a work rooster (weg/thuis) */
const WK = () => S&&S.worker&&S.people[S.worker] ? S.worker : PK()[0];
function applyNames(){ const t={}; PK().forEach(k=>{ const p=S.people[k]; const n=(p.name||'').trim()||'Naamloos'; t[k]={name:n, init:n[0].toUpperCase(), child:!!p.child}; }); P=new Proxy(t,{get:(o,k)=>o[k]||GONE}); }
const photo = k => (S && S.people[k] && S.people[k].photo) ? DB.src(S.people[k].photo) : '';
const av = (k,s,extra='',inner='') => photo(k)
  ? `<span class="av p-${k} ph ${extra}" style="--s:${s}px;background-image:url(${photo(k)})">${inner}</span>`
  : `<span class="av p-${k} ${extra}" style="--s:${s}px">${P[k].child?I.baby:P[k].init}${inner}</span>`;
function startsOn(e,d){ if(e.date===d) return true; const k=diff(e.date,d); if(k<=0||!e.repeat||e.repeat==='none') return false; if(e.until&&diff(d,e.until)<0) return false;
  const n=e.every||1, a=parse(e.date), b=parse(d), md=(b.getFullYear()-a.getFullYear())*12+b.getMonth()-a.getMonth();
  if(e.repeat==='day') return k%n===0; if(e.repeat==='week') return k%(7*n)===0; if(e.repeat==='month') return d.slice(8)===e.date.slice(8)&&md%n===0; if(e.repeat==='year') return d.slice(5)===e.date.slice(5)&&(md/12)%n===0; return false; }
const spanOf = e => e.endDate&&e.endDate>e.date?diff(e.date,e.endDate):0;
/* all events on day d; multi-day events show on every day they cover, as an all-day band */
function evsOn(d){ const out=[]; for(const e of S.events){ const n=spanOf(e);
  for(let k=0;k<=n;k++){ const st=add(d,-k); if(!startsOn(e,st)) continue;
    out.push(n?{...e,date:d,occ:d!==e.date,multi:true,allDay:true,dayN:k+1,days:n+1,mStart:st}:e.date===d?e:{...e,date:d,occ:true}); break; } }
  return out; }
const UNIT={day:['dag','dagen'],week:['week','weken'],month:['maand','maanden'],year:['jaar','jaar']};
const repText = e => !e.repeat||e.repeat==='none'?'Niet':((e.every||1)===1?(e.repeat==='year'?'Elk jaar':'Elke '+UNIT[e.repeat][0]):`Elke ${e.every} ${UNIT[e.repeat][1]}`)+(e.until?` tot ${fmt(e.until)}`:'');
const byTime=(a,b)=>(b.allDay?1:0)-(a.allDay?1:0)||mins(a.start)-mins(b.start);
const REP={none:'Niet',week:'Elke week',month:'Elke maand',year:'Elk jaar'};
const repIc = e => (e.repeat&&e.repeat!=='none'?`<span class="rep" title="${repText(e)}">↻</span>`:'')+(e.multi?`<span class="mtag">dag ${e.dayN}/${e.days}</span>`:'');
const REM_T=[['none','Geen'],['0','Op het moment zelf'],['10','10 minuten van tevoren'],['30','30 minuten van tevoren'],['60','1 uur van tevoren'],['1440','1 dag van tevoren'],['10080','1 week van tevoren']];
const REM_D=[['none','Geen'],['0','Op de dag zelf om 09:00'],['1440','1 dag van tevoren om 09:00'],['10080','1 week van tevoren om 09:00']];
const remLabel=(e)=>{ const L=(e.allDay?REM_D:REM_T).find(x=>x[0]===String(e.remind)); return L?L[1]:'Geen'; };
const avs = (list,s) => `<span class="avs">${list.map(w=>av(w,s)).join('')}</span>`;
const evBg = who => {
  if(who.length===1) return `linear-gradient(160deg,var(--${who[0]}1),var(--${who[0]}2))`;
  return `linear-gradient(120deg,${who.map(w=>`var(--${w}2)`).join(',')})`;
};

/* how an event shows WHO it is for: design choice 1, 2 or 3 */
const evStyle = () => 'stripe'; // chosen by Julian 2026-10-31: stripe + faces on top
const tintBg = who => who.length===1?`color-mix(in srgb,var(--${who[0]}1) 22%,var(--surface))`:'color-mix(in srgb,var(--ink) 7%,var(--surface))';
const splitBg = who => who.length===1?`var(--${who[0]}${isDark(who[0])?'1':'2'})`:`linear-gradient(90deg,${who.map((w,i)=>`var(--${w}2) ${i*100/who.length}% ${(i+1)*100/who.length}%`).join(',')})`;
const whoLabel = who => who.length===1?P[who[0]].name:who.map(w=>P[w].init).join(' + ');
const awayPart = d => { const r=rot(d); if(!r.offshore) return ''; return d===r.p.from?'lv':d===r.p.to?'rt':'full'; };
const MID=12; // crew change shown around midday
function awayBg(d,H){ const a=awayPart(d); if(!a) return ''; const y=(MID-START)*H;
  if(a==='lv') return `<div class="offband lv" style="top:${y}px"></div><span class="offlbl" style="top:${y+4}px">werk</span>`;
  if(a==='rt') return `<div class="offband rt" style="bottom:auto;height:${y}px"></div><span class="offlbl" style="top:${y-14}px">vrij</span>`;
  return '<div class="offband"></div>'; }
const evsF = d => evsOn(d).filter(e=>!ui.agF||e.who.includes(ui.agF));
// long single-person blocks (like a work day) get a calm tinted style so evenings stand out
const isSoft = e => e.who.length===1 && (e.e-e.s)>=180;
const softCls = e => isSoft(e)?'soft':'';
const softVars = e => isSoft(e)?`--tint:var(--${e.who[0]}t);--edge:var(--${e.who[0]}2)`:'';
/* ---------- data: lives on the phone and syncs with the family (store.js) ---------- */
const id = () => (crypto.randomUUID?crypto.randomUUID().replace(/-/g,''):Math.random().toString(36).slice(2)+Date.now().toString(36)).slice(0,12);
let S = DB.load(onData, onStatus);
/* each person can pick their own colour (profile) */
const COLORS={blauw:['#5B83FF','#1F44D6'],rood:['#FF7A5C','#E8401C'],geel:['#FFD84D','#E0AE00',1],teal:['#3BB4C4','#14708F'],koraal:['#FF9273','#EC4F77'],groen:['#6CCB8F','#22814F'],mint:['#7EDDC8','#1E9C83'],indigo:['#8D93F5','#3F46B8'],paars:['#AE94F2','#6A47C9'],roze:['#F7A1C4','#D2477F'],oranje:['#FFB27A','#E0662B'],oker:['#FFC15C','#B97710'],bruin:['#C99E7C','#86563A'],leisteen:['#A3B1BE','#55677A']};
const DEF_ORDER=['blauw','rood','geel','groen','paars','oranje','teal','roze','indigo','oker','mint','koraal','bruin','leisteen'];
function applyTheme(){ const t=(S&&S.settings&&S.settings.theme)||localStorage.getItem('bijeen.theme')||'light'; try{localStorage.setItem('bijeen.theme',t);}catch(e){}
  if(t==='auto') delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme=t; }
const colOf = k => (S&&S.people[k]&&COLORS[S.people[k].color]&&S.people[k].color) || DEF_ORDER[Math.max(0,PK().indexOf(k))%DEF_ORDER.length];
const isDark = k => !!COLORS[colOf(k)][2];
/* every person gets CSS variables --<id>1, --<id>2, --<id>t; the first three also drive the accent colours */
function applyColors(){ if(!S) return; const r=document.documentElement.style; let css='';
  const ks=PK(); ks.forEach(k=>{ const c=COLORS[colOf(k)], d=c[2];
    css+=`:root{--${k}1:${c[0]};--${k}2:${c[1]};--${k}t:color-mix(in srgb,${c[1]} 11%,transparent)}
.av.p-${k}{background:${d?c[0]:c[1]};--rc:${c[0]};color:${d?'#4A2600':'#fff'}} .dot.p-${k}{background:${c[1]}} .note.t-${k}{--edge:${d?c[0]:c[1]}}\n`; });
  const acc=[WK(),...ks.filter(k=>k!==WK())]; ['j','l','b'].forEach((slot,i)=>{ const k=acc[i]; if(!k) return; const c=COLORS[colOf(k)];
    r.setProperty(`--${slot}1`,c[0]); r.setProperty(`--${slot}2`,c[1]); r.setProperty(`--${slot}t`,`color-mix(in srgb,${c[1]} 11%,transparent)`); });
  let st=document.getElementById('pcss'); if(!st){ st=document.createElement('style'); st.id='pcss'; document.head.appendChild(st); } st.textContent=css; }
const save = () => DB.save();
/* activity log: who did what, shown behind the bell on home */
const stamp = () => `${TODAY}T${pad2(NOW.getHours())}:${pad2(NOW.getMinutes())}`;
function logAct(text,href,date=''){ S.activity.unshift({id:id(),at:stamp(),who:S.me,text,href,date}); S.activity=S.activity.slice(0,80); }
const isNewAct = a => a.who!==S.me && a.at>(S.settings.seenAt||'');
const unread = () => S.activity.filter(isNewAct).length;
/* repeating tasks: ticking one off moves its deadline to the next time */
function nextDue(t){ let d=t.due||TODAY; const n=t.every||1;
  do{ if(t.repeat==='day') d=add(d,n); else if(t.repeat==='week') d=add(d,7*n); else { const x=parse(d); x.setMonth(x.getMonth()+n); d=iso(x); } } while(diff(TODAY,d)<=0);
  return d; }
function completeTask(t,item){
  if(t.repeat&&t.repeat!=='none'&&!t.done){ t.due=nextDue(t); logAct(`heeft “${t.title}” gedaan`,'#todo'); save(); item&&item.classList.add('done'); setTimeout(render,450); toast(`Gedaan. Volgende keer: ${fmt(t.due,{wd:1})}`); return; }
  t.done=!t.done; if(t.done) logAct(`heeft “${t.title}” afgevinkt`,'#todo'); save(); item&&item.classList.toggle('done',t.done); setTimeout(render,450); if(t.done) toast('Taak afgevinkt'); }

/* ---------- rotation ---------- */
function rot(d){
  for(const p of (S&&S.away||[])) if(diff(p.from,d)>=0&&diff(d,p.to)>=0) return {offshore:true, travel:d===p.from||d===p.to, p};
  return {offshore:false};
}

/* ---------- UI state ---------- */
const ui = { mode:'week', week:monday(TODAY), day:TODAY, month:TODAY.slice(0,8)+'01', sel:TODAY, todoF:'all', shopL:'Boodschappen', q:'' };
const $ = s => document.querySelector(s);
const main = $('#main');

const TABS = [['home','Home',I.home],['agenda','Agenda',I.cal],['todo','Taken',I.todo],['shop','Boodschappen',I.shop],['notes','Notities',I.notes]];
function route(){ const h=(location.hash||'#home').slice(1); return TABS.some(t=>t[0]===h)||h==='rooster'?h:'home'; }
/* links like #agenda/2026-11-02 (from a reminder) open that day */
function deepLink(){ const m=(location.hash||'').match(/^#agenda\/(\d{4}-\d\d-\d\d)$/); if(m){ const d=m[1]; ui.mode='day'; ui.day=d; ui.week=monday(d); ui.sel=d; ui.month=d.slice(0,8)+'01'; history.replaceState(null,'','#agenda'); }
  if(location.hash==='#bevestigd'){ history.replaceState(null,'','#home'); setTimeout(()=>toast('Je reserve e-mail is bevestigd'),400); } }
function render(){
  if(!S||!DB.session) return;
  deepLink();
  const r=route();
  $('#tabbar').innerHTML = TABS.map(([k,l,ic])=>`<a class="tab" href="#${k}" ${k===r?'aria-current="page"':''}><span class="ticon">${ic}</span>${l}</a>`).join('');
  $('#fab').innerHTML = I.plus;
  $('#fab').setAttribute('aria-label', {home:'Afspraak toevoegen',agenda:'Afspraak toevoegen',todo:'Taak toevoegen',shop:'Product toevoegen',notes:'Nieuwe notitie'}[r]);
  $('#fab').hidden = r==='rooster'; if(r!=='rooster') ui.rEdit=false;
  ({home:vHome,agenda:vAgenda,todo:vTodo,shop:vShop,notes:vNotes,rooster:vRooster})[r]();
  if(ui.offline&&main.firstElementChild) main.firstElementChild.insertAdjacentHTML('afterbegin',`<div class="offbar" role="status">${I.cloudoff}<span><b>Je bent offline</b>Alles werkt gewoon. ${ui.pending?`${ui.pending} ${ui.pending===1?'wijziging wacht':'wijzigingen wachten'} en ${ui.pending===1?'gaat':'gaan'} mee`:'Wat je aanpast gaat mee'} zodra je weer internet hebt.</span></div>`);
  if(r==='rooster'&&!ui.rJumped){ui.rJumped=true;requestAnimationFrame(()=>jumpNow(false));}
}
window.addEventListener('hashchange',()=>{ document.querySelectorAll('.scrim').forEach(x=>x.remove()); ui.rJumped=false; main.scrollTop=0; render(); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ const sc=[...document.querySelectorAll('.scrim')].pop(); if(sc) sc.click(); } });
/* something changed on another phone (or the clock moved on): redraw without losing your place */
let pendingDraw=false;
function quietRender(){ const a=document.activeElement; if(a&&main.contains(a)&&/INPUT|TEXTAREA|SELECT/.test(a.tagName)){ pendingDraw=true; return; }
  pendingDraw=false; const st=main.scrollTop; main.classList.add('quiet'); render(); main.scrollTop=st; requestAnimationFrame(()=>main.classList.remove('quiet')); }
main.addEventListener('focusout',()=>setTimeout(()=>{ if(pendingDraw) quietRender(); },50));
setInterval(()=>{ const day=tick(); if(day||route()==='home'||route()==='agenda') quietRender(); },60000);
$('#fab').onclick = () => { const r=route();
  if(r==='home'||r==='agenda') sheetEvent(); else if(r==='notes') sheetNote(); else if(r==='todo') sheetTask(); else sheetItem(); };

/* ---------- HOME ---------- */
const BLOCKS={today:'Vandaag',week:'Deze week',todo:'Taken',shop:'Boodschappen',rooster:'Rooster',notes:'Vastgezette notities'};
const DEFAULT_LAYOUT=[['today',1],['week',1],['todo',1],['shop',1],['rooster',1],['notes',1]];
function layout(){ S.layout=S.layout||{}; const L=S.layout[S.me]||DEFAULT_LAYOUT.map(x=>[...x]); Object.keys(BLOCKS).forEach(k=>{if(!L.some(x=>x[0]===k))L.push([k,0]);}); return L; }
function cfg(){ S.homeCfg=S.homeCfg||{}; const c=Object.assign({todo:'due',shop:S.shopLists[0],n:4},S.homeCfg[S.me]||{}); if(c.todo!=='due'&&!S.todoLists.includes(c.todo)) c.todo='due'; if(!S.shopLists.includes(c.shop)) c.shop=S.shopLists[0]; return c; }
function vHome(){
  const me=S.me;
  const rs=rot(TODAY);
  const hr=NOW.getHours(); const greet=hr<6?'Goedenacht':hr<12?'Goedemorgen':hr<18?'Goedemiddag':'Goedenavond';
  const F=ui.homeF, mine=e=>!F||e.who.includes(F);
  const more=(href,label)=>`<a class="link" href="${href}">${label}</a>`;
  const B={
    today:()=>{ const evs=evsOn(TODAY).filter(mine).sort(byTime);
      return `<div class="sec-h"><h2>Vandaag${F?` <span class="muted" style="font-family:var(--f-body);font-size:15px;font-weight:600">· ${P[F].name}</span>`:''}</h2><a class="link" href="#agenda" data-day="${TODAY}">Naar agenda</a></div>
      <div class="card today">${evs.length?evs.map(e=>{const s=mins(e.start),en=mins(e.end);const st=e.allDay?'':en<=nowMin?'past':s<=nowMin?'live':'';
        return `<button class="trow ${st}" data-ev="${e.id}"><div class="t num">${e.allDay?'Hele<small>dag</small>':`${e.start}<small>${st==='live'?'Nu':e.end}</small>`}</div><div class="bar" style="background:${evBg(e.who)}"></div><div class="ti">${esc(e.title)}${repIc(e)}${e.place?`<small>${esc(e.place)}</small>`:''}${e.note?`<small class="evn">${I.notes}${esc(e.note)}</small>`:''}</div><div class="who">${e.who.map(w=>av(w,24)).join('')}</div></button>`}).join(''):'<div class="trow"><div></div><div></div><div class="muted">Niets gepland vandaag</div></div>'}</div>`; },
    week:()=>`<div class="sec-h"><h2>Deze week</h2><span class="muted" style="font-size:13px">${fmt(add(TODAY,1),{wd:1})} – ${fmt(add(TODAY,7),{wd:1})}</span></div>
      <div class="card week7">${[1,2,3,4,5,6,7].map(i=>{const d=add(TODAY,i);const list=evsOn(d).filter(mine).sort(byTime);
        return `<div class="w7d"><a href="#agenda" class="w7h" data-day="${d}"><span class="w7n num">${parse(d).getDate()}</span><span>${cap(WDL[parse(d).getDay()])}</span>${rot(d).offshore&&(!F||F===WK())?`<span class="wkic" title="${P[WK()].name} werkt">${I.rig}</span>`:''}</a>
          ${list.length?list.map(e=>`<button class="w7e" data-ev="${e.id}"><span class="num">${e.allDay?'Hele dag':e.start}</span><i style="background:${evBg(e.who)}"></i><span class="w7t">${esc(e.title)}${repIc(e)}</span><span class="who">${e.who.map(w=>av(w,20)).join('')}</span></button>`).join(''):'<div class="w7e empty">Niets gepland</div>'}</div>`;}).join('')}</div>`,
    todo:()=>{ const src=cfg().todo; const t=S.todos.filter(x=>!x.done&&(!F||x.who.includes(F))&&(src==='due'||x.list===src)).sort((a,b)=>(a.due||'9').localeCompare(b.due||'9')).slice(0,cfg().n);
      return `<div class="sec-h"><div><h2>Taken</h2><div class="bsub">${src==='due'?'Eerst wat het snelst moet, uit alle lijsten':'Lijst: '+esc(src)}</div></div>${more('#todo','Alle taken')}</div><div class="list">${t.length?t.map(x=>{const dd=x.due?diff(TODAY,x.due):null;return `<div class="item"><button class="check" data-ht="${x.id}" aria-label="${esc(x.title)} klaar">${I.check}</button><button class="body edit" data-et="${x.id}"><div class="tt">${esc(x.title)}${repIc(x)}</div>${x.due?`<div class="meta"><span class="tag ${dd<=2?'soon':''}">${dd===0?'Vandaag':dd===1?'Morgen':dd<0?'Te laat':fmt(x.due,{wd:1})}</span><span class="tag">${esc(x.list)}</span></div>`:''}</button>${avs(x.who,26)}</div>`}).join(''):'<div class="item"><div class="body muted">Niets open. Lekker bezig.</div></div>'}</div>`; },
    shop:()=>{ const L=cfg().shop; const it=S.shop.filter(x=>!x.done&&x.list===L); const tot=S.shop.filter(x=>!x.done).length;
      return `<div class="sec-h"><div><h2>Boodschappen</h2><div class="bsub">Lijst: ${esc(L||'geen')}</div></div>${more('#shop',`Alles (${tot})`)}</div><div class="list shop">${it.length?it.slice(0,cfg().n).map(x=>`<div class="item shop"><button class="check" data-hs="${x.id}" aria-label="Gehaald: ${esc(x.name)}">${I.check}</button><button class="body edit" data-es="${x.id}"><div class="tt">${esc(x.name)}</div></button>${x.qty?`<span class="qty">${esc(x.qty)}</span>`:''}</div>`).join('')+(it.length>cfg().n?`<a href="#shop" class="item muted" style="font-size:14px">+ nog ${it.length-cfg().n} op ${esc(L)}</a>`:''):`<div class="item"><div class="body muted">${L?`${esc(L)} is leeg.`:'Nog geen lijsten.'}</div></div>`}</div>`; },
    rooster:()=>`<a href="#rooster" class="card tile rtile" style="margin-top:28px"><span class="ic" style="background:var(--jt);color:var(--j2)">${I.rig}</span><div style="min-width:0"><h3>Rooster</h3><span class="muted" style="font-size:13px">${(()=>{const c=S.away.find(p=>diff(p.from,TODAY)>=0&&diff(TODAY,p.to)>=0);const nx=S.away.filter(p=>diff(TODAY,p.from)>0).sort((a,b)=>a.from.localeCompare(b.from))[0];return c?`${P[WK()].name} weg: week ${isoWeek(c.from).w} t/m ${isoWeek(c.to).w}`:nx?`Volgende keer weg: week ${isoWeek(nx.from).w} t/m ${isoWeek(nx.to).w}`:'Nog niets ingepland';})()}</span></div><span class="muted" style="margin-left:auto">${I.right.replace('<svg','<svg width="18" height="18"')}</span></a>`,
    notes:()=>{ const pn=S.notes.filter(n=>n.pinned);
      return `<div class="sec-h"><h2>Vastgezet</h2>${more('#notes','Alle notities')}</div>${pn.length?`<div class="notes" style="margin-top:0">${pn.map(n=>`<button class="note t-${n.by[0]}" data-n="${n.id}"><h3>${esc(n.title)}</h3><p>${esc(n.body)}</p></button>`).join('')}</div>`:'<div class="list"><div class="item"><div class="body muted">Zet een notitie vast om hem hier te zien.</div></div></div>'}`; },
  };
  const blocks=layout().filter(x=>x[1]).map(x=>B[x[0]]()).join('');
  main.innerHTML=`<div class="view pad fade">
    <div class="htop"><div class="hdate"><b>${cap(WDL[parse(TODAY).getDay()])}</b> <span>${fmt(TODAY)} · wk ${isoWeek(TODAY).w}</span></div>
      <button class="iconbtn" data-search aria-label="Zoeken">${I.search}</button>
      <button class="iconbtn bell" id="bellBtn" aria-label="Meldingen${unread()?`, ${unread()} nieuw`:''}">${I.bell}${unread()?`<span class="nb num">${unread()}</span>`:''}</button>
      <button id="meBtn" aria-label="Jouw profiel">${av(me,38,'ring')}</button></div>
    <div class="fam">
      ${PK().map(k=>{ const w=k===WK()&&S.away.length; return `<button class="m ${F===k?'sel':F?'dim':''}" data-prof="${k}" aria-pressed="${F===k}">${av(k,52,'ring',w&&rs.offshore?`<span class="badge">${I.rig}</span>`:'')}<span>${esc(P[k].name)}${w?`<small style="display:block">${rs.offshore?'Werk':'Vrij'}</small>`:''}</span></button>`; }).join('')}
    </div>
    ${F?`<div class="famhint"><span>Alleen ${P[F].name}.</span><button id="allF">Iedereen tonen</button></div>`:''}
    ${blocks}
    <button class="btn ghost" id="layoutBtn" style="margin-top:28px">${I.edit} Home indelen</button>
    ${installHint()}
  </div>`;
  $('#meBtn').onclick=()=>sheetProfile();
  $('#bellBtn').onclick=sheetActivity;
  $('#layoutBtn').onclick=sheetLayout;
  main.querySelectorAll('[data-prof]').forEach(b=>b.onclick=()=>{const k=b.dataset.prof; ui.homeF=ui.homeF===k?null:k; render();});
  $('#allF')&&($('#allF').onclick=()=>{ui.homeF=null;render();});
  bindInstall();
  main.querySelectorAll('[data-day]').forEach(a=>a.addEventListener('click',()=>{const d=a.dataset.day;ui.week=monday(d);ui.day=d;ui.mode=a.classList.contains('w7h')?'day':'week';}));
  main.querySelectorAll('[data-ht]').forEach(b=>b.onclick=()=>completeTask(S.todos.find(x=>x.id===b.dataset.ht),b.closest('.item')));
  main.querySelectorAll('[data-hs]').forEach(b=>b.onclick=()=>{const x=S.shop.find(y=>y.id===b.dataset.hs);x.done=true;save();b.closest('.item').classList.add('done');setTimeout(render,350);});
  main.querySelectorAll('[data-et]').forEach(b=>b.onclick=()=>sheetTask(b.dataset.et));
  main.querySelectorAll('[data-es]').forEach(b=>b.onclick=()=>sheetItem(b.dataset.es));
  main.querySelectorAll('[data-n]').forEach(b=>b.onclick=()=>sheetNote(b.dataset.n));
  bindEv();
}
function sheetLayout(){
  const L=layout().map(x=>[...x]);
  openSheet(`<h2>Home indelen</h2><p class="sub">Zet blokken aan of uit en verander de volgorde met de pijltjes. Dit geldt alleen voor jouw home, ${P[S.me].name}.</p><div class="list" id="lo" style="margin-top:16px"></div>
    <div class="sr-h">Wat staat er op de home?</div>
    <label class="field" style="margin-top:4px"><span>Taken</span><select class="inp" id="cfT"><option value="due">Eerst wat het snelst moet (alle lijsten)</option>${S.todoLists.map(l=>`<option value="${esc(l)}" ${cfg().todo===l?'selected':''}>Alleen ${esc(l)}</option>`).join('')}</select></label>
    <label class="field"><span>Boodschappen</span><select class="inp" id="cfS">${S.shopLists.map(l=>`<option value="${esc(l)}" ${cfg().shop===l?'selected':''}>${esc(l)}</option>`).join('')}</select></label>
    <label class="field"><span>Aantal per blok</span><select class="inp" id="cfN">${[3,4,5,8].map(n=>`<option ${cfg().n===n?'selected':''}>${n}</option>`).join('')}</select></label>
    <div class="row2"><button type="button" class="btn ghost" id="lreset">Standaard</button><button type="button" class="btn" id="lsave">Opslaan</button></div>`,
  (el,close)=>{
    const draw=()=>{ el.querySelector('#lo').innerHTML=L.map(([k,on],i)=>`<div class="item lo ${on?'':'off'}">
        <label class="lotog"><input type="checkbox" data-on="${i}" ${on?'checked':''}><span class="tt">${BLOCKS[k]}</span></label>
        <button type="button" class="iconbtn del" data-up="${i}" ${i===0?'disabled':''} aria-label="${BLOCKS[k]} omhoog">${I.left.replace('<svg','<svg style="transform:rotate(90deg)"')}</button>
        <button type="button" class="iconbtn del" data-dn="${i}" ${i===L.length-1?'disabled':''} aria-label="${BLOCKS[k]} omlaag">${I.left.replace('<svg','<svg style="transform:rotate(-90deg)"')}</button></div>`).join('');
      el.querySelectorAll('[data-on]').forEach(c=>c.onchange=()=>{L[+c.dataset.on][1]=c.checked?1:0;draw();});
      el.querySelectorAll('[data-up]').forEach(b=>b.onclick=()=>{const i=+b.dataset.up;[L[i-1],L[i]]=[L[i],L[i-1]];draw();});
      el.querySelectorAll('[data-dn]').forEach(b=>b.onclick=()=>{const i=+b.dataset.dn;[L[i+1],L[i]]=[L[i],L[i+1]];draw();}); };
    el.querySelector('#lreset').onclick=()=>{L.splice(0,L.length,...DEFAULT_LAYOUT.map(x=>[...x]));draw();};
    el.querySelector('#lsave').onclick=()=>{S.layout=S.layout||{};S.layout[S.me]=L;S.homeCfg=S.homeCfg||{};S.homeCfg[S.me]={todo:el.querySelector('#cfT').value,shop:el.querySelector('#cfS').value,n:+el.querySelector('#cfN').value};save();close();render();toast('Home opgeslagen');};
    draw();
  });
}
function bindEv(){ main.querySelectorAll('[data-ev]').forEach(b=>b.onclick=()=>sheetEvDetail(b.dataset.ev)); }

/* ---------- AGENDA ---------- */
const START=7, END=23;
function clusters(list){
  list.sort((a,b)=>a.s-b.s||b.e-a.e); let cur=[],end=-1; const out=[];
  for(const e of list){ if(cur.length && e.s>=end){out.push(cur);cur=[];} cur.push(e); end=Math.max(end,e.e); }
  if(cur.length) out.push(cur);
  for(const c of out){ const lanes=[]; for(const e of c){ let i=lanes.findIndex(x=>x<=e.s); if(i<0){i=lanes.length;lanes.push(0);} lanes[i]=e.e; e.lane=i; } c.forEach(e=>e.n=lanes.length); }
  return list;
}
function vAgenda(){
  const M=ui.mode==='month';
  const ws=ui.week, we=add(ws,6);
  const m1=parse(ws).getMonth(), m2=parse(we).getMonth();
  const mm=parse(ui.month);
  const Y=ui.mode==='year', L=ui.mode==='list';
  ui.year=ui.year||+TODAY.slice(0,4); ui.listFrom=ui.listFrom||TODAY;
  const title = Y?String(ui.year):L?'Lijst':M?cap(MO[mm.getMonth()]):m1===m2?cap(MO[m1]):`${cap(MOS[m1])} – ${cap(MOS[m2])}`;
  const year = M?mm.getFullYear():L?'':parse(ws).getFullYear();
  // offshore banner for the visible range
  const ref = M?ui.sel:ui.mode==='day'?ui.day:(diff(ws,TODAY)>=0&&diff(TODAY,we)>=0?TODAY:[0,1,2,3,4,5,6].map(i=>add(ws,i)).find(d=>rot(d).offshore)||ws);
  const rs=rot(ref);
  const banner = rs.offshore?`<button class="banner" id="banner"><span class="bi">${I.rig}</span><span style="min-width:0"><b>${P[WK()].name} is weg</b><small>Iedereen kan op deze dagen gewoon plannen. Tik voor het rooster.</small></span></button>`
    :`<button class="banner" id="banner" style="background:var(--surface-2)"><span class="bi">${I.home2}</span><span><b>${P[WK()].name} is thuis</b><small>Tik voor het rooster</small></span></button>`;
  let body;
  if(Y) body=yearGrid(ui.year); else if(L) body=listView(); else if(M) body=monthGrid(ui.month); else if(ui.mode==='week') body=weekGrid(ws); else body=dayGrid(ui.day);
  const rightTools=`<span class="nav"><button class="iconbtn" data-rooster aria-label="Rooster">${I.rig}</button><button class="iconbtn" data-search aria-label="Zoeken">${I.search}</button><button class="today-btn" id="tod">Vandaag</button></span>`;
  const tools = Y?`<div class="ag-tools"><div class="nav"><button class="iconbtn" id="prev" aria-label="Vorig jaar">${I.left}</button><button class="iconbtn" id="next" aria-label="Volgend jaar">${I.right}</button></div>${rightTools}</div>`
    : L?`<div class="ag-tools"><span class="muted" style="font-size:13px">Alles wat eraan komt, vanaf ${fmt(ui.listFrom,{wd:1})}</span>${rightTools}</div>`
    : M?`<div class="ag-tools"><div class="nav"><button class="iconbtn" id="prev" aria-label="Vorige maand">${I.left}</button><button class="iconbtn" id="next" aria-label="Volgende maand">${I.right}</button></div><span class="nav"><button class="iconbtn" data-rooster aria-label="Rooster">${I.rig}</button><button class="iconbtn" data-search aria-label="Zoeken">${I.search}</button><button class="today-btn" id="tod">Vandaag</button></span></div>`
    : ui.mode==='week'?`<div class="ag-tools"><div class="nav"><button class="iconbtn" id="prev" aria-label="Vorige week">${I.left}</button><button class="iconbtn" id="next" aria-label="Volgende week">${I.right}</button></div><span class="muted num" style="font-size:13px;font-weight:600">${fmt(ws)} – ${fmt(we)}</span><span class="nav"><button class="iconbtn" data-rooster aria-label="Rooster">${I.rig}</button><button class="iconbtn" data-search aria-label="Zoeken">${I.search}</button><button class="today-btn" id="tod">Vandaag</button></span></div>`
    : `<div class="daystrip">${[0,1,2,3,4,5,6].map(i=>{const d=add(ws,i);return `<button data-pick="${d}" aria-pressed="${d===ui.day}"><span class="l">${WD[parse(d).getDay()].slice(0,2)}</span><span class="n num">${parse(d).getDate()}</span>${rot(d).offshore?`<span class="wkic" title="${P[WK()].name} werkt">${I.rig}</span>`:''}</button>`}).join('')}</div>`;
  const anim=ui.slide>0?'slide-n':ui.slide<0?'slide-p':'fade'; ui.slide=0;
  main.innerHTML=`<div class="view pad ${anim}" style="padding-bottom:140px">
    <div class="ag-head"><h1>${Y||L?title:`<button id="zoom" aria-label="Jaaroverzicht ${year}">${title} <span class="zoom">${I.right}</span></button>`} <small class="num">${Y||L?'':year}${M||Y||L?'':` · wk ${isoWeek(ui.mode==='day'?ui.day:ws).w}`}</small></h1>
      <div class="seg" role="group" aria-label="Weergave"><button data-mode="month" aria-pressed="${M}">Maand</button><button data-mode="week" aria-pressed="${ui.mode==='week'}">Week</button><button data-mode="day" aria-pressed="${ui.mode==='day'}">Dag</button><button data-mode="list" aria-pressed="${L}">Lijst</button></div></div>
    ${tools}
    ${ui.mode!=='day'&&!Y?`<div class="agf" role="group" aria-label="Filter op persoon"><button class="all" data-agf="" aria-pressed="${!ui.agF}">Iedereen</button>${PK().map(k=>`<button data-agf="${k}" aria-pressed="${ui.agF===k}">${av(k,24)}${esc(P[k].name)}</button>`).join('')}</div>`:''}
    ${body}
    <p class="aghint">${Y?'Tik op een maand om die te openen.':L?'Tik op een afspraak om hem te openen of aan te passen.':M?'Veeg naar links of rechts voor de volgende of vorige maand.':`<span>Veeg voor de ${ui.mode==='day'?'volgende of vorige dag':'volgende of vorige week'}. <b>Houd een leeg vak ingedrukt</b> (of dubbelklik) om daar meteen iets te plannen.</span>`}</p>
  </div>`;
  main.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{
    const from=ui.mode, to=b.dataset.mode; if(from===to) return;
    const anchor = from==='month'?ui.sel:from==='day'?ui.day:from==='year'||from==='list'?(ui.sel||TODAY):(diff(ws,TODAY)>=0&&diff(TODAY,we)>=0?TODAY:ws);
    if(to==='list') ui.listFrom=diff(TODAY,anchor)>0?anchor:TODAY, ui.listN=30;
    ui.mode=to; ui.week=monday(anchor); ui.day=anchor; ui.sel=anchor; ui.month=anchor.slice(0,8)+'01'; render();});
  main.querySelectorAll('[data-sty]').forEach(b=>b.onclick=()=>{S.settings=S.settings||{};S.settings.evStyle=b.dataset.sty;save();render();});
  main.querySelectorAll('[data-agf]').forEach(b=>b.onclick=()=>{ui.agF=b.dataset.agf||null;render();});
  $('#prev')&&($('#prev').onclick=()=>agStep(-1)); $('#next')&&($('#next').onclick=()=>agStep(1));
  $('#tod')&&($('#tod').onclick=()=>{ui.week=monday(TODAY);ui.month=TODAY.slice(0,8)+'01';ui.sel=TODAY;ui.day=TODAY;ui.year=+TODAY.slice(0,4);ui.listFrom=TODAY;render();});
  $('#zoom')&&($('#zoom').onclick=()=>{ui.prevMode=ui.mode;ui.year=+(M?ui.month:ui.mode==='day'?ui.day:ws).slice(0,4);ui.mode='year';ui.slide=0;render();});
  main.querySelectorAll('[data-ym]').forEach(b=>b.onclick=()=>{ui.month=b.dataset.ym;ui.sel=ui.month.slice(0,7)===TODAY.slice(0,7)?TODAY:ui.month;ui.mode='month';render();});
  $('#more')&&($('#more').onclick=()=>{ui.listN=(ui.listN||30)+30;const st=main.scrollTop;render();main.scrollTop=st;});
  main.querySelectorAll('[data-pick]').forEach(b=>b.onclick=()=>{ui.day=b.dataset.pick;render();});
  main.querySelectorAll('[data-sel]').forEach(b=>b.onclick=()=>{ui.sel=b.dataset.sel; if(ui.sel.slice(0,7)!==ui.month.slice(0,7)) ui.month=ui.sel.slice(0,8)+'01'; render();});
  main.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>{ui.day=b.dataset.open;ui.week=monday(ui.day);ui.mode='day';render();});
  main.querySelectorAll('[data-rooster]').forEach(b=>b.onclick=()=>location.hash='#rooster');
  bindEv();
}
document.addEventListener('click',e=>{ if(e.target.closest('[data-search]')) sheetSearch(); });
function agStep(n){
  if(ui.mode==='year'){ ui.year+=n; ui.slide=n; return render(); }
  if(ui.mode==='list') return;
  if(ui.mode==='month'){ const d=parse(ui.month); d.setMonth(d.getMonth()+n); ui.month=iso(d); ui.sel=ui.month.slice(0,7)===TODAY.slice(0,7)?TODAY:ui.month; }
  else if(ui.mode==='week') ui.week=add(ui.week,7*n);
  else { ui.day=add(ui.day,n); ui.week=monday(ui.day); }
  ui.slide=n; render();
}
/* swipe left/right in the agenda */
let sw=null;
main.addEventListener('touchstart',e=>{ sw=null; if(route()!=='agenda'||document.querySelector('.scrim')||e.touches.length>1) return; const t=e.touches[0]; sw={x:t.clientX,y:t.clientY,t:Date.now()}; },{passive:true});
main.addEventListener('touchend',e=>{ if(!sw) return; const t=e.changedTouches[0], dx=t.clientX-sw.x, dy=t.clientY-sw.y, dt=Date.now()-sw.t; sw=null;
  if(Math.abs(dx)<60||Math.abs(dx)<Math.abs(dy)*1.5||dt>700) return; agStep(dx<0?1:-1); });
/* long-press (or double-click) an empty slot to plan something there */
let lp=null;
function slotNew(col,y){
  const H=+col.closest('.grid').dataset.hh; let m=START*60+Math.floor(y/H*2)*30; m=Math.max(START*60,Math.min((END-1)*60,m));
  const g=document.createElement('div'); g.className='slotghost'; g.style.top=((m-START*60)/60*H)+'px'; g.style.height=(H-2)+'px'; col.appendChild(g);
  navigator.vibrate&&navigator.vibrate(12);
  setTimeout(()=>{ g.remove(); sheetEvent(null,{date:col.dataset.d,start:pad2(Math.floor(m/60))+':'+pad2(m%60),who:col.dataset.pw?[col.dataset.pw]:null}); },180);
}
main.addEventListener('pointerdown',e=>{ const col=e.target.closest('.col[data-d]'); if(!col||e.target.closest('.ev')) return; const y=e.clientY-col.getBoundingClientRect().top;
  lp={x:e.clientX,y:e.clientY,tm:setTimeout(()=>{lp=null;slotNew(col,y);},500)}; });
main.addEventListener('pointermove',e=>{ if(lp&&Math.hypot(e.clientX-lp.x,e.clientY-lp.y)>8){clearTimeout(lp.tm);lp=null;} });
['pointerup','pointercancel','pointerleave'].forEach(t=>main.addEventListener(t,()=>{ if(lp){clearTimeout(lp.tm);lp=null;} }));
main.addEventListener('contextmenu',e=>{ if(e.target.closest('.col[data-d]')) e.preventDefault(); });
main.addEventListener('dblclick',e=>{ const col=e.target.closest('.col[data-d]'); if(!col||e.target.closest('.ev')) return; slotNew(col,e.clientY-col.getBoundingClientRect().top); });
function yearGrid(y){
  const mos=[...Array(12)].map((_,m)=>{ const ms=`${y}-${pad2(m+1)}-01`, first=monday(ms), nd=new Date(y,m+1,0).getDate(), lead=diff(first,ms);
    let cells=''; for(let i=0;i<lead;i++) cells+='<i></i>';
    for(let k=1;k<=nd;k++){ const d=`${y}-${pad2(m+1)}-${pad2(k)}`; const has=evsF(d).length; cells+=`<i class="${has?'has':''} ${rot(d).offshore?'aw':''} ${d===TODAY?'td':''}">${k}</i>`; }
    return `<button class="ym ${ms.slice(0,7)===TODAY.slice(0,7)?'cur':''}" data-ym="${ms}" aria-label="${cap(MO[m])} ${y}"><h4>${cap(MO[m])}</h4><div class="g">${cells}</div></button>`; }).join('');
  return `<div class="yr">${mos}</div>`;
}
function listView(){
  const N=ui.listN||30; let out='', lastWk=null, shown=0;
  for(let i=0;i<N;i++){ const d=add(ui.listFrom,i); const evs=evsF(d).sort(byTime); if(!evs.length) continue;
    const w=isoWeek(d).w; if(w!==lastWk){ out+=`<div class="lst-wk">Week ${w}</div>`; lastWk=w; }
    out+=`<div class="lst-d"><b>${cap(WDL[parse(d).getDay()])} ${parse(d).getDate()} ${MO[parse(d).getMonth()]}</b><span>${d===TODAY?'vandaag':d===add(TODAY,1)?'morgen':''}</span>${rot(d).offshore?`<span class="wkic" title="${P[WK()].name} werkt">${I.rig}</span>`:''}</div>
      <div class="card today">${evs.map(e=>`<button class="trow" data-ev="${e.id}"><div class="t num">${e.allDay?'Hele<small>dag</small>':`${e.start}<small>${e.end}</small>`}</div><div class="bar" style="background:${evBg(e.who)}"></div><div class="ti">${esc(e.title)}${repIc(e)}${e.place?`<small>${esc(e.place)}</small>`:''}</div><div class="who">${e.who.map(w=>av(w,24)).join('')}</div></button>`).join('')}</div>`; shown++; }
  return (shown?out:'<div class="card today"><div class="trow"><div></div><div></div><div class="muted">Niets gepland</div></div></div>')+`<button class="more-btn" id="more">Toon nog ${30} dagen (t/m ${fmt(add(ui.listFrom,N+29))})</button>`;
}
function monthGrid(ms){
  const mon=ms.slice(0,7); const first=monday(ms);
  const last=add(ms.slice(0,8)+'01',0); const nd=new Date(parse(ms).getFullYear(),parse(ms).getMonth()+1,0).getDate();
  const weeks=Math.ceil((diff(first,ms)+nd)/7);
  const sorted=d=>evsF(d).sort(byTime);
  let cells='';
  for(let i=0;i<weeks*7;i++){
    const d=add(first,i), evs=sorted(d), o=rot(d), out=d.slice(0,7)!==mon;
    if(i%7===0) cells+=`<span class="mwk num" aria-label="Week ${isoWeek(d).w}">${isoWeek(d).w}</span>`;
    const prevOff=i%7>0&&rot(add(d,-1)).offshore, nextOff=i%7<6&&rot(add(d,1)).offshore;
    const ap=awayPart(d);
    cells+=`<button class="mc ${out?'out':''} ${ap?'away '+ap:''} ${d===TODAY?'is-today':''} ${d===ui.sel?'sel':''}" data-sel="${d}" aria-label="${fmt(d,{wd:1,long:1})}, ${evs.length} afspraken">
      <span class="mn num">${parse(d).getDate()}</span>${ap?`<span class="wkic" title="${P[WK()].name} werkt">${I.rig}</span>`:''}
      <span class="mev">${evs.slice(0,2).map(e=>evStyle()==='mine'?`<i class="${e.who.includes(S.me)?'':'faded'}" style="background:${evBg(e.who)}">${esc(e.title)}</i>`:['stripe','face','outline'].includes(evStyle())?`<i class="st" style="background:${tintBg(e.who)};--edge:var(--${e.who[0]}2)">${esc(e.title)}</i>`:`<i style="background:${evStyle()==='split'?splitBg(e.who):evBg(e.who)}" class="${e.who.length===1&&e.who[0]==='b'?'dark-text':''}">${esc(e.title)}</i>`).join('')}${evs.length>2?`<em>+${evs.length-2}</em>`:''}</span>
    </button>`;
  }
  const evs=sorted(ui.sel);
  const list=evs.length?evs.map(e=>`<button class="trow" data-ev="${e.id}"><div class="t num">${e.allDay?'Hele<small>dag</small>':`${e.start}<small>${e.end}</small>`}</div><div class="bar" style="background:${evBg(e.who)}"></div><div class="ti">${esc(e.title)}${e.place?`<small>${esc(e.place)}</small>`:''}${e.note?`<small class="evn">${I.notes}${esc(e.note)}</small>`:''}</div><div class="who">${e.who.map(w=>av(w,24)).join('')}</div></button>`).join('')
    :'<div class="trow"><div></div><div></div><div class="muted">Niets gepland</div></div>';
  return `<div class="cal mcal">
      <div class="mhead"><span class="wkh">wk</span>${['ma','di','wo','do','vr','za','zo'].map(x=>`<span>${x}</span>`).join('')}</div>
      <div class="mgrid">${cells}</div>
    </div>
    <div class="sec-h" style="margin-top:20px"><h2 style="font-size:18px">${cap(WDL[parse(ui.sel).getDay()])} ${fmt(ui.sel,{long:1})}</h2><button class="link" data-open="${ui.sel}">Open dag</button></div>
    <div class="card today">${list}</div>`;
}
function hoursCol(H){ let h=''; for(let i=START+1;i<END;i++) h+=`<span style="top:${(i-START)*H}px">${pad2(i)}</span>`; return `<div class="hours" style="height:${(END-START)*H}px">${h}</div>`; }
function hlines(H){ let h=''; for(let i=START+1;i<END;i++) h+=`<div class="hline" style="top:${(i-START)*H}px"></div>`; return h; }
function weekGrid(ws){
  const H=44; const days=[0,1,2,3,4,5,6].map(i=>add(ws,i));
  // offshore all-day segments
  let segs=[], run=null;
  days.forEach((d,i)=>{ const o=rot(d).offshore; if(o){ if(!run) run={a:i,b:i}; else run.b=i; } else if(run){segs.push(run);run=null;} }); if(run) segs.push(run);
  const offRow = segs.map(s=>{ const r=rot(days[s.a]); const label = s.b-s.a>=1?`${P[WK()].name} weg`:'Weg';
    return `<div class="seg-off" style="grid-column:${s.a+2}/${s.b+3}">${I.rig}<span>${label}</span></div>`; }).join('');
  const cols = days.map(d=>{
    const ro=rot(d);
    const raw=evsF(d).filter(e=>!e.allDay).map(e=>({...e,s:mins(e.start),e:mins(e.end)}));
    const ST=evStyle();
    // style 3: Julian left lane, Naomi right lane, together = full width
    const grp=e=>ST!=='lanes'?'all':e.who.includes('j')&&e.who.includes('l')?'both':e.who.includes('j')?'j':e.who.includes('l')?'l':'both';
    const GX={all:[0,100],both:[0,100],j:[0,50],l:[50,50]};
    const list=['both','all','j','l'].flatMap(g=>clusters(raw.filter(e=>grp(e)===g)).map(e=>({...e,g})));
    const evs=list.map(e=>{ const top=(e.s-START*60)/60*H, h=Math.max(18,(e.e-e.s)/60*H-2);
      const [gx,gw]=GX[e.g]; const w=gw/e.n, left=gx+w*e.lane; const dark=e.who.length===1&&isDark(e.who[0]);
      const pos=`top:${top}px;height:${h}px;left:calc(${left}% + 1px);width:calc(${w}% - 2px);${e.g==='both'?'z-index:0;':'z-index:1;'}`;
      const note=e.note&&h>44?I.notes.replace('<svg','<svg class="nic"'):'';
      if(ST==='stripe') return `<button class="ev st" data-ev="${e.id}" style="${pos}background:${tintBg(e.who)};--sn:${e.who.length}"><span class="stp">${e.who.map(w=>`<u style="background:var(--${w}2)"></u>`).join('')}</span>${h>62?`<span class="fcs">${e.who.map(w=>av(w,15)).join('')}</span>`:''}<b>${esc(e.title)}</b>${h>34?`<i>${e.start}</i>`:''}</button>`;
      const faces=(n)=>e.who.map(w=>av(w,n)).join('');
      if(ST==='face') return `<button class="ev fc" data-ev="${e.id}" style="${pos}background:${tintBg(e.who)}"><span class="fcs">${faces(16)}</span><b>${esc(e.title)}</b>${h>50?`<i>${e.start}</i>`:''}</button>`;
      if(ST==='outline') return `<button class="ev ol" data-ev="${e.id}" style="${pos}background:linear-gradient(var(--surface),var(--surface)),${e.who.length===1?`linear-gradient(var(--${e.who[0]}2),var(--${e.who[0]}2))`:splitBg(e.who)}"><b>${esc(e.title)}</b>${h>34?`<i>${e.start}</i>`:''}</button>`;
      if(ST==='mine'){ const mine=e.who.includes(S.me);
        if(!mine) return `<button class="ev oth" data-ev="${e.id}" style="${pos}"><b>${esc(e.title)}</b>${h>34?`<i>${e.start}</i>`:''}</button>`;
        return `<button class="ev ${dark?'dark-text':''}" data-ev="${e.id}" style="${pos}background:${evBg(e.who)}"><b>${esc(e.title)}</b>${h>34?`<i>${e.start}</i>`:''}${e.who.length>1&&h>56?`<span class="whos lt">${faces(14)}</span>`:''}</button>`; }
      if(ST==='split') return `<button class="ev ${dark?'dark-text':''}" data-ev="${e.id}" style="${pos}background:${splitBg(e.who)}"><em class="wl">${whoLabel(e.who)}</em><b>${esc(e.title)}</b>${h>44?`<i>${e.start}</i>`:''}${note}</button>`;
      return `<button class="ev ${dark?'dark-text':''} ${softCls(e)}" data-ev="${e.id}" style="${pos}background:${evBg(e.who)};${softVars(e)}"><b>${esc(e.title)}</b>${h>34?`<i>${e.start}</i>`:''}${note}</button>`; }).join('');
    const now = d===TODAY?`<div class="nowline" style="top:${(nowMin-START*60)/60*H}px"></div>`:'';
    return `<div class="col ${d===TODAY?'today-col':''} ${ST==='lanes'?'lanes':''}" data-d="${d}">${awayBg(d,H)}${evs}${now}</div>`;
  }).join('');
  return `<div class="cal">
    <div class="cal-days"><span class="wkc">wk<b class="num">${isoWeek(ws).w}</b></span>${days.map(d=>`<button data-open="${d}" class="${d===TODAY?'is-today':''} ${awayPart(d)?'away':''}" aria-label="Open ${fmt(d,{wd:1,long:1})}"><span class="l">${WD[parse(d).getDay()].slice(0,2)}</span><span class="n num">${parse(d).getDate()}</span>${`<span class="wkic" title="${P[WK()].name} werkt">${I.rig}</span>`}</button>`).join('')}</div>
    ${days.some(d=>evsF(d).some(e=>e.allDay))?`<div class="allday">${days.map((d,i)=>evsF(d).filter(e=>e.allDay&&(!e.multi||e.dayN===1||i===0)).map(e=>`<button class="adev ${e.multi?'multi':''}" data-ev="${e.id}" style="grid-row:auto;grid-column:${i+2} / span ${e.multi?Math.min(e.days-e.dayN,6-i)+1:1};${['stripe','face','outline','mine'].includes(evStyle())?`background:${tintBg(e.who)};color:var(--ink);box-shadow:inset ${e.who.map((w,k)=>`${3+k*3}px 0 0 var(--${w}2)`).reverse().join(',')};padding-left:${4+e.who.length*3}px`:evStyle()==='split'?`background:${splitBg(e.who)}`:`background:${evBg(e.who)}`}">${esc(e.title)}</button>`).join('')).join('')}</div>`:''}
    ${evStyle()==='lanes'&&!ui.agF?`<div class="lanehead"><span></span>${days.map(()=>`<div><b style="background:var(--j2)">J</b><b style="background:var(--l2)">N</b></div>`).join('')}</div>`:''}
    <div class="grid" style="--cols:7" data-hh="${H}">${hoursCol(H)}${cols}${hlines(H)}</div>
  </div>`;
}
function dayGrid(d){
  const H=58; const ro=rot(d); const order=PK(); const N=order.length||1;
  const all=evsOn(d).filter(e=>!e.allDay).map(e=>({...e,s:mins(e.start),e:mins(e.end)}));
  const multi=all.filter(e=>e.who.length>1), single=all.filter(e=>e.who.length===1);
  const box=(e,lane=0,n=1)=>{ const top=(e.s-START*60)/60*H, h=Math.max(22,(e.e-e.s)/60*H-3); const w=100/n; const dark=e.who.length===1&&isDark(e.who[0]);
    return `<button class="ev big ${dark?'dark-text':''} ${softCls(e)}" data-ev="${e.id}" style="top:${top}px;height:${h}px;left:calc(${w*lane}% + 3px);width:calc(${w}% - 6px);background:${evBg(e.who)};${softVars(e)}"><b>${esc(e.title)}</b>${h>40?`<i>${e.start}–${e.end}</i>`:''}${h>70&&e.who.length>1?`<span class="whos">${e.who.map(w=>av(w,16)).join('')}</span>`:''}</button>`; };
  const cols=order.map((p,ci)=>{
    const mine=clusters(single.filter(e=>e.who[0]===p||(ci===0&&!order.includes(e.who[0]))));
    let bg='';
    if(p===WK()) bg=awayBg(d,H);
    const now = d===TODAY?`<div class="nowline" style="top:${(nowMin-START*60)/60*H}px"></div>`:'';
    return `<div class="col" data-d="${d}" data-pw="${p}">${bg}${mine.map(e=>box(e,e.lane,e.n)).join('')}${ci===0?now:''}</div>`;
  }).join('');
  // multi-person events: overlay spanning their columns
  const spans=multi.map(e=>{ const idx=e.who.map(w=>order.indexOf(w)).filter(i=>i>=0).sort((x,y)=>x-y); if(!idx.length) idx.push(0); const a=idx[0], b=idx[idx.length-1];
    const top=(e.s-START*60)/60*H, h=Math.max(22,(e.e-e.s)/60*H-3);
    return `<button class="ev big" data-ev="${e.id}" style="top:${top}px;height:${h}px;left:calc(30px + (100% - 30px)*${a}/${N} + 3px);width:calc((100% - 30px)*${b-a+1}/${N} - 6px);background:${evBg(e.who)}"><b>${esc(e.title)}</b>${h>40?`<i>${e.start}–${e.end}${e.place?' · '+e.place:''}</i>`:''}${h>70?`<span class="whos">${e.who.map(w=>av(w,16)).join('')}</span>`:''}</button>`; }).join('');
  return `<div class="cal">
    <div class="people" style="--cols:${N}"><span class="wkc">wk<b class="num">${isoWeek(d).w}</b></span>
      ${order.map(k=>`<div class="ph">${av(k,40,'ring')}${esc(P[k].name)}${k===WK()&&S.away.length?`<small class="${ro.offshore?'':'vrij'}">${ro.offshore?'Werk':'Vrij'}</small>`:''}</div>`).join('')}
    </div>
    ${(()=>{const ad=evsOn(d).filter(e=>e.allDay);return ad.length?`<div class="dayall">${ad.map(e=>`<button data-ev="${e.id}" style="background:${evBg(e.who)}">${esc(e.title)} · hele dag</button>`).join('')}</div>`:'';})()}
    <div class="grid" style="--cols:${N}" data-hh="${H}">${hoursCol(H)}${cols}${hlines(H)}${spans}</div>
  </div>`;
}

/* ---------- TODO ---------- */
function vTodo(){
  const f=ui.todoF; const lists=S.todoLists;
  const vis=t=>f==='all'||t.who.includes(f);
  const cnt=k=>S.todos.filter(t=>!t.done&&(k==='all'||t.who.includes(k))).length;
  main.innerHTML=`<div class="view pad fade">
    <div class="pg-h"><div><h1>Taken</h1><p>${cnt('all')} openstaande taken voor jullie samen</p></div><button class="pill-btn" id="lists">${I.edit} Lijsten</button></div>
    <div class="chips" role="group" aria-label="Filter">${[['all','Iedereen'],...ADULTS().map(k=>[k,esc(P[k].name)])].map(([k,l])=>`<button data-f="${k}" aria-pressed="${f===k}">${k!=='all'?av(k,20):''}${l} <em class="num">${cnt(k)}</em></button>`).join('')}</div>
    ${lists.map((L,li)=>{ const all=S.todos.filter(t=>t.list===L); const items=all.filter(vis); if(!items.length&&f!=='all') return '';
      const d=all.filter(t=>t.done).length; items.sort((a,b)=>a.done-b.done||(a.due||'9').localeCompare(b.due||'9'));
      return `<div class="group"><div class="group-h"><h3>${esc(L)}</h3><span style="display:flex;gap:8px;align-items:center"><span class="cnt">${d}/${all.length}</span><span class="prog"><i style="width:${all.length?d/all.length*100:0}%"></i></span></span></div>
      <div class="list">${items.map(t=>{const dd=t.due?diff(TODAY,t.due):null;
        return `<div class="item ${t.done?'done':''}"><button class="check" data-t="${t.id}" aria-label="${esc(t.title)} ${t.done?'niet klaar':'klaar'}">${I.check}</button><button class="body edit" data-et="${t.id}"><div class="tt">${esc(t.title)}${repIc(t)}</div>${t.due&&!t.done?`<div class="meta"><span class="tag ${dd<=2?'soon':''}">${dd===0?'Vandaag':dd===1?'Morgen':dd<0?'Te laat':fmt(t.due,{wd:1})}</span></div>`:''}</button>${avs(t.who,26)}</div>`}).join('')}
        <form class="item addrow" data-addto="${li}"><span class="plusic">${I.plus}</span><input placeholder="Taak toevoegen" aria-label="Taak toevoegen aan ${esc(L)}" autocomplete="off"></form></div></div>`;}).join('')}
  </div>`;
  main.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{ui.todoF=b.dataset.f;render();});
  main.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>completeTask(S.todos.find(x=>x.id===b.dataset.t),b.closest('.item')));
  main.querySelectorAll('[data-et]').forEach(b=>b.onclick=()=>sheetTask(b.dataset.et));
  main.querySelectorAll('[data-addto]').forEach(fm=>fm.onsubmit=e=>{e.preventDefault();const inp=fm.querySelector('input');const v=inp.value.trim();if(!v)return;const L=S.todoLists[+fm.dataset.addto];
    S.todos.push({id:id(),title:v,list:L,who:[ui.todoF!=='all'&&S.people[ui.todoF]?ui.todoF:S.me],due:'',done:false});logAct(`heeft taak “${v}” toegevoegd`,'#todo');save();render();toast(`Toegevoegd aan ${L}`);
    const again=main.querySelector(`[data-addto="${fm.dataset.addto}"] input`); again&&again.focus();});
  $('#lists').onclick=()=>sheetLists('todo');
}

/* ---------- SHOP ---------- */
const SUGG={Boodschappen:['Melk','Eieren','Brood','Koffie','Appels'],Baby:['Billendoekjes','Billencrème','Slabbers'],Huis:['Wc-papier','Vuilniszakken']};
function vShop(){
  if(!S.shopLists.includes(ui.shopL)) ui.shopL=S.shopLists[0]||'';
  const L=ui.shopL; const items=S.shop.filter(s=>s.list===L);
  const open=items.filter(s=>!s.done), done=items.filter(s=>s.done);
  const cats=[...new Set(open.map(s=>s.cat||'Overig'))].sort((a,b)=>{const ia=S.shopCats.indexOf(a),ib=S.shopCats.indexOf(b);return (ia<0?99:ia)-(ib<0?99:ib);});
  const row=s=>`<div class="item shop ${s.done?'done':''}"><button class="check" data-s="${s.id}" aria-label="${s.done?'Terugzetten':'Gehaald'}: ${esc(s.name)}">${I.check}</button><button class="body edit" data-es="${s.id}"><div class="tt">${esc(s.name)}</div></button>${s.qty?`<span class="qty">${esc(s.qty)}</span>`:''}<i class="dot p-${s.by}" title="Toegevoegd door ${P[s.by].name}"></i></div>`;
  main.innerHTML=`<div class="view pad fade">
    <div class="pg-h"><div><h1>Boodschappen</h1><p>${S.shop.filter(s=>!s.done).length} dingen te halen</p></div><button class="pill-btn" id="lists">${I.edit} Lijsten</button></div>
    <div class="chips" role="group" aria-label="Lijst">${S.shopLists.map(k=>`<button data-l="${esc(k)}" aria-pressed="${L===k}">${esc(k)} <em class="num">${S.shop.filter(s=>s.list===k&&!s.done).length}</em></button>`).join('')}<button id="newlist" class="ghostchip">+ Nieuwe lijst</button></div>
    ${L?`<form class="quick" id="qf"><input id="quick" placeholder="Toevoegen aan ${esc(L)}… bijv. “2 melk”" autocomplete="off" aria-label="Nieuw product"><button class="go" aria-label="Product toevoegen">${I.plus}</button></form>
    ${cats.map(c=>`<div class="group"><div class="group-h"><h3>${esc(c)}</h3><span style="display:flex;gap:10px;align-items:center"><span class="cnt">${open.filter(s=>(s.cat||'Overig')===c).length}</span><button class="catedit" data-cats aria-label="Categorieën beheren">${I.edit}</button></span></div><div class="list">${open.filter(s=>(s.cat||'Overig')===c).map(row).join('')}</div></div>`).join('')}
    ${!open.length?`<div class="group"><div class="list"><div class="item"><div class="body muted">${items.length?'Alles gehaald. Lekker bezig.':'Deze lijst is nog leeg. Voeg hierboven iets toe.'}</div></div></div></div>`:''}
    ${done.length?`<div class="basket-h"><h3 style="font-size:17px">In het mandje <span class="muted num" style="font-family:var(--f-body);font-size:13px">${done.length}</span></h3><button id="clear">Leegmaken</button></div><div class="list" style="margin-top:8px">${done.map(row).join('')}</div>`:''}`
    :`<div class="group"><div class="list"><div class="item"><div class="body muted">Je hebt nog geen lijsten. Maak er een met “Nieuwe lijst”.</div></div></div></div>`}
  </div>`;
  main.querySelectorAll('[data-l]').forEach(b=>b.onclick=()=>{ui.shopL=b.dataset.l;render();});
  main.querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>{const s=S.shop.find(x=>x.id===b.dataset.s);s.done=!s.done;save();b.closest('.item').classList.toggle('done',s.done);setTimeout(render,350);});
  main.querySelectorAll('[data-es]').forEach(b=>b.onclick=()=>sheetItem(b.dataset.es));
  const addItem=v=>{const m=v.match(/^(\d+\s*\w{0,4})\s+(.+)$/);const qty=m?m[1]:'';const name=(m?m[2]:v);const known=S.shop.find(x=>x.list===L&&x.name.toLowerCase()===name.toLowerCase());
    const nm=name[0].toUpperCase()+name.slice(1); S.shop.unshift({id:id(),name:nm,cat:known?known.cat:'',list:L,by:S.me,qty,done:false});logAct(`heeft ${nm}${qty?` (${qty})`:''} op ${L} gezet`,'#shop');save();render();toast(`${name} toegevoegd`);};
  $('#qf')&&($('#qf').onsubmit=e=>{e.preventDefault();const v=$('#quick').value.trim();if(v)addItem(v);});
  $('#clear')&&($('#clear').onclick=()=>{logAct(`heeft ${done.length} ${done.length===1?'ding':'dingen'} van ${L} gehaald`,'#shop');S.shop=S.shop.filter(s=>!(s.list===L&&s.done));save();render();toast('Mandje leeggemaakt');});
  $('#lists').onclick=()=>sheetLists('shop');
  $('#newlist').onclick=()=>sheetLists('shop',true);
  main.querySelectorAll('[data-cats]').forEach(b=>b.onclick=()=>sheetLists('cat'));
}

/* ---------- NOTES ---------- */
function vNotes(){
  const q=ui.q.toLowerCase();
  const list=S.notes.filter(n=>!q||(n.title+n.body).toLowerCase().includes(q)).sort((a,b)=>b.pinned-a.pinned);
  main.innerHTML=`<div class="view pad fade">
    <div class="pg-h"><div><h1>Notities</h1><p>${S.notes.length} notities · gedeeld</p></div><button class="pill-btn" id="newnote">${I.plus} Nieuw</button></div>
    <label class="search">${I.search}<input id="nq" placeholder="Zoek in notities" value="${esc(ui.q)}" aria-label="Zoek in notities"></label>
    <div class="notes">${list.map(n=>`<button class="note t-${n.by[0]}" data-n="${n.id}">${n.photos&&n.photos.length?`<span class="nimg" style="background-image:url(${DB.src(n.photos[0])})"></span>`:''}${n.pinned?`<span class="pin">${I.pin}</span>`:''}<h3 style="padding-right:${n.pinned?18:0}px">${esc(n.title)}</h3><p>${esc(n.body)}</p><div class="nf"><span>${n.edited}</span>${av(n.by[0],20)}</div></button>`).join('')}</div>
  </div>`;
  const nq=$('#nq'); nq.oninput=()=>{ui.q=nq.value;const p=nq.selectionStart;vNotes();const n2=$('#nq');n2.focus();n2.setSelectionRange(p,p);};
  main.querySelectorAll('[data-n]').forEach(b=>b.onclick=()=>sheetNote(b.dataset.n));
  $('#newnote').onclick=()=>sheetNote();
}

/* ---------- sheets ---------- */
function openSheet(html, mount){
  const sc=document.createElement('div'); sc.className='scrim';
  sc.innerHTML=`<div class="sheet pad" role="dialog" aria-modal="true"><div class="grab"></div>${html}</div>`;
  $('#app').appendChild(sc); requestAnimationFrame(()=>sc.classList.add('open'));
  let closed=false; const close=()=>{if(closed)return;closed=true;sc.classList.remove('open');setTimeout(()=>sc.remove(),250);};
  sc.addEventListener('click',e=>{if(e.target===sc) {close(); sc.onDismiss&&sc.onDismiss();}});
  mount && mount(sc.querySelector('.sheet'), close, sc);
}
function whoPick(sel,keys=PK()){ return `<div class="who-pick" id="who">${keys.map(k=>`<button type="button" data-w="${k}" aria-pressed="${sel.includes(k)}">${av(k,26)}${P[k].name}</button>`).join('')}</div>`; }
function choiceChips(name,opts,val){ return `<div class="who-pick" data-group="${name}">${opts.map(o=>`<button type="button" data-v="${esc(o)}" aria-pressed="${o===val}">${esc(o)}</button>`).join('')}</div>`; }
function bindChoice(el,name,cb){ const g=el.querySelector(`[data-group="${name}"]`); g.querySelectorAll('button').forEach(b=>b.onclick=()=>{g.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));cb(b.dataset.v);}); }
function awayHint(d,withJ){ const r=d&&rot(d); return r&&r.offshore?`<div class="hint">${I.rig}<span>${esc(P[WK()].name)} werkt deze dag${r.travel?' (crew change)':''}. Dat blokkeert niets: je kunt hier gewoon plannen${withJ?` en ${esc(P[WK()].name)} ziet het in de agenda.`:'.'}</span></div>`:''; }
function sheetEvent(eid,pre){
  const ex=eid&&S.events.find(x=>x.id===eid);
  const d=ex?ex.date:pre&&pre.date?pre.date:route()==='agenda'?(ui.mode==='day'?ui.day:ui.mode==='month'?ui.sel:(diff(ui.week,TODAY)>=0&&diff(TODAY,add(ui.week,6))>=0?TODAY:ui.week)):TODAY;
  const sel=new Set(ex?ex.who:pre&&pre.who?pre.who:[S.me]);
  const st0=ex?ex.start:pre&&pre.start||'18:00', en0=ex?ex.end:pad2(Math.min(23,+st0.slice(0,2)+1))+st0.slice(2);
  openSheet(`<h2>${ex?'Afspraak bewerken':'Nieuwe afspraak'}</h2><p class="sub">${ex?(ex.repeat&&ex.repeat!=='none'?`Dit is een herhalende afspraak (${repText(ex).toLowerCase()}). Wijzigingen gelden voor alle keren.`:'Wijzigingen zijn meteen zichtbaar voor jullie allebei.'):'Meteen zichtbaar voor jullie allebei.'}</p>
    <form id="ef">
    <label class="field"><span>Wat</span><input class="inp" id="et" placeholder="bijv. Etentje bij Bram & Eva" value="${ex?esc(ex.title):''}" required></label>
    <div class="field"><span>Wie</span>${whoPick([...sel])}</div>
    <div class="row2"><label class="field"><span>Datum</span><input class="inp" type="date" id="ed" value="${d}"></label><label class="field"><span>Tot en met</span><input class="inp" type="date" id="eend" value="${ex&&ex.endDate||d}"></label></div>
    <p class="muted" id="multisum" style="font-size:12.5px;margin:-4px 2px 0"></p>
    <label class="toggle"><input type="checkbox" id="eall" ${ex&&ex.allDay?'checked':''}><span>Hele dag (bijv. een verjaardag)</span></label>
    <div class="row2" id="times"><label class="field"><span>Van</span><input class="inp" type="time" id="es" value="${st0}"></label><label class="field"><span>Tot</span><input class="inp" type="time" id="ee" value="${en0}"></label></div>
    <div class="field"><span>Herhalen</span><div class="who-pick" id="rep"></div>
      <div class="repc" id="repc"><span>Elke</span><div class="stepper sm"><button type="button" id="rnm" aria-label="Minder">−</button><b class="num" id="rn">1</b><button type="button" id="rnp" aria-label="Meer">+</button></div>
        <select class="inp" id="ru" aria-label="Eenheid"><option value="day">dag(en)</option><option value="week">week/weken</option><option value="month">maand(en)</option><option value="year">jaar</option></select></div>
      <label class="repu" id="repu"><span>Stopt op</span><input class="inp" type="date" id="runtil" aria-label="Stopt op"><button type="button" id="runclr">Nooit</button></label>
      <div class="repsum" id="repsum"></div></div>
    <label class="field"><span>Herinnering</span><select class="inp" id="erem"></select></label>
    <div class="field"><span>Waar</span><div class="placerow"><div class="placewrap"><input class="inp" id="ep" placeholder="Begin met typen, bijv. Pontweg" value="${ex?esc(ex.place):''}" aria-label="Waar" autocomplete="off"><div class="sugg-list" id="psugg" hidden></div></div><a class="routebtn" id="route" target="_blank" rel="noopener">${I.route}Route</a></div></div>
    <label class="field"><span>Notitie</span><textarea class="inp evnote" id="en" placeholder="bijv. vragen om mee te nemen, wat je moet meenemen, adres…">${ex?esc(ex.note||''):''}</textarea></label>
    <div class="field"><span>Foto’s</span><div class="phs" id="phs"></div></div>
    <div id="hint"></div>
    <button class="btn">${ex?'Opslaan':'Zet in agenda'}</button>
    ${ex?'<button type="button" class="btn danger" id="del">Afspraak verwijderen</button>':''}</form>`,
  (el,close)=>{
    const R={repeat:ex&&ex.repeat||'none',every:ex&&ex.every||1,until:ex&&ex.until||''}; let custom=false;
    const PRE=[['Niet','none',1],['Elke week','week',1],['Elke 2 weken','week',2],['Elke maand','month',1],['Elk jaar','year',1]];
    const isPre=()=>PRE.some(p=>p[1]===R.repeat&&(R.repeat==='none'||p[2]===R.every));
    custom=!isPre();
    const drawRep=()=>{ el.querySelector('#rep').innerHTML=PRE.map(([l,u,n],i)=>`<button type="button" data-p="${i}" aria-pressed="${!custom&&R.repeat===u&&(u==='none'||R.every===n)}">${l}</button>`).join('')+`<button type="button" data-p="c" aria-pressed="${custom}">Aangepast…</button>`;
      el.querySelector('#repc').hidden=!custom; el.querySelector('#repu').hidden=R.repeat==='none';
      el.querySelector('#rn').textContent=R.every; el.querySelector('#ru').value=R.repeat==='none'?'week':R.repeat; el.querySelector('#runtil').value=R.until;
      el.querySelector('#repsum').textContent=R.repeat==='none'?'':`${repText(R)}${R.until?'':', zonder einddatum'}.`;
      el.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>{ if(b.dataset.p==='c'){custom=true; if(R.repeat==='none'){R.repeat='week';R.every=3;}} else {custom=false; const p=PRE[+b.dataset.p]; R.repeat=p[1]; R.every=p[2]; if(R.repeat==='none')R.until='';} drawRep(); }); };
    el.querySelector('#rnm').onclick=()=>{R.every=Math.max(1,R.every-1);drawRep();}; el.querySelector('#rnp').onclick=()=>{R.every=Math.min(52,R.every+1);drawRep();};
    el.querySelector('#ru').onchange=e=>{R.repeat=e.target.value;drawRep();};
    el.querySelector('#runtil').onchange=e=>{R.until=e.target.value;drawRep();}; el.querySelector('#runclr').onclick=()=>{R.until='';drawRep();};
    drawRep();
    const remSel=el.querySelector('#erem'), allCb=el.querySelector('#eall');
    const fillRem=(keep)=>{ const A=allCb.checked; const opts=A?REM_D:REM_T; const def=String(A?(S.settings?.remD??'1440'):(S.settings?.remT??'30')); const cur=keep??(ex&&ex.allDay===A&&ex.remind!=null?String(ex.remind):def);
      remSel.innerHTML=opts.map(([v,l])=>`<option value="${v}" ${v===cur?'selected':''}>${l}</option>`).join(''); el.querySelector('#times').hidden=A; };
    allCb.onchange=()=>fillRem(); fillRem();
    const upd=()=>{ el.querySelector('#hint').innerHTML=awayHint(el.querySelector('#ed').value,sel.has(WK())); };
    el.querySelectorAll('[data-w]').forEach(b=>b.onclick=()=>{const k=b.dataset.w; sel.has(k)?sel.delete(k):sel.add(k); if(!sel.size) sel.add(k); el.querySelectorAll('[data-w]').forEach(x=>x.setAttribute('aria-pressed',sel.has(x.dataset.w))); upd();});
    const edI=el.querySelector('#ed'), endI=el.querySelector('#eend'), msum=el.querySelector('#multisum');
    const updMulti=()=>{ if(endI.value<edI.value) endI.value=edI.value; const n=diff(edI.value,endI.value); msum.textContent=n>0?`${n+1} dagen, t/m ${fmt(endI.value,{wd:1})}. Staat als balk over alle dagen.`:'';
      if(n>0&&!allCb.checked){allCb.checked=true;fillRem();} };
    edI.onchange=()=>{const old=diff(d,endI.value); upd(); endI.value=add(edI.value,Math.max(0,old)); updMulti();}; endI.onchange=updMulti; upd(); updMulti();
    const pI=el.querySelector('#ep'), rb=el.querySelector('#route');
    const updRoute=()=>{ const v=pI.value.trim(); rb.hidden=!v; rb.href='https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(v); };
    pI.oninput=()=>{updRoute(); placeSuggest(pI,el.querySelector('#psugg'),updRoute);}; updRoute();
    const photos=[...(ex&&ex.photos||[])]; photoField(el.querySelector('#phs'),photos);
    el.querySelector('#ef').onsubmit=e=>{e.preventDefault(); let s=el.querySelector('#es').value||'18:00', en=el.querySelector('#ee').value||'19:00'; if(mins(en)<=mins(s)) en=pad2(Math.min(23,Math.floor(mins(s)/60)+1))+':'+pad2(mins(s)%60);
      const date=el.querySelector('#ed').value||d;
      const data={date,start:s,end:en,title:el.querySelector('#et').value.trim()||'Nieuwe afspraak',who:[...PK().filter(k=>sel.has(k)),...[...sel].filter(k=>!PK().includes(k))],place:el.querySelector('#ep').value.trim(),note:el.querySelector('#en').value.trim(),allDay:allCb.checked,endDate:diff(date,endI.value)>0?endI.value:'',photos,repeat:R.repeat,every:R.every,until:R.repeat==='none'?'':R.until,remind:remSel.value};
      if(ex) Object.assign(ex,data); else S.events.push({id:id(),...data});
      logAct(`heeft “${data.title}” in de agenda ${ex?'aangepast':'gezet'}`,'#agenda',date);
      save(); close(); ui.week=monday(date); ui.day=date; ui.sel=date; ui.month=date.slice(0,8)+'01'; if(route()!=='agenda') location.hash='#agenda'; else render(); toast((ex?'Afspraak bijgewerkt':'Staat in de agenda')+(data.remind!=='none'?` · herinnering ${remLabel(data).toLowerCase().replace(' van tevoren','')}`:''))};
    ex&&confirmBtn(el.querySelector('#del'),'Tik nogmaals om te verwijderen',()=>{logAct(`heeft “${ex.title}” uit de agenda gehaald`,'#agenda',ex.date);S.events=S.events.filter(x=>x.id!==eid);save();close();render();toast('Afspraak verwijderd');});
    if(!ex) setTimeout(()=>el.querySelector('#et').focus(),300);
  });
}
const sheetEvDetail = sheetEvent;
/* Bijeen logo: three hexagons in the family's own colours (Julian, Naomi, baby) */
const hexPts=(cx,cy,r)=>[...Array(6)].map((_,i)=>{const a=Math.PI/180*(60*i-90);return (cx+r*Math.cos(a)).toFixed(1)+','+(cy+r*Math.sin(a)).toFixed(1);}).join(' ');
const logoSvg=(size)=>`<svg width="${size}" height="${size}" viewBox="0 0 100 100" aria-hidden="true"><rect width="100" height="100" rx="23" fill="#FFD84D"/><polygon points="${hexPts(50,52,33)}" fill="#141413"/><path d="M43 85V70a7 7 0 0 1 14 0v15z" fill="#FFD84D"/></svg>`;
/* sign-in without Apple/Google: family code once per phone, then your own pincode (or Face ID / fingerprint) */
const Lock={
  get(){ try{ return JSON.parse(localStorage.getItem('bijeen.lock'))||{}; }catch(e){ return {}; } },
  put(v){ try{ localStorage.setItem('bijeen.lock',JSON.stringify(v)); }catch(e){} },
  async hash(pin,salt){ const k=await crypto.subtle.importKey('raw',new TextEncoder().encode(pin),'PBKDF2',false,['deriveBits']);
    const b=await crypto.subtle.deriveBits({name:'PBKDF2',salt:new TextEncoder().encode(salt),iterations:150000,hash:'SHA-256'},k,256); return btoa(String.fromCharCode(...new Uint8Array(b))); },
  async setPin(pin){ const l=this.get(); l.salt=id(); l.hash=await this.hash(pin,l.salt); this.put(l); },
  async check(pin){ const l=this.get(); return !!l.hash && await this.hash(pin,l.salt)===l.hash; },
  lock(){ const l=this.get(); l.locked=true; this.put(l); },
  unlock(){ const l=this.get(); l.locked=false; this.put(l); },
  get locked(){ return !!this.get().locked; },
};
/* Face ID / fingerprint: the phone's own lock, used only to open the app on this phone */
const b64=b=>btoa(String.fromCharCode(...new Uint8Array(b))), unb64=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
const Bio={
  async available(){ try{ return !!(window.PublicKeyCredential&&await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()); }catch(e){ return false; } },
  get on(){ return !!Lock.get().cred; },
  async register(){ const n=P[S.me].name;
    const c=await navigator.credentials.create({publicKey:{challenge:crypto.getRandomValues(new Uint8Array(32)),rp:{name:'Bijeen'},user:{id:new TextEncoder().encode(S.me+'.'+id()),name:n,displayName:n},
      pubKeyCredParams:[{type:'public-key',alg:-7},{type:'public-key',alg:-257}],authenticatorSelection:{authenticatorAttachment:'platform',userVerification:'required',residentKey:'discouraged'},timeout:60000}});
    const l=Lock.get(); l.cred=b64(c.rawId); Lock.put(l); },
  off(){ const l=Lock.get(); delete l.cred; Lock.put(l); },
  async verify(){ const l=Lock.get();
    await navigator.credentials.get({publicKey:{challenge:crypto.getRandomValues(new Uint8Array(32)),allowCredentials:[{type:'public-key',id:unb64(l.cred)}],userVerification:'required',timeout:60000}}); return true; },
};
function offerBio(){ Bio.available().then(ok=>{ if(!ok||Bio.on) return;
  openSheet(`<h2>Face ID of vingerafdruk?</h2><p class="sub">Dan hoef je na het vergrendelen geen pincode te typen. Je pincode blijft altijd werken.</p><div class="row2"><button type="button" class="btn ghost" id="bno">Nee, bedankt</button><button type="button" class="btn" id="byes">Ja, gebruiken</button></div>`,
    (el,close)=>{ el.querySelector('#bno').onclick=close; el.querySelector('#byes').onclick=async()=>{ try{ await Bio.register(); close(); toast('Face ID / vingerafdruk staat aan'); }catch(e){ toast('Dat lukte niet. Je kunt het later aanzetten in je profiel.'); close(); } }; }); }); }
function showLogin(mode){
  document.getElementById('login')?.remove();
  const el=document.createElement('div'); el.className='login'; el.id='login'; $('#app').appendChild(el);
  let step=mode==='lock'?'pin':mode==='rec'?'rec':'code', pin='', first='', busy=false;
  let code='', fam=null, who=null, newName='', purpose='', fname='', myname='', mymail='', rmail='', made=null;
  const bg=`<svg class="hexbg" viewBox="0 0 100 100"><g fill="none" stroke="currentColor" stroke-width="2"><polygon points="${hexPts(30,30,20)}"/><polygon points="${hexPts(64.6,30,20)}"/><polygon points="${hexPts(47.3,60,20)}"/><polygon points="${hexPts(81.9,60,20)}"/></g></svg>`;
  const pad=()=>`<div class="pins">${[0,1,2,3].map(i=>`<i class="${i<pin.length?'on':''}"></i>`).join('')}</div>
    <div class="keypad">${['1','2','3','4','5','6','7','8','9','bio','0','del'].map(k=>k==='bio'?(step==='pin'&&Bio.on?`<button data-k="bio" aria-label="Face ID of vingerafdruk">${I.face}</button>`:'<span></span>'):k==='del'?`<button data-k="del" aria-label="Wissen">${I.left}</button>`:`<button data-k="${k}">${k}</button>`).join('')}</div>`;
  const tmpAv=(p,s)=>`<span class="av" style="--s:${s}px;background:${(COLORS[p.color]||COLORS.leisteen)[p.color==='geel'?0:1]};color:${p.color==='geel'?'#4A2600':'#fff'}">${esc((p.name||'?')[0].toUpperCase())}</span>`;
  const offline=!DB.configured?`<div class="ltag" style="font-size:13px;color:#C2410C">Deze app is nog niet verbonden met de server. Volg de stappen in de handleiding (LEESMIJ).</div>`:'';
  const draw=()=>{
    if(step==='code') el.innerHTML=`${bg}<div class="top">${logoSvg(84)}<div class="lname">Bijeen</div><div class="ltag">Vul de gezinscode in. Die vind je bij iemand die de app al gebruikt, onder Profiel › Persoon uitnodigen.</div>${offline}
      <input class="inp codein" id="gcode" maxlength="6" placeholder="K7RM4Q" autocomplete="off" autocapitalize="characters" spellcheck="false" aria-label="Gezinscode" value="${esc(code)}"></div>
      <div class="lb"><button class="dark" id="next">Verder</button></div><div class="lcode lrow"><button id="newfam">Nieuw gezin aanmaken</button><button id="recover">Herstel via e-mail</button></div>`;
    if(step==='rec') el.innerHTML=`${bg}<div class="top">${logoSvg(56)}<div class="lname" style="font-size:40px">Weer binnenkomen</div><div class="ltag">Vul je reserve e-mail in. Je krijgt een code waarmee je deze telefoon toevoegt en een nieuwe pincode kiest. Je oude telefoon wordt daarna uitgelogd.</div>
      <input class="inp" id="rmail" type="email" placeholder="naam@voorbeeld.nl" autocomplete="email" style="margin-top:22px" value="${esc(rmail)}"></div>
      <div class="lb"><button class="dark" id="next">Stuur code</button></div><div class="lcode"><button id="back">Terug</button></div>`;
    if(step==='rcode') el.innerHTML=`${bg}<div class="top">${logoSvg(56)}<div class="lname" style="font-size:40px">Code uit je e-mail</div><div class="ltag">We hebben een code gestuurd naar ${esc(rmail)}. Kijk ook even in je spam.</div>
      <input class="inp codein" id="rcode" inputmode="numeric" maxlength="8" placeholder="123456" autocomplete="one-time-code" aria-label="Code uit de e-mail" style="margin-top:22px"></div>
      <div class="lb"><button class="dark" id="next">Verder</button></div><div class="lcode"><button id="back">Terug</button></div>`;
    if(step==='new') el.innerHTML=`${bg}<div class="top">${logoSvg(56)}<div class="lname" style="font-size:40px">Nieuw gezin</div><div class="ltag">Je bent de eerste. Daarna nodig je de rest uit met een code.</div>${offline}
      <label class="lmono" style="display:block;margin:22px 0 6px">Achternaam gezin</label><input class="inp" id="fname" value="${esc(fname)}" placeholder="bijv. Bijen" autocomplete="off">
      <label class="lmono" style="display:block;margin:14px 0 6px">Jouw naam</label><input class="inp" id="myname" value="${esc(myname)}" placeholder="Voornaam" autocomplete="given-name">
      <label class="lmono" style="display:block;margin:14px 0 6px">Reserve e-mail</label><input class="inp" id="mymail" type="email" placeholder="naam@voorbeeld.nl" autocomplete="email" value="${esc(mymail)}">
      <div class="ltag" style="font-size:13px;margin-top:6px">Alleen om weer binnen te komen als je telefoon kwijt is. Je logt er nooit mee in.</div></div>
      <div class="lb"><button class="dark" id="next">Verder, kies je pincode</button></div><div class="lcode">Heb je al een code? <button id="back">Gezinscode invullen</button></div>`;
    if(step==='made') el.innerHTML=`${bg}<div class="top"><div class="lmono">Familie ${esc(fname)} is aangemaakt</div><div class="lname" style="font-size:40px">Jullie gezinscode</div>
      <div class="codein" style="margin:22px 0 8px;font-weight:600;font-size:30px;letter-spacing:.3em;text-align:center;padding:18px;background:var(--surface);border:1px solid var(--line);border-radius:8px">${esc(made.code)}</div>
      <div class="ltag">Hiermee komt de rest van het gezin erbij, bijvoorbeeld je partner. De code is 7 dagen geldig. Je hoeft hem niet te onthouden: je vindt hem altijd onder Profiel › Persoon uitnodigen.</div>${mymail?`<div class="ltag" style="font-size:13px">We hebben een bevestigingsmail gestuurd naar ${esc(mymail)}. Tik op de link in die mail.</div>`:''}</div>
      <div class="lb"><button class="dark" id="next">Naar de app</button></div>`;
    if(step==='who') el.innerHTML=`${bg}<div class="top"><div class="lmono">Familie ${esc(fam.name)} gevonden</div><div class="lname" style="font-size:40px">Wie ben jij?</div>
      <div class="whopick" style="flex-wrap:wrap">${fam.people.filter(p=>!p.child).map(p=>`<button data-who="${p.id}" aria-pressed="${who===p.id}" style="min-width:40%">${tmpAv(p,56)}<b>${esc(p.name)}</b></button>`).join('')}<button data-who="" aria-pressed="${who===''}" style="min-width:40%"><span class="av" style="--s:56px;background:var(--sunk);color:var(--ink-2)">${I.plus.replace('<svg','<svg width="26" height="26"')}</span><b>Iemand anders</b></button></div>
      ${who===''?`<label class="lmono" style="display:block;margin:6px 0 0">Jouw naam</label><input class="inp" id="newname" value="${esc(newName)}" placeholder="Voornaam" autocomplete="given-name">`:''}</div>
      <div class="lb"><button class="dark" id="next">Verder</button></div><div class="lcode"><button id="back">Andere code</button></div>`;
    if(['set','again','pin','enter'].includes(step)){ const nm=step==='pin'?P[S.me].name:step==='enter'?(fam.people.find(p=>p.id===who)||{}).name:'';
      el.innerHTML=`${bg}<div class="top pintop">${step==='pin'?av(S.me,64,'ring'):logoSvg(56)}<div class="lname" style="font-size:34px">${step==='pin'||step==='enter'?`Hoi ${esc(nm)}`:step==='set'?'Kies een pincode':'Nog een keer'}</div>
      <div class="ltag">${step==='pin'?(Bio.on?'Vul je pincode in of gebruik Face ID / je vingerafdruk.':'Vul je pincode in.'):step==='enter'?'Vul je pincode in. Dezelfde als op je andere telefoon.':step==='set'?'4 cijfers. Hiermee open je de app als je hem vergrendelt of op een nieuwe telefoon. Daarna kun je ook Face ID of je vingerafdruk gebruiken.':'Vul dezelfde pincode nog eens in.'}</div>${pad()}</div>
      ${step==='pin'||step==='enter'?`<div class="lcode">Pincode vergeten? <button id="relog">Herstel via e-mail</button></div>`:''}`; }
    bind(); };
  const run=async(fn)=>{ if(busy) return; busy=true; const nx=el.querySelector('#next'); const t=nx&&nx.textContent; if(nx) nx.textContent='Even geduld…';
    try{ await fn(); }catch(e){ toast(e.message||'Er ging iets mis'); if(nx) nx.textContent=t; } busy=false; };
  const done=async(p)=>{ await Lock.setPin(p); Lock.unlock(); el.remove(); boot(); };
  const bind=()=>{
    const nx=el.querySelector('#next'), bk=el.querySelector('#back');
    if(step==='code'){ const g=el.querySelector('#gcode'); setTimeout(()=>g.focus(),200); g.oninput=()=>{g.value=g.value.toUpperCase().replace(/[^A-Z0-9]/g,'');};
      g.onkeydown=e=>{if(e.key==='Enter')nx.click();};
      nx.onclick=()=>run(async()=>{ code=g.value.trim(); if(code.length<6) return toast('De gezinscode heeft 6 tekens');
        const f=await DB.lookup(code); if(!f) return toast('Deze code klopt niet of is verlopen'); fam=f; who=null; step='who'; draw(); });
      el.querySelector('#newfam').onclick=()=>{step='new';draw();}; el.querySelector('#recover').onclick=()=>{step='rec';draw();}; }
    if(step==='rec'){ bk.onclick=()=>{step=S&&DB.session?'pin':'code';draw();};
      nx.onclick=()=>run(async()=>{ rmail=el.querySelector('#rmail').value.trim(); if(!/^\S+@\S+\.\S+$/.test(rmail)) return toast('Vul een geldig e-mailadres in');
        await DB.recoverStart(rmail); step='rcode'; draw(); }); }
    if(step==='rcode'){ bk.onclick=()=>{step='rec';draw();}; const c=el.querySelector('#rcode'); setTimeout(()=>c.focus(),200);
      nx.onclick=()=>run(async()=>{ const t=c.value.replace(/\D/g,''); if(t.length<6) return toast('Vul de code uit de e-mail in');
        await DB.recoverCode(rmail,t); S=DB.state; applyNames(); purpose='recover'; step='set'; pin=''; draw(); }); }
    if(step==='new'){ bk.onclick=()=>{step='code';draw();};
      nx.onclick=()=>{ fname=el.querySelector('#fname').value.trim(); myname=el.querySelector('#myname').value.trim(); mymail=el.querySelector('#mymail').value.trim();
        if(!fname||!myname) return toast('Vul beide namen in'); if(mymail&&!/^\S+@\S+\.\S+$/.test(mymail)) return toast('Vul een geldig e-mailadres in');
        if(!DB.configured) return toast('De app is nog niet met de server verbonden');
        purpose='create'; step='set'; pin=''; draw(); }; }
    if(step==='made'){ nx.onclick=()=>{ el.remove(); boot(); toast(`Welkom ${myname}!`); setTimeout(offerBio,900); }; }
    if(step==='who'){ bk.onclick=()=>{step='code';draw();};
      el.querySelectorAll('[data-who]').forEach(b=>b.onclick=()=>{ const ni=el.querySelector('#newname'); if(ni) newName=ni.value; who=b.dataset.who; draw(); if(who==='') setTimeout(()=>el.querySelector('#newname').focus(),50); });
      nx.onclick=()=>{ if(who===null) return toast('Tik op je naam'); if(who===''){ newName=el.querySelector('#newname').value.trim(); if(!newName) return toast('Vul je naam in'); }
        const p=fam.people.find(x=>x.id===who); purpose='join'; step=p&&p.has_pin?'enter':'set'; pin=''; draw(); }; }
    el.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{ if(busy) return; const k=b.dataset.k;
      if(k==='bio'){ Bio.verify().then(()=>{ Lock.unlock(); el.remove(); boot(); }).catch(()=>toast('Niet gelukt, gebruik je pincode')); return; }
      if(k==='del'){ pin=pin.slice(0,-1); return draw(); }
      if(pin.length<4) pin+=k; draw();
      if(pin.length===4) setTimeout(()=>{ const wrong=(msg)=>{ pin=''; draw(); el.querySelector('.pins').classList.add('shake'); toast(msg||'Verkeerde pincode'); };
        if(step==='set'){ first=pin; pin=''; step='again'; draw(); }
        else if(step==='again'){ if(pin!==first){ pin=''; step='set'; draw(); return toast('Pincodes waren niet gelijk, probeer opnieuw'); }
          const p=pin; run(async()=>{
            if(purpose==='create'){ made=await DB.createFamily(fname,myname,p,mymail); await Lock.setPin(p); Lock.unlock(); step='made'; draw(); return; }
            if(purpose==='recover'){ await DB.setPin(p); await done(p); toast('Nieuwe pincode ingesteld'); setTimeout(offerBio,900); return; }
            const used=fam.people.map(x=>x.color); const color=DEF_ORDER.find(c=>!used.includes(c))||'leisteen';
            const ok=await DB.join(code,who||DB.newId(),p,fam.name,who?null:{name:newName,color,order:fam.people.length});
            if(!ok){ step='set'; return wrong('Dat lukte niet, probeer opnieuw'); }
            await done(p); toast(`Welkom ${P[S.me].name}! Je zit in de agenda van de familie ${fam.name}`); setTimeout(offerBio,900);
          }).then(()=>{ if(busy===false&&step==='again'){ pin=''; step='set'; draw(); } }); }
        else if(step==='enter'){ const p=pin; run(async()=>{ const ok=await DB.join(code,who,p,fam.name,null); if(!ok) return wrong(); await done(p); toast(`Welkom terug ${P[S.me].name}!`); setTimeout(offerBio,900); }).then(()=>{ if(step==='enter'&&pin.length===4){ pin=''; draw(); } }); }
        else { const p=pin; run(async()=>{ let ok=null; try{ ok=await DB.verifyPin(p); }catch(e){ if(/te veel/.test(e.message)) throw e; }
            if(ok===null) ok=await Lock.check(p);
            if(!ok) return wrong();
            await Lock.setPin(p); Lock.unlock(); el.remove(); boot(); }).then(()=>{ if(pin.length===4){ pin=''; draw(); } }); }
      },180); });
    const rl=el.querySelector('#relog'); rl&&(rl.onclick=()=>{step='rec';pin='';draw();}); };
  draw();
}
/* address suggestions while typing: OpenStreetMap (Photon, free). Falls back to examples if offline. */
let plT=null, plQ=0;
function placeSuggest(inp,box,after){
  clearTimeout(plT); const q=inp.value.trim(); if(q.length<3){box.hidden=true;return;}
  plT=setTimeout(async()=>{ const my=++plQ; let items=[], src='OpenStreetMap';
    try{ const r=await fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(q)}&limit=5&lat=52.09&lon=5.12`); const j=await r.json();
      items=j.features.map(f=>{const p=f.properties; const line1=p.name||[p.street,p.housenumber].filter(Boolean).join(' '); const line2=[p.street&&p.name?[p.street,p.housenumber].filter(Boolean).join(' '):'',p.postcode,p.city||p.town||p.village,p.country!=='Nederland'?p.country:''].filter(Boolean).join(', '); return [line1,line2];}).filter(x=>x[0]); }
    catch(e){ items=[]; }
    if(my!==plQ) return;
    if(!items.length){box.hidden=true;return;}
    box.innerHTML=items.map(([a,b],i)=>`<button type="button" data-pl="${i}">${I.route}<span>${esc(a)}${b?`<small>${esc(b)}</small>`:''}</span></button>`).join('')+`<span class="src">Suggesties via ${src}</span>`; box.hidden=false;
    box.querySelectorAll('[data-pl]').forEach(b=>b.onclick=()=>{const [a,c]=items[+b.dataset.pl]; inp.value=c?`${a}, ${c}`:a; box.hidden=true; after();});
  },300);
  inp.onblur=()=>setTimeout(()=>box.hidden=true,200);
}
/* photos on events and notes: resized on the phone before saving */
function photoField(box,photos){
  const draw=()=>{ box.innerHTML=photos.map((u,i)=>`<button type="button" class="ph" data-pv="${i}" style="background-image:url(${DB.src(u)})" aria-label="Foto ${i+1} bekijken"></button>`).join('')+`<label class="add">${I.camera}Foto<input type="file" accept="image/*" hidden></label>`;
    box.querySelectorAll('[data-pv]').forEach(b=>b.onclick=()=>viewPhoto(photos,+b.dataset.pv,draw));
    box.querySelector('input').onchange=e=>{ const f=e.target.files[0]; if(!f) return; const url=URL.createObjectURL(f), img=new Image();
      img.onload=()=>{ const z=Math.min(1,900/Math.max(img.width,img.height)), c=document.createElement('canvas'); c.width=img.width*z; c.height=img.height*z; c.getContext('2d').drawImage(img,0,0,c.width,c.height); photos.push(c.toDataURL('image/jpeg',.72)); URL.revokeObjectURL(url); draw(); };
      img.onerror=()=>toast('Deze foto kan niet worden geopend. Kies een JPG of PNG.'); img.src=url; }; };
  draw();
}
function viewPhoto(photos,i,redraw){
  const v=document.createElement('div'); v.className='viewer'; v.innerHTML=`<img src="${DB.src(photos[i])}" alt="Foto"><div class="vb"><button class="del">Verwijderen</button><button class="cl">Sluiten</button></div>`;
  document.body.appendChild(v); const close=()=>v.remove();
  v.querySelector('.cl').onclick=close; v.onclick=e=>{if(e.target===v)close();};
  confirmBtn(v.querySelector('.del'),'Tik nogmaals',()=>{photos.splice(i,1);close();redraw();});
}
/* offline: everything keeps working, changes wait and sync when back online */
/* online / offline: everything keeps working, changes wait and sync when back online */
function onStatus(st){ if(typeof ui==='undefined') return; const was=!!ui.offline; ui.offline=!st.online; ui.pending=st.pending;
  if(ui.offline&&st.pending) ui.waited=true;
  if(!ui.offline&&ui.waited&&!st.pending){ ui.waited=false; toast('Weer online · je wijzigingen zijn gedeeld'); }
  if(was!==ui.offline&&DB.session) quietRender(); }
/* data changed: from another phone, after logging in, or this phone got logged out */
function onData(why){
  if(why==='loggedout'){ document.querySelectorAll('.scrim').forEach(x=>x.remove()); main.innerHTML=''; $('#tabbar').innerHTML=''; $('#fab').hidden=true; showLogin(); toast('Deze telefoon is uitgelogd'); return; }
  S=DB.state; if(!S) return; applyNames(); applyColors(); applyTheme();
  if(why!=='session') quietRender(); }
function boot(){
  S=DB.state; if(!S||!DB.session){ $('#fab').hidden=true; showLogin(); return; }
  applyNames(); applyColors(); applyTheme(); $('#fab').hidden=false; render();
  if(Lock.locked) showLogin('lock');
  DB.sync().then(()=>DB.check()); DB.status(); refreshPush();
}
/* push notifications (reminders + "Naomi added ..."); on iPhone only once the app is on the home screen */
const isStandalone=()=>matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
const isIOS=()=>/iPhone|iPad|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
const pushOK=()=>'serviceWorker' in navigator&&'PushManager' in window&&'Notification' in window;
async function pushSub(){ if(!pushOK()) return null; const r=await navigator.serviceWorker.getRegistration(); return r?r.pushManager.getSubscription():null; }
const u8=k=>{ const p='='.repeat((4-k.length%4)%4); const s=atob((k+p).replace(/-/g,'+').replace(/_/g,'/')); return Uint8Array.from(s,c=>c.charCodeAt(0)); };
async function pushOn(){
  const key=await DB.pushKey(); if(!key) throw new Error('Meldingen zijn nog niet klaar op de server. Probeer het over een paar minuten opnieuw.');
  const perm=await Notification.requestPermission(); if(perm!=='granted') throw new Error('Je hebt meldingen niet toegestaan. Zet ze aan bij de instellingen van je telefoon.');
  const r=await navigator.serviceWorker.ready;
  let sub=await r.pushManager.getSubscription(); if(!sub) sub=await r.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:u8(key)});
  await DB.savePush(sub); }
async function pushOff(){ const sub=await pushSub(); if(sub){ await DB.dropPush(sub.endpoint); await sub.unsubscribe(); } }
/* keep the server's copy of this phone's subscription fresh */
async function refreshPush(){ try{ const sub=await pushSub(); if(sub&&Notification.permission==='granted'&&navigator.onLine) await DB.savePush(sub); }catch(e){} }
async function pushBox(box){
  const draw=async()=>{ let h='';
    if(!pushOK()||(isIOS()&&!isStandalone())) h=`<div class="hint">${I.info}<span>${isIOS()?'Op een iPhone werken meldingen pas als Bijeen op je beginscherm staat. Tik in Safari op Deel en dan op <b>Zet op beginscherm</b>. Open de app daarna vanaf je beginscherm.':'Deze browser kan geen meldingen tonen. Installeer de app via het menu van Chrome.'}</span></div>`;
    else if(Notification.permission==='denied') h=`<div class="hint">${I.info}<span>Meldingen zijn uitgezet voor Bijeen. Zet ze aan bij de instellingen van je telefoon (Apps › Bijeen › Meldingen).</span></div>`;
    else { const sub=await pushSub();
      h=sub?`<label class="toggle"><input type="checkbox" id="pon" checked><span>Meldingen op deze telefoon (herinneringen)</span></label>
        <label class="toggle"><input type="checkbox" id="apush" ${S.settings.actPush!==false?'checked':''}><span>Ook als iemand anders iets toevoegt of afvinkt</span></label>`
        :`<button type="button" class="btn" id="pon2">${I.bell} Zet meldingen aan</button><p class="muted" style="font-size:13px;margin:8px 2px 0">Dan krijg je herinneringen bij afspraken, ook als de app dicht is.</p>`; }
    box.innerHTML=h;
    const on=async()=>{ try{ await pushOn(); toast('Meldingen staan aan'); }catch(e){ toast(e.message); } draw(); };
    box.querySelector('#pon2')&&(box.querySelector('#pon2').onclick=on);
    box.querySelector('#pon')&&(box.querySelector('#pon').onchange=async e=>{ if(e.target.checked) return on(); await pushOff().catch(()=>{}); toast('Meldingen staan uit'); draw(); });
    box.querySelector('#apush')&&(box.querySelector('#apush').onchange=e=>{S.settings.actPush=e.target.checked;save();toast(e.target.checked?'Je krijgt ook meldingen als iemand iets toevoegt':'Alleen nog herinneringen');}); };
  draw(); }
/* installing: Android shows a button, iPhone gets the Safari steps */
let installEvt=null;
window.addEventListener('beforeinstallprompt',e=>{ e.preventDefault(); installEvt=e; if(route()==='home') quietRender(); });
function installHint(){ if(isStandalone()||localStorage.getItem('bijeen.noinstall')) return '';
  if(installEvt) return `<div class="hint" style="margin-top:22px">${logoSvg(22)}<span><b>Zet Bijeen op je telefoon.</b> Dan opent hij als een gewone app en krijg je meldingen. <button class="link" id="inst">Installeren</button> · <button class="link" id="noinst">Niet nu</button></span></div>`;
  if(isIOS()) return `<div class="hint" style="margin-top:22px">${logoSvg(22)}<span><b>Zet Bijeen op je beginscherm.</b> Tik in Safari onderin op Deel (vierkantje met pijl) en dan op <b>Zet op beginscherm</b>. Daarna werkt hij als een app, met meldingen. <button class="link" id="noinst">Niet nu</button></span></div>`;
  return ''; }
function bindInstall(){ const i=$('#inst'), n=$('#noinst');
  i&&(i.onclick=async()=>{ installEvt.prompt(); await installEvt.userChoice; installEvt=null; render(); });
  n&&(n.onclick=()=>{ localStorage.setItem('bijeen.noinstall','1'); render(); }); }
function sheetActivity(){
  const me=S.me, isNew=isNewAct;
  const list=[...S.activity].sort((a,b)=>b.at.localeCompare(a.at));
  const dayL=d=>d===TODAY?'Vandaag':d===add(TODAY,-1)?'Gisteren':cap(fmt(d,{wd:1}));
  const groups=[]; list.forEach(a=>{const d=a.at.slice(0,10); let g=groups.find(x=>x.d===d); if(!g){g={d,items:[]};groups.push(g);} g.items.push(a);});
  const n=unread(); S.settings=S.settings||{};
  openSheet(`<h2>Meldingen</h2><p class="sub">${n?`${n} nieuw.`:'Je bent helemaal bij.'} Hier zie je wie wat heeft toegevoegd, aangepast of afgevinkt.</p>
    ${groups.length?groups.map(g=>`<div class="sr-h">${dayL(g.d)}</div><div class="list">${g.items.map(a=>`<button class="item act ${isNew(a)?'new':''}" data-go="${a.id}">${av(a.who,34)}<div class="body"><div class="tt"><b>${a.who===me?'Jij':esc(P[a.who].name)}</b> ${esc(a.who===me?a.text.replace(/^heeft /,'hebt '):a.text)}</div><div class="meta num">${a.at.slice(11)}</div></div>${isNew(a)?'<i class="newdot" aria-label="Nieuw"></i>':''}</button>`).join('')}</div>`).join('')
      :'<div class="act-empty">Nog niets gebeurd. Zodra iemand iets toevoegt of afvinkt, zie je het hier.</div>'}
    <div class="sr-h">Op deze telefoon</div><div id="pushbox"></div>`,
  (el,close)=>{
    if(S.activity[0]&&n){ S.settings.seenAt=S.activity.reduce((m,a)=>a.at>m?a.at:m,''); save(); render(); }
    pushBox(el.querySelector('#pushbox'));
    el.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>{const a=S.activity.find(x=>x.id===b.dataset.go); close();
      if(a.date){ui.mode='day';ui.day=a.date;ui.week=monday(a.date);ui.sel=a.date;ui.month=a.date.slice(0,8)+'01';}
      if(location.hash===a.href) render(); else location.hash=a.href;});
  });
}
function confirmBtn(btn,ask,fn){ let armed=false; btn.onclick=()=>{ if(armed) return fn(); armed=true; const t=btn.innerHTML; if(ask) btn.textContent=ask; btn.classList.add('armed'); setTimeout(()=>{armed=false;btn.innerHTML=t;btn.classList.remove('armed');},3000); }; }
function sheetTask(tid){
  const ex=tid&&S.todos.find(x=>x.id===tid);
  const t=ex?{...ex,who:[...ex.who]}:{title:'',who:[S.me],list:S.todoLists[0],due:'',done:false};
  openSheet(`<h2>${ex?'Taak bewerken':'Nieuwe taak'}</h2>
    <form id="tf">
    <label class="field"><span>Taak</span><input class="inp" id="tt" value="${esc(t.title)}" placeholder="bijv. Kraan repareren" required></label>
    <div class="field"><span>Wie doet het</span>${whoPick(t.who,ADULTS())}<small class="muted" style="font-size:12px">Kies er twee als jullie het samen doen.</small></div>
    <div class="field"><span>Lijst</span>${choiceChips('list',S.todoLists,t.list)}</div>
    <div class="field"><span>Deadline</span><div class="row2" style="grid-template-columns:1fr auto"><input class="inp" type="date" id="td" value="${t.due}"><button type="button" class="btn ghost" id="nodue" style="margin:0;width:auto;padding:0 16px">Geen</button></div></div>
    <div class="field"><span>Herhalen</span><div class="who-pick" id="trep"></div>
      <div class="repc" id="trepc"><span>Elke</span><div class="stepper sm"><button type="button" id="trm" aria-label="Minder">−</button><b class="num" id="trn">1</b><button type="button" id="trp" aria-label="Meer">+</button></div>
        <select class="inp" id="tru" aria-label="Eenheid"><option value="day">dag(en)</option><option value="week">week/weken</option><option value="month">maand(en)</option></select></div>
      <div class="repsum" id="trsum"></div></div>
    ${ex?`<label class="toggle"><input type="checkbox" id="tdone" ${t.done?'checked':''}><span>Afgevinkt</span></label>`:''}
    <button class="btn">${ex?'Opslaan':'Toevoegen'}</button>
    ${ex?'<button type="button" class="btn danger" id="del">Taak verwijderen</button>':''}</form>`,
  (el,close)=>{
    el.querySelectorAll('[data-w]').forEach(b=>b.onclick=()=>{const k=b.dataset.w; t.who=t.who.includes(k)?t.who.filter(x=>x!==k):[...t.who,k]; if(!t.who.length) t.who=[k]; t.who=[...ADULTS().filter(x=>t.who.includes(x)),...t.who.filter(x=>!ADULTS().includes(x))]; el.querySelectorAll('[data-w]').forEach(x=>x.setAttribute('aria-pressed',t.who.includes(x.dataset.w)));});
    bindChoice(el,'list',v=>t.list=v);
    const R={repeat:t.repeat||'none',every:t.every||1};
    const PRE=[['Niet','none',1],['Elke dag','day',1],['Elke week','week',1],['Elke 2 weken','week',2],['Elke maand','month',1]];
    let custom=!PRE.some(p=>p[1]===R.repeat&&(R.repeat==='none'||p[2]===R.every));
    const drawRep=()=>{ el.querySelector('#trep').innerHTML=PRE.map(([l,u,n],i)=>`<button type="button" data-tp="${i}" aria-pressed="${!custom&&R.repeat===u&&(u==='none'||R.every===n)}">${l}</button>`).join('')+`<button type="button" data-tp="c" aria-pressed="${custom}">Aangepast…</button>`;
      el.querySelector('#trepc').hidden=!custom; el.querySelector('#trn').textContent=R.every; el.querySelector('#tru').value=R.repeat==='none'?'week':R.repeat;
      el.querySelector('#trsum').textContent=R.repeat==='none'?'':`${repText(R)}. Vink je hem af, dan komt hij terug met de volgende deadline${el.querySelector('#td').value?'':' (vanaf vandaag)'}.`;
      el.querySelectorAll('[data-tp]').forEach(b=>b.onclick=()=>{ if(b.dataset.tp==='c'){custom=true; if(R.repeat==='none'){R.repeat='day';R.every=3;}} else {custom=false; const p=PRE[+b.dataset.tp]; R.repeat=p[1]; R.every=p[2];} drawRep(); }); };
    el.querySelector('#trm').onclick=()=>{R.every=Math.max(1,R.every-1);drawRep();}; el.querySelector('#trp').onclick=()=>{R.every=Math.min(52,R.every+1);drawRep();};
    el.querySelector('#tru').onchange=e=>{R.repeat=e.target.value;drawRep();};
    el.querySelector('#td').addEventListener('change',drawRep);
    drawRep();
    el.querySelector('#nodue').onclick=()=>{el.querySelector('#td').value='';drawRep();};
    el.querySelector('#tf').onsubmit=e=>{e.preventDefault();t.title=el.querySelector('#tt').value.trim()||'Taak';t.due=el.querySelector('#td').value;t.repeat=R.repeat;t.every=R.every;if(R.repeat!=='none'&&!t.due)t.due=TODAY;if(ex){t.done=el.querySelector('#tdone').checked;Object.assign(ex,t);}else{S.todos.push({id:id(),...t});logAct(`heeft taak “${t.title}” toegevoegd`,'#todo');}save();close();render();toast(ex?'Taak bijgewerkt':`Toegevoegd aan ${esc(t.list)}`);};
    ex&&confirmBtn(el.querySelector('#del'),'Tik nogmaals om te verwijderen',()=>{S.todos=S.todos.filter(x=>x.id!==tid);save();close();render();toast('Taak verwijderd');});
    if(!ex) setTimeout(()=>el.querySelector('#tt').focus(),300);
  });
}
function sheetItem(sid){
  const ex=sid&&S.shop.find(x=>x.id===sid);
  const it=ex?{...ex}:{name:'',qty:'',cat:'',list:ui.shopL||S.shopLists[0],by:S.me,done:false};
  const cats=[...new Set(S.shop.map(s=>s.cat).filter(Boolean))];
  openSheet(`<h2>${ex?'Product bewerken':'Nieuw product'}</h2>
    <form id="sf">
    <div class="row2" style="grid-template-columns:1fr 96px"><label class="field"><span>Product</span><input class="inp" id="sn" value="${esc(it.name)}" placeholder="bijv. Melk" required></label><label class="field"><span>Aantal</span><input class="inp" id="sq2" value="${esc(it.qty)}" placeholder="1"></label></div>
    <div class="field"><span style="display:flex;justify-content:space-between">Categorie<button type="button" id="mcat" style="font-size:12px;letter-spacing:0;text-transform:none;color:var(--j2)">Beheren</button></span><div id="catchips"></div></div>
    <div class="field"><span>Lijst</span>${choiceChips('list',S.shopLists,it.list)}</div>
    <button class="btn">${ex?'Opslaan':'Toevoegen'}</button>
    ${ex?'<button type="button" class="btn danger" id="del">Product verwijderen</button>':''}</form>`,
  (el,close)=>{
    bindChoice(el,'list',v=>it.list=v);
    if(!S.shopCats.includes(it.cat)) it.cat='';
    const drawCats=()=>{ el.querySelector('#catchips').innerHTML=`<div class="who-pick">${['',...S.shopCats].map(c=>`<button type="button" data-c="${esc(c)}" aria-pressed="${c===it.cat}">${c?esc(c):'Geen'}</button>`).join('')}<span class="ncat"><input id="ncat" placeholder="+ Nieuwe" aria-label="Nieuwe categorie" enterkeyhint="done"></span></div>`;
      el.querySelectorAll('[data-c]').forEach(b=>b.onclick=()=>{it.cat=b.dataset.c;drawCats();});
      const nc=el.querySelector('#ncat'); const addCat=()=>{const v=nc.value.trim();if(!v)return;if(!S.shopCats.includes(v))S.shopCats.push(v);it.cat=v;save();drawCats();}; nc.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();addCat();}}; nc.onblur=addCat; };
    drawCats();
    el.querySelector('#mcat').onclick=()=>{close();setTimeout(()=>sheetLists('cat'),260);};
    el.querySelector('#sf').onsubmit=e=>{e.preventDefault();it.name=el.querySelector('#sn').value.trim()||'Product';it.qty=el.querySelector('#sq2').value.trim();
      if(ex)Object.assign(ex,it);else{S.shop.unshift({id:id(),...it});logAct(`heeft ${it.name}${it.qty?` (${it.qty})`:''} op ${it.list} gezet`,'#shop');}ui.shopL=it.list;save();close();render();toast(ex?'Product bijgewerkt':`${it.name} toegevoegd`);};
    ex&&confirmBtn(el.querySelector('#del'),'Tik nogmaals om te verwijderen',()=>{S.shop=S.shop.filter(x=>x.id!==sid);save();close();render();toast('Product verwijderd');});
    if(!ex) setTimeout(()=>el.querySelector('#sn').focus(),300);
  });
}
function sheetLists(kind,focusNew){
  const C=kind==='cat'; const key=kind==='todo'?'todoLists':C?'shopCats':'shopLists', items=kind==='todo'?'todos':'shop', noun=kind==='todo'?'taken':'producten', fld=C?'cat':'list';
  openSheet(`<h2>${C?'Categorieën':'Lijsten'}</h2><p class="sub">${C?'Hernoem een categorie door op de naam te tikken. Verwijder je een categorie, dan blijven de producten staan onder Overig.':'Hernoem een lijst door op de naam te tikken. Nieuwe lijsten verschijnen meteen bij jullie allebei.'}</p>
    <div id="ll" class="lists-edit"></div>
    <form class="quick" id="nl" style="box-shadow:none;background:var(--surface-2);border:1.5px solid var(--line)"><input id="nln" placeholder="${C?'Nieuwe categorie, bijv. Diepvries':'Nieuwe lijst, bijv. Vakantie'}" autocomplete="off" aria-label="Nieuwe naam"><button class="go" aria-label="Lijst toevoegen">${I.plus}</button></form>
    <button class="btn" id="done">Klaar</button>`,
  (el,close,sc)=>{
    const finish=()=>{save();render();};
    sc.onDismiss=finish;
    const draw=()=>{ el.querySelector('#ll').innerHTML=S[key].map((L,i)=>{const n=S[items].filter(x=>x[fld]===L).length;return `<div class="le"><input class="inp" data-i="${i}" value="${esc(L)}" aria-label="Naam van ${esc(L)}"><span class="cnt num">${n} ${n===1?(kind==='todo'?'taak':'product'):noun}</span><button type="button" class="iconbtn del" data-d="${i}" aria-label="${esc(L)} verwijderen">${I.trash}</button></div>`;}).join('')||`<div class="muted" style="padding:8px 2px">Nog geen ${C?'categorieën':'lijsten'}.</div>`;
      el.querySelectorAll('[data-i]').forEach(inp=>inp.onchange=()=>{const i=+inp.dataset.i, old=S[key][i], nw=inp.value.trim(); if(!nw||nw===old){inp.value=old;return;} if(S[key].includes(nw)){toast('Die naam bestaat al');inp.value=old;return;}
        S[key][i]=nw; S[items].forEach(x=>{if(x[fld]===old)x[fld]=nw;}); if(kind==='shop'&&ui.shopL===old)ui.shopL=nw; save(); toast(`Hernoemd naar ${nw}`);});
      el.querySelectorAll('[data-d]').forEach(b=>{const i=+b.dataset.d, L=S[key][i], n=S[items].filter(x=>x[fld]===L).length;
        confirmBtn(b,'',()=>{S[key].splice(i,1);if(C)S[items].forEach(x=>{if(x.cat===L)x.cat='';});else S[items]=S[items].filter(x=>x.list!==L);save();draw();toast(`${L} verwijderd`);});
        b.addEventListener('click',()=>{ if(b.classList.contains('armed')) toast(n&&!C?`Tik nogmaals: ${L} en ${n} ${noun} verwijderen`:`Tik nogmaals om ${L} te verwijderen`); });});
    };
    el.querySelector('#nl').onsubmit=e=>{e.preventDefault();const v=el.querySelector('#nln').value.trim();if(!v)return;if(S[key].includes(v)){toast('Die naam bestaat al');return;}S[key].push(v);if(kind==='shop')ui.shopL=v;el.querySelector('#nln').value='';save();draw();toast(`${v} toegevoegd`);};
    el.querySelector('#done').onclick=()=>{close();finish();};
    draw(); if(focusNew) setTimeout(()=>el.querySelector('#nln').focus(),300);
  });
}
/* away weeks: Julian picks the week he leaves and the week he comes back; crew change is always on Wednesday */
function isoWeek(s){ const t=parse(s); t.setDate(t.getDate()+3-((t.getDay()+6)%7)); const y=t.getFullYear(); const w1=new Date(y,0,4,12); return {y, w:1+Math.round(((t-w1)/864e5-3+((w1.getDay()+6)%7))/7)}; }
function weekMon(y,w){ return add(monday(iso(new Date(y,0,4,12))),(w-1)*7); }
function weeksIn(y){ return isoWeek(`${y}-12-28`).w; }
function sheetRot(){
  let year=isoWeek(TODAY).y, pend=null;
  openSheet(`<h2>Wanneer ben ik weg?</h2><p class="sub">Tik op de week waarin je vertrekt en daarna op de week waarin je thuiskomt. De crew change staat altijd op woensdag.</p>
    <div id="per"></div>
    <div class="yr"><button type="button" class="iconbtn" id="py" aria-label="Vorig jaar">${I.left}</button><b class="num" id="yl"></b><button type="button" class="iconbtn" id="ny" aria-label="Volgend jaar">${I.right}</button></div>
    <div class="step" id="step"></div>
    <div class="wkgrid" id="wg"></div>
    <button class="btn" id="done">Klaar</button>`,
  (el,close,sc)=>{
    const finish=()=>{save();render();}; sc.onDismiss=finish;
    const draw=()=>{
      const per=[...S.away].sort((a,b)=>a.from.localeCompare(b.from)).filter(p=>diff(TODAY,p.to)>=0);
      el.querySelector('#per').innerHTML=per.length?`<div class="sr-h">Gepland</div><div class="list">${per.map(p=>{const a=isoWeek(p.from),b=isoWeek(p.to);const now=diff(p.from,TODAY)>=0;
        return `<div class="item"><span class="wkbadge ${now?'now':''}">${I.rig}</span><div class="body"><div class="tt">Week ${a.w}${a.y!==b.y?` (${a.y})`:''} t/m week ${b.w}${a.y!==b.y?` (${b.y})`:''}</div><div class="meta muted" style="font-size:13px">${fmt(p.from,{wd:1})} – ${fmt(p.to,{wd:1})} · ${diff(p.from,p.to)/7} weken${now?' · nu':''}</div></div><button type="button" class="iconbtn del" data-rm="${p.from}" aria-label="Periode verwijderen">${I.trash}</button></div>`;}).join('')}</div>`:'';
      el.querySelector('#yl').textContent=year;
      el.querySelector('#step').innerHTML=pend?`<span><b>Vertrek: week ${pend.w}</b> (${fmt(add(weekMon(pend.y,pend.w),2),{wd:1})}). Tik nu op de week waarin je thuiskomt.</span><button type="button" id="cx">Annuleer</button>`:`<span>Tik op de week waarin je vertrekt.</span>`;
      const nowW=isoWeek(TODAY); let h='';
      for(let w=1;w<=weeksIn(year);w++){ const wed=add(weekMon(year,w),2); const r=rot(wed); const r2=rot(weekMon(year,w)), r3=rot(add(weekMon(year,w),6));
        const isP=pend&&pend.y===year&&pend.w===w; const cls=[r.offshore||r2.offshore||r3.offshore?'on':'', (r.offshore&&r.travel)?'cc':'', isP?'pend':'', nowW.y===year&&nowW.w===w?'now':''].join(' ');
        h+=`<button type="button" class="wkc ${cls}" data-wk="${w}"><b class="num">${w}</b><small>${fmt(weekMon(year,w))}</small></button>`; }
      el.querySelector('#wg').innerHTML=h;
      el.querySelectorAll('[data-wk]').forEach(b=>b.onclick=()=>{const w=+b.dataset.wk;
        if(!pend){pend={y:year,w};draw();return;}
        let a=add(weekMon(pend.y,pend.w),2), z=add(weekMon(year,w),2); if(diff(a,z)<0)[a,z]=[z,a]; if(a===z){pend=null;draw();return;}
        S.away=S.away.filter(p=>diff(p.to,a)>0||diff(z,p.from)>0); S.away.push({from:a,to:z}); const A=isoWeek(a),Z=isoWeek(z); logAct(`heeft het rooster aangepast: weg week ${A.w} t/m ${Z.w}`,'#rooster'); pend=null; save(); draw(); toast(`Weg van week ${A.w} t/m week ${Z.w}`);});
      el.querySelectorAll('[data-rm]').forEach(b=>{confirmBtn(b,'',()=>{S.away=S.away.filter(p=>p.from!==b.dataset.rm);save();draw();toast('Periode verwijderd');}); b.addEventListener('click',()=>{if(b.classList.contains('armed'))toast('Tik nogmaals om te verwijderen');});});
      el.querySelector('#cx')&&(el.querySelector('#cx').onclick=()=>{pend=null;draw();});
    };
    el.querySelector('#py').onclick=()=>{year--;draw();}; el.querySelector('#ny').onclick=()=>{year++;draw();};
    el.querySelector('#done').onclick=()=>{close();finish();};
    draw();
  });
}
function sheetNote(nid){
  const n=nid?S.notes.find(x=>x.id===nid):{title:'',body:'',pinned:false};
  openSheet(`<h2>${nid?'Notitie bewerken':'Nieuwe notitie'}</h2><form id="nf">
    <label class="field"><span>Titel</span><input class="inp" id="nt" placeholder="bijv. Cadeau-ideeën" value="${esc(n.title)}" style="font-family:var(--f-display);font-size:19px;font-weight:700"></label>
    <label class="field"><span>Notitie</span><textarea class="inp" id="nb" placeholder="Schrijf iets…">${esc(n.body)}</textarea></label>
    <div class="field"><span>Foto’s</span><div class="phs" id="phs"></div></div>
    <div class="row2"><button type="button" class="btn ghost" id="np">${n.pinned?'Losmaken':'Vastzetten op home'}</button><button class="btn">Opslaan</button></div>
    ${nid?'<button type="button" class="btn danger" id="nd">Notitie verwijderen</button>':''}</form>`,
  (el,close)=>{
    let pin=n.pinned; const photos=[...(n.photos||[])]; photoField(el.querySelector('#phs'),photos);
    el.querySelector('#np').onclick=e=>{pin=!pin;e.target.textContent=pin?'Losmaken':'Vastzetten op home';};
    el.querySelector('#nf').onsubmit=e=>{e.preventDefault();const t=el.querySelector('#nt').value.trim()||'Zonder titel',b=el.querySelector('#nb').value;
      if(nid){Object.assign(n,{title:t,body:b,pinned:pin,photos,edited:'Zojuist'});} else S.notes.unshift({id:id(),title:t,body:b,by:[S.me],pinned:pin,photos,edited:'Zojuist'});
      logAct(`heeft notitie “${t}” ${nid?'aangepast':'gemaakt'}`,'#notes');
      save();close();render();toast('Notitie opgeslagen');};
    nid&&confirmBtn(el.querySelector('#nd'),'Tik nogmaals om te verwijderen',()=>{S.notes=S.notes.filter(x=>x.id!==nid);save();close();render();toast('Notitie verwijderd');});
    if(!nid) setTimeout(()=>el.querySelector('#nt').focus(),300);
  });
}
/* ---------- ROOSTER (table view: two rows per week, Mon–Wed and Wed–Sun; crew change on Wednesday) ---------- */
const FEAST={'12-25':'kerst','01-01':'O&N','04-27':'Kon.dag','12-05':'Sint'};
function rosterRange(){ const y=isoWeek(TODAY).y; const start=weekMon(y,1); const n=weeksIn(y)+weeksIn(y+1); return {start,n}; }
function halfAway(mon,h){ return rot(add(mon,h?3:1)).offshore; }
function rebuildAway(start,halves){
  const end=add(start,halves.length/2*7-1);
  const keep=S.away.filter(p=>diff(p.to,start)>0||diff(end,p.from)>0);
  const runs=[]; let i=0;
  while(i<halves.length){ if(!halves[i]){i++;continue;} let j=i; while(j+1<halves.length&&halves[j+1]) j++;
    const ms=add(start,Math.floor(i/2)*7), me=add(start,Math.floor(j/2)*7);
    runs.push({from:i%2?add(ms,2):ms, to:j%2?add(me,6):add(me,2)}); i=j+1; }
  S.away=[...keep,...runs].sort((a,b)=>a.from.localeCompare(b.from));
}
const len=n=>{ const w=Math.floor(n/2), h=n%2; return (w?w:(h?'':'0'))+(h?'½':'')+' wk'; };
function jumpNow(smooth){ const r=$('#rnow'); if(!r) return; const y=main.scrollTop+r.getBoundingClientRect().top-main.getBoundingClientRect().top-100; main.scrollTo({top:y,behavior:smooth?'smooth':'auto'}); }
function vRooster(){
  const {start,n}=rosterRange(); const E=!!ui.rEdit;
  const halves=[]; for(let w=0;w<n;w++){ const m=add(start,w*7); halves.push(halfAway(m,0),halfAway(m,1)); }
  const blk={}; for(let i=0;i<halves.length;i++){ if(i===0||halves[i]!==halves[i-1]){ let j=i; while(j+1<halves.length&&halves[j+1]===halves[i]) j++; blk[i]=j-i+1; } }
  const tot={}; for(let w=0;w<n;w++){ const y=isoWeek(add(start,w*7)).y; tot[y]=tot[y]||{a:0,h:0}; [0,1].forEach(h=>halves[w*2+h]?tot[y].a++:tot[y].h++); }
  const cur=S.away.find(p=>diff(p.from,TODAY)>=0&&diff(TODAY,p.to)>=0), nxt=S.away.filter(p=>diff(TODAY,p.from)>0).sort((a,b)=>a.from.localeCompare(b.from))[0];
  const wkTxt=p=>`week ${isoWeek(p.from).w} t/m ${isoWeek(p.to).w}`;
  let rows='', prevY=null; const w0=Math.max(0,Math.floor(diff(start,monday(TODAY))/7)-8);
  for(let w=w0;w<n;w++){
    const mon=add(start,w*7), sun=add(mon,6), iw=isoWeek(mon);
    if(iw.y!==prevY){ rows+=`<div class="ryr"><strong>${iw.y}</strong><span>Weg <b>${len(tot[iw.y].a)}</b> · thuis <b>${len(tot[iw.y].h)}</b></span></div>`; prevY=iw.y; }
    const isNow=diff(mon,TODAY)>=0&&diff(TODAY,sun)>=0, isPast=diff(sun,TODAY)>0;
    for(let h=0;h<2;h++){
      const idx=w*2+h, cls=(h?'rb':'ra')+(isNow?' now':'')+(isPast?' past':'');
      const d=h?sun:mon; let f=''; for(let k=h?3:0;k<=(h?6:2);k++){ const x=add(mon,k).slice(5); if(FEAST[x]) f=FEAST[x]; }
      rows+=`<div class="rc wk ${cls}" ${isNow&&!h?'id="rnow"':''}>${h?'':iw.w}</div><div class="rc dt ${cls}">${WD[parse(d).getDay()]} ${fmt(d)}${f?`<span class="f">${f}</span>`:''}</div>`;
      ['a','h'].forEach(col=>{ const on=col==='a'?halves[idx]:!halves[idx]; const s=on&&(idx===w0*2||halves[idx-1]!==halves[idx]), e=on&&(idx===halves.length-1||halves[idx+1]!==halves[idx]);
        let st=idx; while(st>0&&halves[st-1]===halves[idx]) st--;
        const tag=E?'button':'div';
        const lab=s?len(blk[st]):'';
        rows+=`<${tag} ${E?`type="button" data-h="${idx}" aria-label="Week ${iw.w} ${h?'woensdag t/m zondag':'maandag t/m woensdag'}: ${halves[idx]?'weg, tik voor thuis':'thuis, tik voor weg'}"`:''} class="rslot ${cls} ${col} ${on?'on':''} ${s?'s':''} ${e?'e':''}"><div class="fill">${lab}</div></${tag}>`; });
    }
  }
  main.innerHTML=`<div class="view pad fade rooster">
    <div class="pg-h"><div style="display:flex;gap:10px;align-items:center"><a class="iconbtn" href="#home" aria-label="Terug">${I.left}</a><h1>Rooster</h1></div>
      <button class="pill-btn ${E?'on':''}" id="redit">${E?`${I.check} Klaar`:`${I.edit} Aanpassen`}</button></div>
    <div class="rcard"><p><b>${cur?`${esc(P[WK()].name)} is nu weg, ${wkTxt(cur)}.`:esc(P[WK()].name)+' is nu thuis.'}</b> ${nxt?`Volgende periode weg: ${wkTxt(nxt)}${isoWeek(nxt.from).y!==isoWeek(TODAY).y?' ('+isoWeek(nxt.from).y+')':''}.`:''}</p>
      <div class="legend" style="margin:6px 0 0"><span><i class="sw a"></i>${esc(P[WK()].name)} weg</span><span><i class="sw h"></i>${esc(P[WK()].name)} thuis</span><span>Crew change op woensdag</span></div></div>
    ${E?`<div class="redit-bar"><span>Tik op een halve week om tussen weg en thuis te wisselen.</span><button type="button" id="rpick">Weken kiezen met weeknummers</button></div>
      ${ADULTS().length>1?`<label class="field" style="margin-top:10px"><span>Van wie is dit rooster?</span><select class="inp" id="rwho">${ADULTS().map(k=>`<option value="${k}" ${k===WK()?'selected':''}>${esc(P[k].name)}</option>`).join('')}</select></label>`:''}`:''}
    <button class="today-btn" id="rjump" style="margin:12px 0">Naar deze week</button>
    <div class="rsheet ${E?'editing':''}">
      <div class="rgrid rhead"><div style="text-align:right;padding-right:8px">Week</div><div>Datum</div><div class="c a">Weg</div><div class="c h">Thuis</div></div>
      <div class="rgrid" id="rbody">${rows}</div>
    </div>
    <p class="rnote">Elke week heeft twee regels: maandag t/m woensdag en woensdag t/m zondag. Jullie zien allebei hetzelfde rooster.</p>
  </div>`;
  $('#redit').onclick=()=>{ui.rEdit=!E;render();if(!E)toast('Tik op de weken om ze aan te passen');};
  $('#rjump').onclick=()=>jumpNow(true);
  $('#rpick')&&($('#rpick').onclick=sheetRot);
  $('#rwho')&&($('#rwho').onchange=e=>{S.worker=e.target.value;save();applyColors();render();toast(`Rooster hoort nu bij ${P[S.worker].name}`);});
  main.querySelectorAll('[data-h]').forEach(b=>b.onclick=()=>{const i=+b.dataset.h; halves[i]=!halves[i]; rebuildAway(start,halves); save(); const st=main.scrollTop; vRooster(); main.scrollTop=st;});
}

function sheetProfile(){
  const k=S.me;
  openSheet(`<div class="prof">${av(k,88,'ring')}<h2>${esc(P[k].name)}</h2><p class="sub">Jouw profiel · familie ${esc(DB.session.family_name||'')}</p></div>
    <div class="sr-h">Namen en foto’s van het gezin</div>
    <div class="list">${PK().map(m=>`<div class="item">${av(m,40)}<div class="body"><input class="inp nmi" data-nm="${m}" value="${esc(P[m].name)}" aria-label="Naam" enterkeyhint="done" maxlength="20"></div>
      ${photo(m)?`<button type="button" class="iconbtn del" data-rmp="${m}" aria-label="Foto van ${esc(P[m].name)} weghalen">${I.trash}</button>`:''}
      <label class="pill-btn" style="cursor:pointer;box-shadow:none;background:var(--surface-2)">${I.camera}${photo(m)?'Wijzig':'Kies foto'}<input type="file" accept="image/*" data-pf="${m}" hidden></label></div>`).join('')}
      <button type="button" class="item" id="padd" style="width:100%;font-weight:600">${I.plus.replace('<svg','<svg width="20" height="20"')} Persoon toevoegen (bijv. een kind)</button></div>
    <div class="sr-h">Weergave</div>
    <div class="themepick" role="group" aria-label="Licht of donker">${[['light','Licht'],['dark','Donker'],['auto','Automatisch']].map(([v,l])=>`<button type="button" data-th="${v}" aria-pressed="${(S.settings.theme||'light')===v}">${l}</button>`).join('')}</div>
    <p class="muted" style="font-size:13px;margin:8px 2px 0">Automatisch volgt de instelling van je telefoon.</p>
    <div class="sr-h">Kleuren</div>
    <div class="list">${PK().map(m=>`<div class="item colrow">${av(m,32)}<div class="body"><div class="tt" style="font-size:14px">${esc(P[m].name)}</div><div class="swatches" role="group" aria-label="Kleur van ${esc(P[m].name)}">${Object.entries(COLORS).map(([n,c])=>{const taken=PK().some(o=>o!==m&&colOf(o)===n);return `<button type="button" data-col="${n}" data-for="${m}" aria-label="${n}${taken?' (al gekozen)':''}" aria-pressed="${colOf(m)===n}" ${taken?'disabled':''} style="background:linear-gradient(150deg,${c[0]},${c[1]})"></button>`}).join('')}</div></div></div>`).join('')}</div>
    <p class="muted" style="font-size:13px;margin:8px 2px 0">Iedereen een eigen kleur, zo zie je overal in één oogopslag voor wie iets is. Een kleur die al bij iemand hoort is uitgegrijsd.</p>
    <div class="sr-h">Herinneringen</div>
    <label class="field" style="margin-top:0"><span>Standaard bij een afspraak</span><select class="inp" id="stT">${REM_T.map(([v,l])=>`<option value="${v}" ${String(S.settings.remT??'30')===v?'selected':''}>${l}</option>`).join('')}</select></label>
    <label class="field"><span>Standaard bij hele dag (verjaardagen)</span><select class="inp" id="stD">${REM_D.map(([v,l])=>`<option value="${v}" ${String(S.settings.remD??'1440')===v?'selected':''}>${l}</option>`).join('')}</select></label>
    <p class="muted" style="font-size:13px;margin:8px 2px 0">Je kunt het per afspraak nog aanpassen. Je krijgt een melding op je telefoon, ook als de app dicht is.</p>
    <div class="sr-h">Meldingen op deze telefoon</div><div id="pushbox"></div>
    <div id="biobox"></div>
    <div class="profacts"><button id="pinv">${I.plus}Persoon uitnodigen</button><button id="pmail">Reserve e-mail</button><button id="plock">Vergrendelen</button><button id="plo" class="out">Uitloggen</button></div>
    <p class="muted" style="font-size:12px;margin:18px 2px 0;text-align:center">Bijeen · versie ${window.BIJEEN_VERSION||''}</p>`,
  (el,close)=>{
    pushBox(el.querySelector('#pushbox'));
    Bio.available().then(ok=>{ if(!ok) return; const bb=el.querySelector('#biobox');
      bb.innerHTML=`<label class="toggle" style="margin-top:14px"><input type="checkbox" id="bio" ${Bio.on?'checked':''}><span>Ontgrendelen met Face ID of vingerafdruk</span></label>`;
      bb.querySelector('#bio').onchange=async e=>{ if(e.target.checked){ try{ await Bio.register(); toast('Face ID / vingerafdruk staat aan'); }catch(x){ e.target.checked=false; toast('Dat lukte niet'); } } else { Bio.off(); toast('Uitgezet'); } }; });
    el.querySelectorAll('[data-pf]').forEach(inp=>inp.onchange=e=>{const m=inp.dataset.pf; const f=e.target.files[0]; if(!f) return; const img=new Image(); const url=URL.createObjectURL(f);
      img.onload=()=>{const c=document.createElement('canvas'),z=256;c.width=c.height=z;const q=Math.min(img.width,img.height);c.getContext('2d').drawImage(img,(img.width-q)/2,(img.height-q)/2,q,q,0,0,z,z);
        S.people[m].photo=c.toDataURL('image/jpeg',.82); URL.revokeObjectURL(url); save(); close(); render(); toast(`Foto van ${P[m].name} opgeslagen`);};
      img.onerror=()=>toast('Deze foto kan niet worden geopend. Kies een JPG of PNG.'); img.src=url;});
    el.querySelectorAll('[data-nm]').forEach(inp=>{ const m=inp.dataset.nm; const done=()=>{ const v=inp.value.trim(); if(!v||v===P[m].name){inp.value=P[m].name;return;} S.people[m].name=v; applyNames(); save(); render(); toast(`Naam gewijzigd in ${v}`); };
      inp.onchange=done; inp.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();inp.blur();}}; });
    el.querySelectorAll('[data-rmp]').forEach(b=>confirmBtn(b,'',()=>{delete S.people[b.dataset.rmp].photo;save();close();render();toast('Foto weggehaald');}));
    el.querySelector('#padd').onclick=()=>{close();setTimeout(sheetPerson,260);};
    const ss=()=>{S.settings.remT=el.querySelector('#stT').value;S.settings.remD=el.querySelector('#stD').value;save();toast('Herinneringen opgeslagen');};
    el.querySelector('#stT').onchange=ss; el.querySelector('#stD').onchange=ss;
    el.querySelectorAll('[data-th]').forEach(b=>b.onclick=()=>{S.settings.theme=b.dataset.th;save();applyTheme();el.querySelectorAll('[data-th]').forEach(x=>x.setAttribute('aria-pressed',x===b));});
    el.querySelectorAll('[data-col]').forEach(b=>b.onclick=()=>{const m=b.dataset.for;S.people[m].color=b.dataset.col;save();applyColors();
      el.querySelectorAll('[data-col]').forEach(x=>{const f=x.dataset.for,n=x.dataset.col;x.setAttribute('aria-pressed',colOf(f)===n);x.disabled=PK().some(o=>o!==f&&colOf(o)===n);});
      render();toast(`Kleur van ${P[m].name} opgeslagen`);});
    confirmBtn(el.querySelector('#plo'),'Tik nogmaals: uitloggen op deze telefoon',async()=>{ close(); await pushOff().catch(()=>{}); await DB.logout(); localStorage.removeItem('bijeen.lock'); main.innerHTML=''; $('#tabbar').innerHTML=''; $('#fab').hidden=true; setTimeout(()=>showLogin('code'),250); });
    el.querySelector('#pmail').onclick=()=>{close();setTimeout(sheetMail,260);};
    el.querySelector('#plock').onclick=()=>{ if(!Lock.get().hash) return toast('Kies eerst een pincode'); Lock.lock(); close(); setTimeout(()=>showLogin('lock'),250); };
    el.querySelector('#pinv').onclick=()=>{close();setTimeout(sheetInvite,260);};
  });
}
function sheetMail(){
  openSheet(`<h2>Reserve e-mail</h2><p class="sub">Alleen om weer in de app te komen als je telefoon kwijt of gestolen is. Je logt er nooit mee in en we sturen geen reclame.</p><input class="inp" id="em" type="email" placeholder="naam@voorbeeld.nl" style="margin:16px 0"><p class="muted" id="emst" style="font-size:13px;margin:-6px 2px 12px"></p><button class="btn" id="emsave">Opslaan</button>`,(sh,cl)=>{
    const inp=sh.querySelector('#em'); DB.email().then(m=>{ if(m&&!inp.value) inp.value=m; sh.querySelector('#emst').textContent=m?'Je krijgt een bevestigingsmail als je hem verandert.':'Nog geen reserve e-mail ingesteld.'; });
    sh.querySelector('#emsave').onclick=async()=>{const m=inp.value.trim(); if(!/^\S+@\S+\.\S+$/.test(m)) return toast('Vul een geldig e-mailadres in');
      try{ await DB.setEmail(m); cl(); toast('Kijk in je mail en tik op de bevestigingslink'); }catch(e){ toast(e.message.includes('already')?'Dit e-mailadres is al in gebruik':'Opslaan lukt nu niet. Heb je internet?'); } };});
}
function sheetInvite(){
  openSheet(`<h2>Persoon uitnodigen</h2><p class="sub">Stuur deze gezinscode. Wie hem invult komt in dezelfde agenda, taken en boodschappen, en kiest daarna een eigen pincode.</p><div class="codein" id="icode" style="margin:22px 0 6px;font-weight:600">······</div><p class="muted" id="iexp" style="text-align:center;font-size:13px;margin:0">&nbsp;</p><button class="btn" id="share">Deel via WhatsApp of berichten</button><button class="btn ghost" id="renew" style="margin-top:8px">Nieuwe code maken</button>`,(sh,cl)=>{
    let code=''; const show=f=>{ if(!f) { sh.querySelector('#iexp').textContent='Even geen internet. Probeer het zo opnieuw.'; return; } const exp=new Date(f.code_expires||f.expires), left=exp>new Date();
      code=f.code; sh.querySelector('#icode').textContent=left?f.code:'Verlopen'; sh.querySelector('#iexp').textContent=left?`Geldig tot ${WD[exp.getDay()]} ${exp.getDate()} ${MOS[exp.getMonth()]}`:'Maak een nieuwe code'; if(!left) code=''; };
    DB.family().then(show);
    sh.querySelector('#renew').onclick=async()=>{ try{ show(await DB.renewCode()); toast('Nieuwe code gemaakt. De oude werkt niet meer.'); }catch(e){ toast('Dat lukt nu niet. Heb je internet?'); } };
    sh.querySelector('#share').onclick=async()=>{ if(!code) return toast('Maak eerst een nieuwe code');
      const text=`Doe je mee in Bijeen, onze gezinsagenda? Open ${location.origin+location.pathname} en vul deze gezinscode in: ${code}`;
      if(navigator.share){ try{ await navigator.share({title:'Bijeen',text}); }catch(e){} } else { await navigator.clipboard.writeText(text).catch(()=>{}); toast('Uitnodiging gekopieerd'); } };});
}
function sheetPerson(){
  openSheet(`<h2>Persoon toevoegen</h2><p class="sub">Bijvoorbeeld je kind. Iemand met een eigen telefoon kan ook zelf meedoen met de gezinscode.</p>
    <label class="field"><span>Naam</span><input class="inp" id="pn" placeholder="Voornaam" maxlength="20"></label>
    <label class="toggle"><input type="checkbox" id="pc" checked><span>Een kind, zonder eigen telefoon</span></label>
    <button class="btn" id="psave">Toevoegen</button>`,(sh,cl)=>{
    setTimeout(()=>sh.querySelector('#pn').focus(),300);
    sh.querySelector('#psave').onclick=()=>{ const n=sh.querySelector('#pn').value.trim(); if(!n) return toast('Vul een naam in');
      const used=PK().map(colOf), k=DB.newId(), child=sh.querySelector('#pc').checked; S.people[k]={name:n,color:(child&&!used.includes('geel')?['geel']:[]).concat(DEF_ORDER).find(c=>!used.includes(c))||'leisteen',child,order:PK().length};
      S.order=[...PK().filter(x=>x!==k),k]; applyNames(); applyColors(); save(); cl(); render(); toast(`${n} is toegevoegd`); };});
}
function sheetSearch(){
  openSheet(`<label class="search" style="box-shadow:none;background:var(--surface-2);border:1.5px solid var(--line);margin-top:0">${I.search}<input id="sq" placeholder="Waar zoek je naar?" autocomplete="off" aria-label="Zoeken"></label>
    <div id="sr" style="min-height:50vh"></div>`,
  (el,close)=>{
    const q=el.querySelector('#sq'), out=el.querySelector('#sr');
    const hl=t=>{t=t||''; const v=q.value.trim(); if(!v) return esc(t); const k=t.toLowerCase().indexOf(v.toLowerCase()); return k<0?esc(t):esc(t.slice(0,k))+'<mark>'+esc(t.slice(k,k+v.length))+'</mark>'+esc(t.slice(k+v.length));};
    const draw=()=>{ const v=q.value.trim().toLowerCase();
      if(!v){ const tries=[...new Set(S.events.filter(e=>diff(TODAY,e.date)>=0).sort((a,b)=>a.date.localeCompare(b.date)).map(e=>e.title))].slice(0,6);
        out.innerHTML=tries.length?`<div class="sr-h">Binnenkort</div><div class="sugg">${tries.map(x=>`<button data-try="${esc(x)}">${esc(x)}</button>`).join('')}</div>`:'<div class="muted" style="padding:30px 4px;text-align:center">Zoek in de agenda, taken, notities en boodschappen.</div>';
        out.querySelectorAll('[data-try]').forEach(b=>b.onclick=()=>{q.value=b.dataset.try;draw();}); return; }
      const m=t=>(t||'').toLowerCase().includes(v);
      const ev=S.events.filter(e=>m(e.title)||m(e.place)||m(e.note)).sort((a,b)=>{const fa=diff(TODAY,a.date)<0,fb=diff(TODAY,b.date)<0; return fa-fb||(fa?b.date.localeCompare(a.date):a.date.localeCompare(b.date))||a.start.localeCompare(b.start);});
      const td=S.todos.filter(t=>m(t.title)), nt=S.notes.filter(n=>m(n.title)||m(n.body)), sh=S.shop.filter(x=>m(x.name));
      let h='';
      if(ev.length) h+=`<div class="sr-h">Agenda <span>${ev.length}</span></div><div class="list">${ev.slice(0,8).map(e=>`<button class="item sr" data-goev="${e.date}"><span class="sr-date ${diff(TODAY,e.date)<0?'past':''}"><b class="num">${parse(e.date).getDate()}</b>${MOS[parse(e.date).getMonth()]}</span><span class="body"><span class="tt">${hl(e.title)}</span><span class="meta muted" style="font-size:13px">${WD[parse(e.date).getDay()]} ${e.start}–${e.end}${e.place?' · '+hl(e.place):''}</span></span><span style="display:flex">${e.who.map(w=>av(w,22)).join('')}</span></button>`).join('')}</div>`;
      if(td.length) h+=`<div class="sr-h">Taken <span>${td.length}</span></div><div class="list">${td.map(t=>`<button class="item sr ${t.done?'done':''}" data-go="#todo"><span class="body"><span class="tt">${hl(t.title)}</span><span class="meta muted" style="font-size:13px">${esc(t.list)}${t.done?' · klaar':''}</span></span>${avs(t.who,22)}</button>`).join('')}</div>`;
      if(nt.length) h+=`<div class="sr-h">Notities <span>${nt.length}</span></div><div class="list">${nt.map(n=>{const b=n.body.replace(/\n/g,' · ');const k=b.toLowerCase().indexOf(v);const snip=k>30?'…'+b.slice(k-25):b;return `<button class="item sr" data-note="${n.id}"><span class="body"><span class="tt">${hl(n.title)}</span><span class="meta muted" style="font-size:13px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${hl(snip)}</span></span></button>`}).join('')}</div>`;
      if(sh.length) h+=`<div class="sr-h">Boodschappen <span>${sh.length}</span></div><div class="list">${sh.map(x=>`<button class="item sr ${x.done?'done':''}" data-go="#shop" data-list="${esc(x.list)}"><span class="body"><span class="tt">${hl(x.name)}</span><span class="meta muted" style="font-size:13px">${esc(x.list)}${x.done?' · in het mandje':''}</span></span>${x.qty?`<span class="qty">${esc(x.qty)}</span>`:''}</button>`).join('')}</div>`;
      out.innerHTML=h||`<div class="muted" style="padding:30px 4px;text-align:center">Niets gevonden voor “${esc(q.value)}”</div>`;
      out.querySelectorAll('[data-goev]').forEach(b=>b.onclick=()=>{const d=b.dataset.goev;ui.mode='day';ui.day=d;ui.week=monday(d);close();if(route()==='agenda')render();else location.hash='#agenda';});
      out.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>{if(b.dataset.list)ui.shopL=b.dataset.list;close();if(location.hash===b.dataset.go)render();else location.hash=b.dataset.go;});
      out.querySelectorAll('[data-note]').forEach(b=>b.onclick=()=>{close();setTimeout(()=>sheetNote(b.dataset.note),260);});
    };
    q.oninput=draw; draw(); setTimeout(()=>q.focus(),250);
  });
}
let tt; function toast(m){ const t=$('#toast'); t.textContent=m; t.classList.add('show'); clearTimeout(tt); tt=setTimeout(()=>t.classList.remove('show'),2000); }

/* ---------- start ---------- */
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js',{updateViaCache:'none'}).catch(e=>console.warn('service worker',e));
  // nieuwe versie online: meteen herladen als de app nog niet verbonden is, anders de volgende keer dat je hem opent
  let had=!!navigator.serviceWorker.controller, stale=false;
  navigator.serviceWorker.addEventListener('controllerchange',()=>{ if(!had){ had=true; return; } if(!DB.configured||!DB.session) location.reload(); else stale=true; });
  document.addEventListener('visibilitychange',()=>{ if(document.visibilityState!=='visible') return; if(stale) location.reload(); else navigator.serviceWorker.getRegistration().then(r=>r&&r.update()).catch(()=>{}); });
}
navigator.serviceWorker&&navigator.serviceWorker.addEventListener('message',e=>{ if(e.data&&e.data.open){ location.hash=e.data.open; } });
boot();
