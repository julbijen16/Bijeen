-- Herstel via e-mail met de standaardmail van Supabase (een link in plaats van een code).
-- De link opent vaak in de browser in plaats van in de app op het beginscherm (zeker op iPhone).
-- Daarom kan de browser na het herstel een eenmalige overzetcode van 6 cijfers maken,
-- waarmee de app op het beginscherm aan dezelfde persoon wordt gekoppeld.

create table public.transfer_codes (
  code text primary key,
  family_id uuid not null references public.families on delete cascade,
  member_id text not null,
  expires timestamptz not null
);
alter table public.transfer_codes enable row level security;  -- alleen via de functies hieronder

create or replace function public.make_transfer()
returns text language plpgsql security definer set search_path = public, extensions as $$
declare
  fid uuid := my_family();
  mid text := my_member();
  c text;
begin
  if fid is null then raise exception 'telefoon niet gekoppeld'; end if;
  delete from transfer_codes where expires < now() or (family_id = fid and member_id = mid);
  loop
    c := lpad((get_byte(gen_random_bytes(1), 0) * 65536 + get_byte(gen_random_bytes(1), 0) * 256 + get_byte(gen_random_bytes(1), 0)) % 1000000 || '', 6, '0');
    exit when not exists (select 1 from transfer_codes where code = c);
  end loop;
  insert into transfer_codes (code, family_id, member_id, expires) values (c, fid, mid, now() + interval '10 minutes');
  return c;
end $$;

create or replace function public.redeem_transfer(p_code text)
returns json language plpgsql security definer set search_path = public, extensions as $$
declare
  t transfer_codes;
  tries int;
begin
  if auth.uid() is null then raise exception 'niet ingelogd'; end if;
  select count(*) into tries from code_attempts where user_id = auth.uid() and at > now() - interval '15 minutes';
  if tries >= 10 then raise exception 'te veel pogingen, probeer het over een kwartier opnieuw'; end if;
  delete from transfer_codes where code = trim(p_code) and expires > now() returning * into t;
  if not found then
    insert into code_attempts (user_id) values (auth.uid());
    return null;
  end if;
  insert into devices (user_id, family_id, member_id) values (auth.uid(), t.family_id, t.member_id)
    on conflict (user_id) do update set family_id = excluded.family_id, member_id = excluded.member_id, blocked = false, created_at = now();
  return json_build_object('family_id', t.family_id, 'member_id', t.member_id,
    'family_name', (select name from families where id = t.family_id));
end $$;

revoke all on function public.make_transfer() from public, anon;
revoke all on function public.redeem_transfer(text) from public, anon;
grant execute on function public.make_transfer() to authenticated;
grant execute on function public.redeem_transfer(text) to authenticated;
