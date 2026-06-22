# Sedef – Webseite 💖

Eine kleine romantische Webseite. Man tippt einen Namen in die Suchleiste:
- **Sedef** → der große Antrag (Frage, Konfetti, Liebesbotschaft, dann das Menü "Unser Plätzchen" mit Zähler, geheimen Nachrichten und Briefkasten).
- **Wim, Maik, Marcel, Yomna, Clara** → jeweils eine eigene kleine Karte (zur Tarnung).

---

## 1. Namen & Texte ändern (ganz einfach)

Alles steht in der Datei **`profiles.js`**. Einfach den Text in den
Anführungszeichen ändern. Wichtig: Namen immer klein schreiben, jede Zeile
endet mit einem Komma. Den `sedef`-Eintrag so lassen – der ist der Antrag.

Geheime Codewörter stehen in derselben Datei unter `secrets`.
Die "Gründe, warum ich dich mag"-Karten stehen unter `reasons`,
und die versteckten Easter Eggs (Wörter für die Suchleiste) unter
`easterEggs`.

---

## Vorher testen (ohne dass der Zähler "echt" startet)

Zwei einfache Wege:

- **Privates Fenster / Inkognito-Fenster** benutzen: Dort wird beim
  Schließen automatisch alles gelöscht – perfekt zum Ausprobieren, es
  bleiben keine Spuren.
- **Reset-Link:** Öffne die Seite mit `?reset` am Ende der Adresse, z. B.
  `…/index.html?reset` (oder `https://…github.io/Domynat/?reset`).
  Damit werden das Zähler-Startdatum und der lokale Briefkasten gelöscht.
- **Online-Briefkasten leeren:** Hast du den geteilten Briefkasten
  eingerichtet, landen Test-Nachrichten online. Mit `?resetall` (statt
  `?reset`) werden auch diese Online-Nachrichten gelöscht. Achtung: damit
  sind ALLE Nachrichten im Briefkasten weg – also nur zum Testen nutzen.

Der "Zusammen seit"-Zähler startet übrigens erst, wenn man im Antrag bis
zur Liebesbotschaft klickt – nur die Seite anschauen löst ihn nicht aus.

---

## Briefkasten über zwei Geräte teilen (optional, kostenlos)

Standardmäßig speichert der Briefkasten nur auf dem jeweiligen Gerät.
Wenn ihr euch über **zwei** Geräte schreiben wollt, trag in der Datei
**`config.js`** einen kostenlosen Online-Speicher ein. Die genaue
Schritt-für-Schritt-Anleitung steht oben in `config.js` selbst.
Eine eigene Domain ist dafür **nicht** nötig.

---

## 2. Webseite kostenlos online stellen (Weg B)

Damit man die Seite mit einem Link öffnen kann, schaltest du **GitHub Pages**
ein. Das ist EIN Klick:

1. Geh auf GitHub zu deinem Projekt **Domynat/Domynat**.
2. Oben auf **Settings** (Einstellungen).
3. Links im Menü auf **Pages**.
4. Bei **"Source" / "Branch"** wählst du den Branch
   `claude/sedef-confession-site-fnfjam` und den Ordner **`/ (root)`**.
5. Auf **Save** klicken.

Nach 1–2 Minuten erscheint oben ein Link, ungefähr so:

```
https://domynat.github.io/Domynat/
```

Diesen Link kannst du auf jedem Handy/Laptop öffnen. Fertig! ✅

---

## 3. Eigener Name (z. B. www.pussycats.de)

Damit statt des langen GitHub-Links **deine eigene Adresse** funktioniert,
brauchst du einen Domain-Namen. Den muss man **kaufen** (ca. 5–15 € pro Jahr).

### a) Domain kaufen
- Geh zu einem Anbieter wie **IONOS**, **Netcup**, **Namecheap** oder **Strato**.
- Such nach deinem Wunschnamen (z. B. `pussycats.de`) und schau, ob er frei ist.
- Hinweis: `.de`-Adressen brauchen eine **deutsche Adresse** beim Kauf.
- Kaufen / bestellen.

### b) Domain mit der Seite verbinden (DNS)
Beim Anbieter gibt es einen Bereich **"DNS"** oder **"DNS-Einstellungen"**.
Dort trägst du ein:

**Für www.deinedomain.de** – einen `CNAME`-Eintrag:
```
Typ:  CNAME
Name: www
Ziel: domynat.github.io
```

**Für die Adresse ohne www** – vier `A`-Einträge auf diese GitHub-Adressen:
```
Typ: A   Name: @   Wert: 185.199.108.153
Typ: A   Name: @   Wert: 185.199.109.153
Typ: A   Name: @   Wert: 185.199.110.153
Typ: A   Name: @   Wert: 185.199.111.153
```

### c) GitHub die Domain mitteilen
Zurück bei GitHub unter **Settings → Pages** trägst du bei
**"Custom domain"** deine Domain ein (z. B. `www.pussycats.de`) und klickst
**Save**. Setze danach den Haken bei **"Enforce HTTPS"** (kann ein paar
Minuten dauern, bis er anklickbar ist).

> Sobald du die Domain gekauft hast, kann ich dir die passende **CNAME**-Datei
> ins Projekt legen – sag mir einfach den genauen Namen.

DNS-Änderungen brauchen manchmal **ein paar Stunden**, bis sie überall
funktionieren. Nicht wundern, wenn es nicht sofort klappt.
