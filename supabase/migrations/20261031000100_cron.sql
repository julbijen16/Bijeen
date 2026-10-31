-- Elke minuut kijkt de server of er herinneringen of nieuwe meldingen te versturen zijn.
-- Het adres van de functie (notify_url) zet de installatie-workflow in app_secrets.
create extension if not exists pg_cron;
create extension if not exists pg_net with schema extensions;

create or replace function public.run_notify() returns void
language plpgsql security definer set search_path = public, extensions as $$
declare
  u text;
  t text;
begin
  select v into u from app_secrets where k = 'notify_url';
  select v into t from app_secrets where k = 'notify_token';
  if u is null then return; end if;
  perform net.http_post(
    url := u,
    headers := jsonb_build_object('Content-Type', 'application/json', 'x-bijeen-token', coalesce(t, '')),
    body := '{}'::jsonb,
    timeout_milliseconds := 20000
  );
  delete from sent_reminders where at < now() - interval '30 days';
  delete from code_attempts where at < now() - interval '1 day';
end $$;
revoke all on function public.run_notify from public, anon, authenticated;

select cron.schedule('bijeen-notify', '* * * * *', $$ select public.run_notify() $$);
