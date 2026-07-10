# Domynat 🥗

Eine schlanke **PWA** zum Tracken von Kalorien und Makros – mit KI-Schätzung, Tagesbudget,
Wochentrend, Einkaufslisten aus wiederkehrenden Mahlzeiten und Restaurant-Vorschlägen.

Komplett **buildless** (reines HTML/CSS/JS, keine Build-Tools, keine externen CDNs) und
**offline-fähig**. Alle Daten bleiben lokal auf deinem Gerät (`localStorage`).

## Features

- **KI-Schätzung** – Textfeld beschreiben („100 g Haferflocken mit Banane"), Claude schätzt
  Kalorien + Protein/Fett/Kohlenhydrate und zerlegt die Mahlzeit in Einkaufs-Zutaten.
- **Spracheingabe** – 🎤-Button antippen, einfach sagen was du gegessen/getrunken hast; die
  App transkribiert (deutsch) und trägt den Eintrag automatisch per KI-Schätzung ein.
- **Tagesbudget & Restbudget** – Kalorien-Ring, Makro-Balken, Wasser-Tracking.
- **Protein-Ampel** – separates Proteinziel mit Ampel-Warnung, wenn du deutlich darunter liegst.
- **Wochentrend** – 7-Tage-Chart (Kalorien-Balken, Zielllinie, Protein-Verlauf) + Durchschnitte.
- **Einkaufslisten** – automatisch aus wiederkehrenden Zutaten der letzten 7–14 Tage,
  gruppiert nach Kategorie. Oder frei generieren: „3 Tage, 2000 kcal, Fokus Protein".
- **Restaurant-Vorschläge** – über die Google Places API, gefiltert nach „passt ins Restbudget".
- **Manuelle Einträge** & Bearbeiten/Löschen, **Export/Import** aller Daten als JSON.

## Loslegen

Da alles statisch ist, reicht ein beliebiger Webserver:

```bash
# lokal ausprobieren
python3 -m http.server 8099
# → http://localhost:8099
```

Zum Hosten einfach den Ordner auf **GitHub Pages**, Netlify, Vercel o. Ä. legen –
es gibt keinen Build-Schritt.

### Als App aufs Handy (PWA)

1. Die gehostete URL in **Chrome** (Android) oder **Safari** (iOS) öffnen.
2. Drei-Punkte-Menü → **„Zum Startbildschirm hinzufügen"**.
3. Startet danach wie eine native App (Vollbild, eigenes Icon).

## Einrichtung

Öffne **⚙️ Einstellungen** in der App:

- **Anthropic API-Key** (`sk-ant-…`) – für die KI-Schätzung. Der Key wird **nur lokal**
  gespeichert und direkt an die Anthropic-API geschickt
  (`anthropic-dangerous-direct-browser-access`). Standardmodell ist `claude-haiku-4-5`
  (schnell & günstig); Sonnet 5 ist optional für mehr Genauigkeit.
  - Key holen: <https://console.anthropic.com/settings/keys> (Konto anlegen → „Create Key").
    Guthaben unter *Billing* aufladen.
- **Ziele** – Kalorien, Protein, Fett, Kohlenhydrate, Wasser.
- **Google-Maps-API-Key** (optional) – für Restaurant-Vorschläge.
  - Key holen: <https://console.cloud.google.com/apis/credentials> → „Anmeldedaten erstellen"
    → „API-Schlüssel".
  - Danach **Places API (New)** aktivieren:
    <https://console.cloud.google.com/apis/library/places.googleapis.com> → „Aktivieren".
  - Ohne Key ist das Restaurant-Feature einfach inaktiv.

## Datenschutz

Alle Einträge, Wasserwerte und Ziele liegen ausschließlich in `localStorage` deines Browsers.
Es gibt kein Backend. Über **Export** kannst du ein Backup ziehen, über **Import** es wieder
einspielen (z. B. auf einem neuen Gerät).

## Projektstruktur

```
index.html              App-Shell (alle Ansichten + Dialoge)
manifest.webmanifest    PWA-Manifest
sw.js                   Service Worker (Offline-Cache der App-Shell)
css/styles.css          Styles (Light/Dark, mobile-first)
js/app.js               Verdrahtung & UI-Logik
js/store.js             Datenhaltung (localStorage)
js/llm.js               Anthropic-Claude-Aufrufe (Schätzung, Listen)
js/charts.js            Wochentrend-Chart (Canvas)
js/shopping.js          Wiederkehrende Zutaten → gruppierte Liste
js/places.js            Google-Places-Restaurantsuche
icons/                  App-Icons (SVG + PNG, inkl. maskable)
```

## Hinweis zu Samsung Health

Ein Web-PWA hat keinen direkten Zugriff auf die Samsung-Health-Datenbank (dafür bräuchte es
eine native App mit dem Samsung Health SDK). Das Wasser-Tracking funktioniert hier manuell;
per Export/Import lassen sich Werte bei Bedarf abgleichen.
