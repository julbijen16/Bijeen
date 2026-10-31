# Bijeen

Family planner PWA (Dutch UI): shared agenda, tasks, shopping lists, notes and a work rota, synced live between phones, usable offline, with push reminders.

**Setup instructions (Dutch): see [LEESMIJ.md](LEESMIJ.md).**

## How it is built

- `index.html`, `css/`, `js/app.js`: the app UI. Plain JavaScript, no build step.
- `js/store.js`: local-first data layer. Everything is kept in `localStorage`, changes go to an outbox and are upserted to Supabase (`docs` table, one row per item). Changes from other phones arrive via Supabase Realtime. Photos are uploaded to the private `photos` storage bucket.
- `sw.js`: service worker (offline app shell, photo cache, push notifications).
- `supabase/migrations/`: tables, row level security and RPCs. Each phone signs in anonymously and is linked to a family with the 6-character family code and a 4-digit PIN (`create_family`, `lookup_family`, `join_family`, `verify_pin`). Recovery is via an e-mail OTP to the person's confirmed reserve address.
- `supabase/functions/notify`: Edge Function run every minute by `pg_cron`; sends event reminders and "X added Y" notifications with Web Push (VAPID keys are generated on first run and kept in `app_secrets`).
- Hosting: Netlify (`netlify.toml`, `netlify-build.sh` writes `js/config.js` from the `SUPABASE_URL` and `SUPABASE_ANON_KEY` environment variables).
- `.github/workflows/supabase.yml`: on every push to `main`, applies migrations, deploys the function and configures auth. Needs the repository secrets `SUPABASE_PROJECT_REF`, `SUPABASE_DB_PASSWORD`, `SUPABASE_ACCESS_TOKEN` and optionally `APP_URL`.
- `.github/workflows/wakker-houden.yml`: pings the database every two days so the free Supabase project is never paused.

## Local development

Serve the folder (`python3 -m http.server`) and fill in `js/config.js` with a Supabase URL and anon key.
