-- Bijeen: database voor de gezinsplanner.
-- Elke telefoon logt anoniem in bij Supabase en wordt met de gezinscode aan een gezin gekoppeld.
-- Alle gegevens (afspraken, taken, boodschappen, notities, instellingen) staan als losse documenten in "docs".

create extension if not exists pgcrypto with schema extensions;

-- ---------- tabellen ----------
create table public.families (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  code text not null unique,
  code_expires timestamptz not null,
  created_at timestamptz not null default now()
);

-- inlog-gegevens per persoon (pincode); de naam/kleur/foto staan in docs (kind = 'person')
create table public.members (
  family_id uuid not null references public.families on delete cascade,
  id text not null,
  pin_hash text,
  fails int not null default 0,
  locked_until timestamptz,
  primary key (family_id, id)
);

-- een telefoon (anonieme gebruiker) hoort bij een gezin en een persoon
create table public.devices (
  user_id uuid primary key references auth.users on delete cascade,
  family_id uuid not null references public.families on delete cascade,
  member_id text not null,
  label text,
  blocked boolean not null default false,
  created_at timestamptz not null default now(),
  last_seen timestamptz not null default now()
);

create table public.docs (
  family_id uuid not null references public.families on delete cascade,
  kind text not null,
  id text not null,
  data jsonb not null default '{}'::jsonb,
  deleted boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  updated_by uuid default auth.uid(),
  primary key (family_id, kind, id)
);
create index docs_family_updated on public.docs (family_id, updated_at);
create index docs_kind_created on public.docs (kind, created_at);

create table public.push_subs (
  endpoint text primary key,
  user_id uuid not null references auth.users on delete cascade,
  family_id uuid not null references public.families on delete cascade,
  member_id text not null,
  sub jsonb not null,
  created_at timestamptz not null default now()
);

-- pogingen om een gezinscode te raden (tegen misbruik)
create table public.code_attempts (
  user_id uuid not null,
  at timestamptz not null default now()
);
create index code_attempts_user on public.code_attempts (user_id, at);

-- verstuurde herinneringen (zodat er nooit twee keer dezelfde gaat)
create table public.sent_reminders (
  key text primary key,
  at timestamptz not null default now()
);

-- interne sleutels (pushmeldingen); niemand behalve de server kan hierbij
create table public.app_secrets (
  k text primary key,
  v text not null
);

-- ---------- hulpfuncties ----------
create or replace function public.my_family() returns uuid
language sql stable security definer set search_path = public as $$
  select family_id from devices where user_id = auth.uid() and not blocked
$$;

create or replace function public.my_member() returns text
language sql stable security definer set search_path = public as $$
  select member_id from devices where user_id = auth.uid() and not blocked
$$;

create or replace function public.touch_doc() returns trigger
language plpgsql as $$
begin
  new.updated_at := now();
  new.updated_by := auth.uid();
  if tg_op = 'UPDATE' then new.created_at := old.created_at; end if;
  return new;
end $$;
create trigger docs_touch before insert or update on public.docs
  for each row execute function public.touch_doc();

create or replace function public.new_code() returns text
language plpgsql set search_path = public, extensions as $$
declare
  alphabet constant text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; -- geen 0/O en 1/I
  c text;
begin
  loop
    c := '';
    for i in 1..6 loop
      c := c || substr(alphabet, 1 + (get_byte(gen_random_bytes(1), 0) % length(alphabet)), 1);
    end loop;
    exit when not exists (select 1 from families where code = c);
  end loop;
  return c;
end $$;

-- ---------- beveiliging (row level security) ----------
alter table public.families enable row level security;
alter table public.members enable row level security;
alter table public.devices enable row level security;
alter table public.docs enable row level security;
alter table public.push_subs enable row level security;
alter table public.code_attempts enable row level security;
alter table public.sent_reminders enable row level security;
alter table public.app_secrets enable row level security;

create policy "eigen gezin lezen" on public.families for select to authenticated
  using (id = public.my_family());

create policy "apparaten van eigen gezin" on public.devices for select to authenticated
  using (family_id = public.my_family());
create policy "apparaat blokkeren" on public.devices for update to authenticated
  using (family_id = public.my_family()) with check (family_id = public.my_family());
create policy "apparaat verwijderen" on public.devices for delete to authenticated
  using (family_id = public.my_family());

create policy "docs lezen" on public.docs for select to authenticated
  using (family_id = public.my_family());
create policy "docs toevoegen" on public.docs for insert to authenticated
  with check (family_id = public.my_family());
create policy "docs wijzigen" on public.docs for update to authenticated
  using (family_id = public.my_family()) with check (family_id = public.my_family());

create policy "eigen push" on public.push_subs for all to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid() and family_id = public.my_family() and member_id = public.my_member());

-- alleen "blocked" mag via de app worden aangepast
revoke update on public.devices from authenticated;
grant update (blocked) on public.devices to authenticated;

-- ---------- functies die de app aanroept ----------

-- Eerste persoon: maak een gezin aan
create or replace function public.create_family(p_family text, p_person_id text, p_person jsonb, p_pin text)
returns json language plpgsql security definer set search_path = public, extensions as $$
declare
  fid uuid;
  c text;
begin
  if auth.uid() is null then raise exception 'niet ingelogd'; end if;
  if p_pin !~ '^[0-9]{4}$' then raise exception 'pincode moet 4 cijfers zijn'; end if;
  if coalesce(trim(p_family), '') = '' or coalesce(trim(p_person_id), '') = '' then raise exception 'naam ontbreekt'; end if;
  c := new_code();
  insert into families (name, code, code_expires) values (trim(p_family), c, now() + interval '7 days') returning id into fid;
  insert into members (family_id, id, pin_hash) values (fid, p_person_id, crypt(p_pin, gen_salt('bf')));
  insert into devices (user_id, family_id, member_id) values (auth.uid(), fid, p_person_id)
    on conflict (user_id) do update set family_id = excluded.family_id, member_id = excluded.member_id, blocked = false, created_at = now();
  insert into docs (family_id, kind, id, data) values (fid, 'person', p_person_id, p_person);
  return json_build_object('family_id', fid, 'code', c, 'expires', now() + interval '7 days');
end $$;

-- Gezinscode invullen: welk gezin is het en wie zitten erin?
create or replace function public.lookup_family(p_code text)
returns json language plpgsql security definer set search_path = public as $$
declare
  f families;
  tries int;
begin
  if auth.uid() is null then raise exception 'niet ingelogd'; end if;
  select count(*) into tries from code_attempts where user_id = auth.uid() and at > now() - interval '15 minutes';
  if tries >= 10 then raise exception 'te veel pogingen, probeer het over een kwartier opnieuw'; end if;
  select * into f from families where code = upper(trim(p_code)) and code_expires > now();
  if not found then
    insert into code_attempts (user_id) values (auth.uid());
    return null;
  end if;
  return json_build_object(
    'name', f.name,
    'people', coalesce((
      select json_agg(json_build_object(
        'id', d.id,
        'name', d.data->>'name',
        'color', d.data->>'color',
        'child', coalesce((d.data->>'child')::boolean, false),
        'has_pin', exists (select 1 from members m where m.family_id = f.id and m.id = d.id and m.pin_hash is not null)
      ) order by coalesce((d.data->>'order')::int, 99), d.created_at)
      from docs d where d.family_id = f.id and d.kind = 'person' and not d.deleted
    ), '[]'::json)
  );
end $$;

-- Deze telefoon toevoegen aan het gezin als persoon p_member (met pincode)
create or replace function public.join_family(p_code text, p_member text, p_pin text, p_person jsonb default null)
returns json language plpgsql security definer set search_path = public, extensions as $$
declare
  f families;
  m members;
begin
  if auth.uid() is null then raise exception 'niet ingelogd'; end if;
  if p_pin !~ '^[0-9]{4}$' then raise exception 'pincode moet 4 cijfers zijn'; end if;
  select * into f from families where code = upper(trim(p_code)) and code_expires > now();
  if not found then raise exception 'gezinscode onbekend of verlopen'; end if;
  if not exists (select 1 from docs where family_id = f.id and kind = 'person' and id = p_member and not deleted) then
    if p_person is null or coalesce(trim(p_person->>'name'), '') = '' then raise exception 'persoon niet gevonden'; end if;
    if exists (select 1 from members where family_id = f.id and id = p_member) then raise exception 'persoon bestaat al'; end if;
    insert into docs (family_id, kind, id, data) values (f.id, 'person', p_member, p_person);
  end if;
  select * into m from members where family_id = f.id and id = p_member for update;
  if found and m.pin_hash is not null then
    if m.locked_until is not null and m.locked_until > now() then
      raise exception 'te veel verkeerde pincodes, probeer het over een kwartier opnieuw';
    end if;
    if m.pin_hash <> crypt(p_pin, m.pin_hash) then
      update members set fails = fails + 1,
        locked_until = case when fails + 1 >= 5 then now() + interval '15 minutes' else null end
        where family_id = f.id and id = p_member;
      return json_build_object('ok', false);
    end if;
    update members set fails = 0, locked_until = null where family_id = f.id and id = p_member;
  else
    insert into members (family_id, id, pin_hash) values (f.id, p_member, crypt(p_pin, gen_salt('bf')))
      on conflict (family_id, id) do update set pin_hash = excluded.pin_hash, fails = 0, locked_until = null;
  end if;
  insert into devices (user_id, family_id, member_id) values (auth.uid(), f.id, p_member)
    on conflict (user_id) do update set family_id = excluded.family_id, member_id = excluded.member_id, blocked = false, created_at = now();
  return json_build_object('ok', true, 'family_id', f.id);
end $$;

-- Pincode controleren op deze telefoon (na vergrendelen)
create or replace function public.verify_pin(p_pin text)
returns boolean language plpgsql security definer set search_path = public, extensions as $$
declare
  m members;
begin
  select mm.* into m from members mm join devices d on d.family_id = mm.family_id and d.member_id = mm.id
    where d.user_id = auth.uid() and not d.blocked for update of mm;
  if not found then raise exception 'telefoon niet gekoppeld'; end if;
  if m.locked_until is not null and m.locked_until > now() then
    raise exception 'te veel verkeerde pincodes, probeer het over een kwartier opnieuw';
  end if;
  if m.pin_hash is not null and m.pin_hash = crypt(p_pin, m.pin_hash) then
    update members set fails = 0, locked_until = null where family_id = m.family_id and id = m.id;
    return true;
  end if;
  update members set fails = fails + 1,
    locked_until = case when fails + 1 >= 5 then now() + interval '15 minutes' else null end
    where family_id = m.family_id and id = m.id;
  return false;
end $$;

-- Nieuwe pincode kiezen (na herstel via e-mail)
create or replace function public.set_pin(p_pin text)
returns void language plpgsql security definer set search_path = public, extensions as $$
begin
  if p_pin !~ '^[0-9]{4}$' then raise exception 'pincode moet 4 cijfers zijn'; end if;
  update members m set pin_hash = crypt(p_pin, gen_salt('bf')), fails = 0, locked_until = null
    from devices d where d.user_id = auth.uid() and not d.blocked and m.family_id = d.family_id and m.id = d.member_id;
  if not found then raise exception 'telefoon niet gekoppeld'; end if;
end $$;

-- Nieuwe gezinscode (de oude vervalt)
create or replace function public.renew_code()
returns json language plpgsql security definer set search_path = public, extensions as $$
declare
  c text;
  fid uuid := my_family();
begin
  if fid is null then raise exception 'telefoon niet gekoppeld'; end if;
  c := new_code();
  update families set code = c, code_expires = now() + interval '7 days' where id = fid;
  return json_build_object('code', c, 'expires', now() + interval '7 days');
end $$;

-- Laat weten dat deze telefoon nog in gebruik is
create or replace function public.hello(p_label text)
returns json language plpgsql security definer set search_path = public as $$
declare
  d devices;
begin
  update devices set last_seen = now(), label = coalesce(nullif(p_label, ''), label)
    where user_id = auth.uid() returning * into d;
  if not found then return null; end if;
  return json_build_object('family_id', d.family_id, 'member_id', d.member_id, 'blocked', d.blocked);
end $$;

-- Publieke sleutel voor pushmeldingen
create or replace function public.vapid_public()
returns text language sql stable security definer set search_path = public as $$
  select v from app_secrets where k = 'vapid_public'
$$;

revoke all on function public.create_family, public.lookup_family, public.join_family, public.verify_pin,
  public.set_pin, public.renew_code, public.hello, public.vapid_public, public.new_code from public, anon;
grant execute on function public.create_family, public.lookup_family, public.join_family, public.verify_pin,
  public.set_pin, public.renew_code, public.hello, public.vapid_public to authenticated;

-- ---------- live meekijken (realtime) ----------
alter table public.docs replica identity full;
do $$ begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    alter publication supabase_realtime add table public.docs;
  end if;
end $$;

-- ---------- foto's ----------
insert into storage.buckets (id, name, public) values ('photos', 'photos', false)
  on conflict (id) do nothing;

create policy "foto's lezen" on storage.objects for select to authenticated
  using (bucket_id = 'photos' and (storage.foldername(name))[1] = public.my_family()::text);
create policy "foto's toevoegen" on storage.objects for insert to authenticated
  with check (bucket_id = 'photos' and (storage.foldername(name))[1] = public.my_family()::text);
create policy "foto's verwijderen" on storage.objects for delete to authenticated
  using (bucket_id = 'photos' and (storage.foldername(name))[1] = public.my_family()::text);

-- geheim token waarmee de klok (cron) de meldingen-functie mag aanroepen
insert into public.app_secrets (k, v) values ('notify_token', encode(extensions.gen_random_bytes(24), 'hex'))
  on conflict (k) do nothing;
