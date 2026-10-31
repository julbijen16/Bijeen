# Bijeen online zetten

Bijeen is de gezinsplanner van de familie Bijen: agenda, taken, boodschappen, notities en het werkrooster, gedeeld tussen alle telefoons van het gezin. Hij werkt ook zonder internet en stuurt herinneringen.

Deze handleiding doe je **één keer**. Daarna gaat alles vanzelf: elke verbetering die in deze repository komt, staat binnen een paar minuten op jullie telefoons.

Je hebt nodig: je GitHub-, Supabase- en Netlify-account en ongeveer 20 minuten. De repository blijft privé.

---

## Stap 1. Supabase-project maken

1. Ga naar [supabase.com/dashboard](https://supabase.com/dashboard) en klik op **New project** (in hetzelfde account als je andere app is prima).
2. Naam: **Bijeen**. Regio: **Central EU (Frankfurt)**.
3. Kies een **databasewachtwoord** en bewaar het in je wachtwoordmanager. Je hebt het zo nodig.
4. Wacht tot het project klaar is (een paar minuten).
5. Ga naar **Project Settings** (tandwieltje linksonder) › **General**. Kopieer de **Project ID** (een rij letters, bijvoorbeeld `abcdefghijklmnop`).
6. Ga naar **Project Settings** › **API Keys**. Kopieer de **anon public** sleutel (of de **publishable** sleutel als je die ziet). Deze sleutel mag in de app staan, hij is niet geheim.

## Stap 2. Een sleutel voor GitHub maken

Hiermee mag GitHub de database en de meldingen voor je klaarzetten.

1. Ga naar [supabase.com/dashboard/account/tokens](https://supabase.com/dashboard/account/tokens).
2. Klik op **Generate new token**, noem hem **Bijeen GitHub** en kopieer de sleutel. Je ziet hem maar één keer.

## Stap 3. De geheimen in GitHub zetten

1. Ga in de repository Bijeen op github.com naar **Settings** › **Secrets and variables** › **Actions**.
2. Klik op **New repository secret** en maak deze drie aan (de naam precies zo overnemen):

| Name | Secret |
|---|---|
| `SUPABASE_PROJECT_REF` | de Project ID uit stap 1 |
| `SUPABASE_DB_PASSWORD` | het databasewachtwoord uit stap 1 |
| `SUPABASE_ACCESS_TOKEN` | de sleutel uit stap 2 |

Stuur deze gegevens nooit via WhatsApp, mail of chat. Ze horen alleen hier.

## Stap 4. De app in Netlify zetten

Net als bij je andere app.

1. Ga naar [app.netlify.com](https://app.netlify.com) › **Add new project** › **Import an existing project** › **GitHub** en kies de repository **Bijeen**.
2. De instellingen worden automatisch ingevuld (build command `sh netlify-build.sh`, publish directory `_site`). Laat ze zo staan.
3. Klik bij **Environment variables** (of later via **Site configuration** › **Environment variables**) op **Add** en maak er twee:

| Key | Value |
|---|---|
| `SUPABASE_URL` | `https://` + je Project ID + `.supabase.co`, bijvoorbeeld `https://abcdefghijklmnop.supabase.co` |
| `SUPABASE_ANON_KEY` | de anon/publishable sleutel uit stap 1 |

4. Klik op **Deploy**. Wil je een mooiere naam, kies dan bij **Site configuration** › **Change site name** bijvoorbeeld **bijeen** (dan wordt het adres `https://bijeen.netlify.app`).
5. Zet het adres van de app ook als vierde geheim in GitHub (zoals in stap 3): naam `APP_URL`, waarde bijvoorbeeld `https://bijeen.netlify.app`. Dan komen de links in de bevestigingsmail goed uit.

Heb je de environment variables pas na de eerste deploy toegevoegd? Klik dan in Netlify op **Deploys** › **Trigger deploy** › **Deploy site**.

## Stap 5. Pull request samenvoegen

1. Open de pull request in GitHub en klik op **Merge pull request** › **Confirm merge**.
2. Netlify zet de app automatisch online. Tegelijk zet GitHub de database en de meldingen klaar: kijk bij het tabblad **Actions** of **Supabase bijwerken** een groen vinkje krijgt (een paar minuten).

Staat er een rood kruisje? Klik erop, maak een schermafbeelding en stuur die naar Claude. Je kunt het daarna opnieuw proberen via **Actions** › **Supabase bijwerken** › **Run workflow**.

## Stap 6. De app op je telefoon zetten

**Android (Samsung):** open het adres van de app (bijvoorbeeld `https://bijeen.netlify.app`) in Chrome. Tik op **Installeren** (op de home van de app, of via het menu met de drie puntjes › **App installeren**).

**iPhone:** open het adres in **Safari** (niet in een andere browser). Tik onderin op **Deel** (vierkantje met pijl omhoog) › **Zet op beginscherm** › **Voeg toe**. Open Bijeen daarna altijd vanaf het beginscherm, anders werken de meldingen niet.

## Stap 7. Gezin aanmaken

1. Open de app en tik op **Nieuw gezin aanmaken**. Vul de achternaam, je naam en je reserve e-mail in en kies een pincode.
2. Je krijgt een **gezinscode** van 6 tekens. Die stuur je naar Naomi (ook later te vinden onder je profiel › **Persoon uitnodigen**).
3. Naomi zet de app op haar iPhone (stap 6), vult de code in, tikt op **Iemand anders**, vult haar naam in en kiest haar eigen pincode.
4. De baby voeg je toe via je profiel › **Persoon toevoegen**.
5. Zet de meldingen aan: tik op het belletje op de home › **Zet meldingen aan**.

---

## Goed om te weten

- **Inloggen:** je blijft ingelogd. De pincode (of Face ID / vingerafdruk) heb je alleen nodig na **Vergrendelen**, of op een nieuwe telefoon.
- **Telefoon kwijt?** Op de nieuwe telefoon: **Herstel via e-mail**. Je krijgt een code in je mail. Daarna kies je een nieuwe pincode en wordt je oude telefoon uitgelogd.
- **Reserve e-mail voor Naomi:** Supabase stuurt met een gratis account alleen mails naar mensen in je Supabase-team. Wil je dat herstel ook voor Naomi werkt, nodig haar e-mailadres dan uit via **Organization settings** › **Team** › **Invite** (rol: *Read-only*). Zij hoeft verder niets met Supabase te doen.
- **Pauze:** Supabase zet een gratis project op pauze na een week zonder gebruik. Daarom tikt GitHub de database elke twee dagen even aan (workflow **Supabase wakker houden**). Gebeurt het toch, dan opent de app nog steeds met alles wat op je telefoon staat; klik dan in het Supabase-dashboard op **Restore project**.

### Lukt anoniem inloggen niet?

Zie je in de app "Inloggen bij de server lukt niet"? Zet het dan met de hand aan: in Supabase › **Authentication** › **Sign In / Providers** › zet **Allow anonymous sign-ins** aan en klik op **Save**.
