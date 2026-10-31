# Bijeen online zetten

Bijeen is de gezinsplanner van de familie Bijen: agenda, taken, boodschappen, notities en het werkrooster, gedeeld tussen alle telefoons van het gezin. Hij werkt ook zonder internet en stuurt herinneringen.

Deze handleiding doe je **één keer**. Daarna gaat alles vanzelf: elke verbetering die in deze repository komt, staat binnen een paar minuten op jullie telefoons.

Je hebt nodig: een computer (dat werkt makkelijker dan een telefoon), je GitHub-account, je Supabase-account en ongeveer 20 minuten.

**Overzicht**

1. Repository openbaar maken (GitHub)
2. GitHub Pages aanzetten (GitHub)
3. Supabase-organisatie en -project maken (Supabase)
4. Een sleutel voor GitHub maken (Supabase)
5. Drie geheimen in GitHub zetten (GitHub)
6. Online zetten (GitHub)
7. De app op jullie telefoons zetten
8. Gezin aanmaken en Naomi uitnodigen

---

## Stap 1. De repository openbaar maken

GitHub Pages (de gratis hosting van de app) werkt met een gratis account alleen voor openbare repositories. Dat is veilig: hier staat alleen de code van de app. Jullie afspraken, foto's en pincodes staan in Supabase en zijn voor niemand anders te zien.

1. Ga naar [github.com/julbijen16/Bijeen](https://github.com/julbijen16/Bijeen) en log in als dat nodig is.
2. Klik bovenaan in de rij tabbladen op **Settings** (tandwieltje, helemaal rechts).
3. Blijf op de pagina **General** en scroll helemaal naar beneden, naar het rode blok **Danger Zone**.
4. Klik bij **Change repository visibility** op de knop **Change visibility** › **Change to public**.
5. GitHub vraagt een paar keer of je het zeker weet. Klik steeds op de knop om door te gaan (**I want to make this repository public**, **I have read and understand these effects**).
6. Typ als GitHub erom vraagt de naam `julbijen16/Bijeen` over en klik op **Make this repository public**.
7. Misschien vraagt GitHub nog om je wachtwoord of een code uit je authenticator-app. Vul die in.

Bovenaan de repository staat nu **Public** in plaats van **Private**.

## Stap 2. GitHub Pages aanzetten

1. Blijf in **Settings** en klik in het menu links op **Pages** (onder het kopje *Code and automation*).
2. Bij **Build and deployment** › **Source** staat een keuzelijst. Kies **GitHub Actions**.
3. Meer hoeft hier niet. Je hoeft niets op te slaan.

## Stap 3. Supabase-organisatie en -project maken

We zetten Bijeen in een **eigen organisatie**, zodat het nooit iets te maken heeft met het project van je bedrijf.

1. Ga naar [supabase.com/dashboard](https://supabase.com/dashboard) en log in.
2. Klik linksboven op de naam van je huidige organisatie. Kies onderaan het lijstje **New organization**.
3. Vul in: naam **Bijeen**, type **Personal**, plan **Free**. Klik op **Create organization**.
4. Je komt nu in de nieuwe organisatie. Klik op **New project** en vul in:
   - **Project name:** Bijeen
   - **Database password:** klik op **Generate a password** en kopieer het. Bewaar het in je wachtwoordmanager of schrijf het tijdelijk op. Je hebt het in stap 5 nodig.
   - **Region:** Central EU (Frankfurt)
5. Klik op **Create new project** en wacht een paar minuten tot het project klaar is.
6. Klik linksonder op het tandwieltje **Project Settings** › **General**. Kopieer de **Project ID** (een rij van ongeveer 20 letters, bijvoorbeeld `abcdefghijklmnopqrst`).

## Stap 4. Een sleutel voor GitHub maken

Hiermee mag GitHub de database en de meldingen voor je klaarzetten.

1. Ga naar [supabase.com/dashboard/account/tokens](https://supabase.com/dashboard/account/tokens).
2. Klik op **Generate new token**. Naam: **Bijeen GitHub**. Laat de vervaldatum op **Never** staan (of kies de langste die er is).
3. Klik op **Generate token** en kopieer de sleutel (begint met `sbp_`). Je ziet hem maar één keer, dus plak hem meteen in stap 5.

## Stap 5. Drie geheimen in GitHub zetten

1. Ga terug naar de repository op GitHub › **Settings**.
2. Klik in het menu links op **Secrets and variables** › **Actions**.
3. Klik op de groene knop **New repository secret**.
4. Vul bij **Name** de naam in en bij **Secret** de waarde, en klik op **Add secret**. Doe dit drie keer (de namen precies zo overnemen, met hoofdletters en lage streepjes):

| Name | Secret |
|---|---|
| `SUPABASE_PROJECT_REF` | de Project ID uit stap 3 |
| `SUPABASE_DB_PASSWORD` | het databasewachtwoord uit stap 3 |
| `SUPABASE_ACCESS_TOKEN` | de sleutel uit stap 4 (begint met `sbp_`) |

Je ziet ze daarna in de lijst staan, maar de waarde zelf laat GitHub nooit meer zien. Dat hoort zo.

Stuur deze gegevens nooit via WhatsApp, mail of chat, ook niet naar Claude. Ze horen alleen hier.

## Stap 6. Online zetten

1. Klik in de repository bovenaan op het tabblad **Actions**.
2. Klik links op **Online zetten**.
3. Klik rechts op de knop **Run workflow** en daarna op de groene knop **Run workflow** in het lijstje dat opent.
4. Na een paar seconden verschijnt er een regel met een geel bolletje. Wacht tot het een **groen vinkje** wordt (ongeveer 3 minuten).
5. Klik op die regel. Onder **App online zetten** staat het adres van de app, ongeveer `https://julbijen16.github.io/Bijeen/`. Bewaar dit adres.

Staat er een rood kruisje? Klik erop, maak een schermafbeelding en stuur die naar Claude. Daarna kun je het opnieuw proberen met **Run workflow**.

Vanaf nu gaat dit vanzelf: elke keer dat Claude iets verbetert, zet GitHub de nieuwe versie binnen een paar minuten online.

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
- **Nieuwe telefoon?** Het makkelijkst: vraag de gezinscode aan iemand anders in het gezin (Profiel › **Persoon uitnodigen**), vul die in, tik op je eigen naam en vul je pincode in.
- **Telefoon kwijt?** Op de nieuwe telefoon: **Herstel via e-mail**. Je krijgt een (Engelstalige) mail van Supabase met een link **Log In**. Tik erop: je komt binnen en kiest een nieuwe pincode, en je oude telefoon wordt uitgelogd. Opent de link in de browser in plaats van in de app? Dan laat de browser een code van 6 cijfers zien. Open Bijeen vanaf je beginscherm, tik op **Herstel via e-mail** › **Ik heb al een code** en vul hem in.
- **Reserve e-mail voor Naomi:** Supabase stuurt met een gratis account alleen mails naar mensen in het team van de organisatie. Wil je dat herstel ook voor Naomi werkt, nodig haar e-mailadres dan uit in de organisatie **Bijeen** via **Organization settings** › **Team** › **Invite** (rol: *Read-only*). Zij hoeft verder niets met Supabase te doen.
- **Pauze:** Supabase zet een gratis project op pauze na een week zonder gebruik. Daarom tikt GitHub de database elke twee dagen even aan (workflow **Supabase wakker houden**). Jij merkt daar niets van. Gebeurt het toch, dan opent de app nog steeds met alles wat op je telefoon staat; klik dan in het Supabase-dashboard op **Restore project**.
- **Los van je bedrijf:** Bijeen staat op GitHub Pages en in een eigen Supabase-organisatie. Het gebruikt niets van je Netlify-account of het Supabase-project van je bedrijf.

### Lukt anoniem inloggen niet?

Zie je in de app "Inloggen bij de server lukt niet"? Zet het dan met de hand aan: in Supabase › **Authentication** › **Sign In / Providers** › zet **Allow anonymous sign-ins** aan en klik op **Save**.
