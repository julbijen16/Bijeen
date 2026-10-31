// Bijeen meldingen: wordt elke minuut aangeroepen door de database-klok (pg_cron).
// 1. Herinneringen bij afspraken (met de gekozen tijd van tevoren).
// 2. "Naomi heeft ... toegevoegd"-meldingen voor de rest van het gezin.
import { createClient } from "npm:@supabase/supabase-js@2";
import * as webpush from "jsr:@negrel/webpush@0.5.0";

const TZ = "Europe/Amsterdam";
const WD = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
const MOS = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
const WINDOW_MS = 10 * 60 * 1000; // een gemiste minuut wordt later alsnog verstuurd

const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
  auth: { persistSession: false },
});

// ---------- datums (zelfde regels als in de app) ----------
const pad2 = (n: number) => String(n).padStart(2, "0");
const parse = (s: string) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d, 12));
};
const iso = (d: Date) => `${d.getUTCFullYear()}-${pad2(d.getUTCMonth() + 1)}-${pad2(d.getUTCDate())}`;
const add = (s: string, n: number) => {
  const d = parse(s);
  d.setUTCDate(d.getUTCDate() + n);
  return iso(d);
};
const diff = (a: string, b: string) => Math.round((parse(b).getTime() - parse(a).getTime()) / 864e5);

// deno-lint-ignore no-explicit-any
type Ev = Record<string, any>;
function startsOn(e: Ev, d: string): boolean {
  if (e.date === d) return true;
  const k = diff(e.date, d);
  if (k <= 0 || !e.repeat || e.repeat === "none") return false;
  if (e.until && diff(d, e.until) < 0) return false;
  const n = e.every || 1, a = parse(e.date), b = parse(d);
  const md = (b.getUTCFullYear() - a.getUTCFullYear()) * 12 + b.getUTCMonth() - a.getUTCMonth();
  if (e.repeat === "day") return k % n === 0;
  if (e.repeat === "week") return k % (7 * n) === 0;
  if (e.repeat === "month") return d.slice(8) === e.date.slice(8) && md % n === 0;
  if (e.repeat === "year") return d.slice(5) === e.date.slice(5) && (md / 12) % n === 0;
  return false;
}

// lokale Nederlandse tijd -> echt tijdstip
function tzOffset(t: number) {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: TZ, hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", second: "2-digit",
    }).formatToParts(new Date(t)).map((x) => [x.type, x.value]),
  );
  return Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute, +p.second) - t;
}
function localTime(date: string, hm: string) {
  const [y, m, d] = date.split("-").map(Number);
  const [h, mi] = hm.split(":").map(Number);
  const guess = Date.UTC(y, m - 1, d, h, mi);
  let t = guess - tzOffset(guess);
  t = guess - tzOffset(t);
  return t;
}
function todayLocal(now: number) {
  return iso(new Date(now + tzOffset(now)));
}
function dayLabel(d: string, today: string) {
  const k = diff(today, d);
  if (k === 0) return "Vandaag";
  if (k === 1) return "Morgen";
  const x = parse(d);
  return `${WD[x.getUTCDay()][0].toUpperCase()}${WD[x.getUTCDay()].slice(1)} ${x.getUTCDate()} ${MOS[x.getUTCMonth()]}`;
}

// ---------- push ----------
async function vapid() {
  const { data } = await db.from("app_secrets").select("v").eq("k", "vapid_keys").maybeSingle();
  if (data) return await webpush.importVapidKeys(JSON.parse(data.v));
  const keys = await webpush.generateVapidKeys({ extractable: true });
  const exported = await webpush.exportVapidKeys(keys);
  const pub = await webpush.exportApplicationServerKey(keys);
  await db.from("app_secrets").upsert([
    { k: "vapid_keys", v: JSON.stringify(exported) },
    { k: "vapid_public", v: pub },
  ]);
  return keys;
}

type Sub = { endpoint: string; family_id: string; member_id: string; sub: webpush.PushSubscription };

Deno.serve(async (req) => {
  const { data: tok } = await db.from("app_secrets").select("v").eq("k", "notify_token").maybeSingle();
  if (!tok || req.headers.get("x-bijeen-token") !== tok.v) return new Response("nee", { status: 401 });

  const keys = await vapid();
  const server = await webpush.ApplicationServer.new({ contactInformation: "mailto:bijeen@example.com", vapidKeys: keys });
  const now = Date.now();
  const today = todayLocal(now);
  let sent = 0;

  const { data: subs } = await db.from("push_subs").select("endpoint,family_id,member_id,sub");
  const all = (subs || []) as Sub[];

  const push = async (targets: Sub[], msg: Record<string, string>) => {
    for (const s of targets) {
      try {
        await server.subscribe(s.sub).pushTextMessage(JSON.stringify(msg), { ttl: 6 * 3600 });
        sent++;
      } catch (e) {
        if (e instanceof webpush.PushMessageError && e.isGone()) {
          await db.from("push_subs").delete().eq("endpoint", s.endpoint);
        } else console.error("push mislukt", e);
      }
    }
  };

  // --- nieuwe activiteit sinds de vorige keer ---
  const { data: cur } = await db.from("app_secrets").select("v").eq("k", "act_cursor").maybeSingle();
  const runAt = new Date(now).toISOString();
  if (cur) {
    const { data: acts } = await db.from("docs").select("family_id,data,created_at")
      .eq("kind", "act").eq("deleted", false).gt("created_at", cur.v).lte("created_at", runAt).order("created_at");
    if (acts && acts.length) {
      const fams = [...new Set(acts.map((a) => a.family_id))];
      const { data: meta } = await db.from("docs").select("family_id,kind,id,data")
        .in("family_id", fams).in("kind", ["person", "pref"]).eq("deleted", false);
      for (const a of acts) {
        const who = a.data.who;
        const person = meta?.find((m) => m.family_id === a.family_id && m.kind === "person" && m.id === who);
        const targets = all.filter((s) => {
          if (s.family_id !== a.family_id || s.member_id === who) return false;
          const pref = meta?.find((m) => m.family_id === a.family_id && m.kind === "pref" && m.id === s.member_id);
          return pref?.data?.actPush !== false;
        });
        if (targets.length) {
          await push(targets, {
            title: "Bijeen",
            body: `${person?.data?.name || "Iemand"} ${a.data.text}`,
            url: a.data.href || "#home",
            tag: "act",
          });
        }
      }
    }
  }
  await db.from("app_secrets").upsert({ k: "act_cursor", v: runAt });

  // --- herinneringen ---
  const families = [...new Set(all.map((s) => s.family_id))];
  for (const fid of families) {
    const { data: evs } = await db.from("docs").select("id,data").eq("family_id", fid).eq("kind", "event").eq("deleted", false);
    const fsubs = all.filter((s) => s.family_id === fid);
    for (const row of evs || []) {
      const e = row.data as Ev;
      if (e.remind == null || e.remind === "none" || !e.date) continue;
      const lead = Number(e.remind) * 60e3;
      for (let i = -1; i <= 8; i++) {
        const d = add(today, i);
        if (!startsOn(e, d)) continue;
        const at = localTime(d, e.allDay ? "09:00" : (e.start || "09:00")) - lead;
        if (at > now || at <= now - WINDOW_MS) continue;
        const key = `${fid}/${row.id}/${d}/${e.remind}`;
        const { data: fresh } = await db.from("sent_reminders").upsert({ key }, { onConflict: "key", ignoreDuplicates: true }).select("key");
        if (!fresh || !fresh.length) continue;
        const mine = fsubs.filter((s) => (e.who || []).includes(s.member_id));
        const body = e.allDay
          ? `${dayLabel(d, today)}: ${e.title}`
          : `${dayLabel(d, today)} ${e.start}${e.end ? "–" + e.end : ""} · ${e.title}`;
        await push(mine.length ? mine : fsubs, {
          title: e.title || "Herinnering",
          body: body + (e.place ? `\n${e.place}` : ""),
          url: `#agenda/${d}`,
          tag: key,
        });
      }
    }
  }

  return new Response(JSON.stringify({ ok: true, sent }), { headers: { "Content-Type": "application/json" } });
});
