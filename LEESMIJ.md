# Bijeen online zetten

Bijeen is de gezinsplanner van de familie Bijen: agenda, taken, boodschappen, notities en het werkrooster, gedeeld tussen alle telefoons van het gezin. Hij werkt ook zonder internet en stuurt herinneringen.

Deze handleiding doe je **één keer**. Daarna gaat alles vanzelf: elke verbetering die in deze repository komt, staat binnen een paar minuten op jullie telefoons.

Je hebt nodig: je GitHub-account, je Supabase-account en ongeveer 20 minuten.

---

## Stap 1. De repository openbaar maken

GitHub Pages (de gratis hosting van de app) werkt met een gratis account alleen voor openbare repositories. Dat is veilig: hier staat alleen de code van de app. Jullie afspraken, foto's en pincodes staan in Supabase en zijn niet te zien.

1. Ga naar de repository op github.com en klik op **Settings** (tandwieltje, bovenaan).
2. Scroll helemaal naar beneden naar **Danger Zone** en klik op **Change visibility**.
3. Kies **Make public** en bevestig.

## Stap 2. GitHub Pages aanzetten

1. Nog steeds in **Settings**: klik links op **Pages**.
2. Bij **Source** kies je **GitHub Actions**.

## Stap 3. Supabase-project maken

1. Ga naar [supabase.com/dashboard](https://supabase.com/dashboard) en klik op **New project**.
2. Naam: **Bijeen**. Regio: **Central EU (Frankfurt)**.
3. Kies een **databasewachtwoord** en bewaar het in je wachtwoordmanager. Je hebt het zo nodig.
4. Wacht tot het project klaar is (een paar minuten).
5. Ga naar **Project Settings** (tandwieltje linksonder) › **General**. Kopieer de **Project ID** (een rij letters, bijvoorbeeld `abcdefghijklmnop`).

## Stap 4. Een sleutel voor GitHub maken

Hiermee mag GitHub de database en de meldingen voor je klaarzetten.

1. Ga naar [supabase.com/dashboard/account/tokens](https://supabase.com/dashboard/account/tokens).
2. Klik op **Generate new token**, noem hem **Bijeen GitHub** en kopieer de sleutel. Je ziet hem maar één keer.

## Stap 5. De drie geheimen in GitHub zetten

1. Ga in de repository naar **Settings** › **Secrets and variables** › **Actions**.
2. Klik op **New repository secret** en maak deze drie aan (de naam precies zo overnemen):

| Name | Secret |
|---|---|
| `SUPABASE_PROJECT_REF` | de Project ID uit stap 3 |
| `SUPABASE_DB_PASSWORD` | het databasewachtwoord uit stap 3 |
| `SUPABASE_ACCESS_TOKEN` | de sleutel uit stap 4 |

Stuur deze gegevens nooit via WhatsApp, mail of chat. Ze horen alleen hier.

## Stap 6. Online zetten

1. Ga in de repository naar het tabblad **Actions**.
2. Klik links op **Online zetten** en dan rechts op **Run workflow** › **Run workflow**.
3. Na een paar minuten staat er een groen vinkje. Klik erop: bij **App online zetten** zie je het adres van de app, ongeveer `https://julbijen16.github.io/bijeen/`.

Staat er een rood kruisje? Klik erop, maak een schermafbeelding en stuur die naar Claude.

## Stap 7. De app op je telefoon zetten

**Android (Samsung):** open het adres in Chrome. Tik op **Installeren** (op de home van de app, of via het menu met de drie puntjes › **App installeren**).

**iPhone:** open het adres in **Safari** (niet in een andere browser). Tik onderin op **Deel** (vierkantje met pijl omhoog) › **Zet op beginscherm** › **Voeg toe**. Open Bijeen daarna altijd vanaf het beginscherm, anders werken de meldingen niet.

## Stap 8. Gezin aanmaken

1. Open de app en tik op **Nieuw gezin aanmaken**. Vul de achternaam, je naam en je reserve e-mail in en kies een pincode.
2. Je krijgt een **gezinscode** van 6 tekens. Die stuur je naar Naomi (ook later te vinden onder je profiel › **Persoon uitnodigen**).
3. Naomi zet de app op haar iPhone (stap 7), vult de code in, tikt op **Iemand anders**, vult haar naam in en kiest haar eigen pincode.
4. De baby voeg je toe via je profiel › **Persoon toevoegen**.
5. Zet de meldingen aan: tik op het belletje op de home › **Zet meldingen aan**.

---

## Goed om te weten

- **Inloggen:** je blijft ingelogd. De pincode (of Face ID / vingerafdruk) heb je alleen nodig na **Vergrendelen**, of op een nieuwe telefoon.
- **Telefoon kwijt?** Op de nieuwe telefoon: **Herstel via e-mail**. Je krijgt een code in je mail. Daarna kies je een nieuwe pincode en wordt je oude telefoon uitgelogd.
- **Reserve e-mail voor Naomi:** Supabase stuurt met een gratis account alleen mails naar mensen in je Supabase-team. Wil je dat herstel ook voor Naomi werkt, nodig haar e-mailadres dan uit via **Organization settings** › **Team** › **Invite** (rol: *Read-only*). Zij hoeft verder niets met Supabase te doen.
- **Gratis:** Supabase kan een gratis project op pauze zetten als het een week niet gebruikt wordt. Omdat jullie de app dagelijks gebruiken speelt dat normaal niet. Gebeurt het toch, klik dan in het Supabase-dashboard op **Restore project**.

### Lukt anoniem inloggen niet?

Zie je in de app "Inloggen bij de server lukt niet"? Zet het dan met de hand aan: in Supabase › **Authentication** › **Sign In / Providers** › zet **Allow anonymous sign-ins** aan en klik op **Save**.
