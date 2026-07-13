---
tags:
  - Uni
  - G10
  - Konzepte
typ: Konzeptsammlung
erstellt: 2026-07-13
---

# G10 Digitale Technologien & Distribution — Kernkonzepte

## Der Hotel-Tech-Stack (Systemtrennung = halbe Klausur)

| System | Funktion | Merksatz |
|---|---|---|
| **PMS** (Property Management System) | operatives Herz im Haus: Reservierungen, Check-in/out, Zimmerstatus, Gästekartei, Abrechnung | "Das Betriebssystem des Hotels" |
| **IBE** (Internet Booking Engine) | Buchungsstrecke auf der EIGENEN Website | "Der Direktkanal-Verkäufer" |
| **Channel Manager** | synchronisiert Raten & Verfügbarkeiten in Echtzeit zwischen PMS und allen Kanälen | "Die Drehscheibe — verhindert Doppelverkauf" |
| **CRS** (Central Reservation System) | zentrale Reservierungsplattform (v. a. Ketten/Kooperationen), bündelt Häuser | "Die Konzernzentrale der Buchungen" |
| **RMS** (Revenue Management System) | Prognose + Preisvorschläge aus Buchungsdaten ([[02_Areas/Studium_HM/G9_Grundlagen_Hospitality_Management/Konzepte\|G9]]) | "Der Preis-Autopilot (mit menschlicher Aufsicht)" |
| **POS** (Point of Sale) | Kassensystem F&B/Spa, bucht auf Zimmerrechnung ins PMS | |
| **CRM** | Gästedaten, Segmentierung, Kampagnen — funktioniert nur mit DIREKTEN Gastdaten | "Der Grund, warum Datenhoheit Geld wert ist" |

**Der Regelkreis:** PMS/CRS ⇄ Channel Manager ⇄ Kanäle; RMS liest Pickup/Pace und stellt neue Raten ein → [[02_Areas/Studium_HM/G10_Digitale_Technologien_Distribution/SOP_Klausurvorbereitung|SOP §2A Datenfluss]].

## Distributionslandschaft

**Direktkanal:** eigene Website+IBE, Telefon/E-Mail, Walk-in. Kosten: nicht null! (Website, SEA/SEO, Metasearch-Gebote, Personal). Vorteil: Gastdaten, keine Kommission, volle Steuerbarkeit.

**OTA (Online Travel Agency):** Booking.com, Expedia … Geschäftsmodelle: **Agency** (Gast zahlt im Hotel; Kommission ~15–25 % nachgelagert) vs. **Merchant** (OTA kassiert, Hotel bekommt Nettorate) vs. Werbemodelle. Duopol-Tendenz durch [[00_System/Konzept_Bibliothek|Netzwerkeffekte]] (mehr Hotels ↔ mehr Nutzer).

**Metasearch:** Google Hotels, Trivago, Kayak — VERGLEICHEN Preise, verkaufen Klicks/Leads (CPC), buchen i. d. R. nicht selbst. Chance für Direktvertrieb: eigene Rate neben OTAs listen.

**GDS (Global Distribution Systems):** Amadeus, Sabre, Travelport — B2B-Netz für Reisebüros & Corporate Travel; älter, aber im Geschäftsreisesegment relevant; Zugang für Einzelhotels über Repräsentanzen.

**Wholesaler/Bettenbanken:** kaufen Kontingente zu Nettoraten, verkaufen an Veranstalter/OTAs weiter — Risiko: Ratenleckage (Nettoraten tauchen öffentlich auf → untergräbt Preisstruktur).

**Kanalkosten-Denkweise:** Nettoertrag je Buchung = Rate − Kommission/Abschlag − Payment − anteilige Akquisekosten; dazu strategische Dimension: Datenhoheit, Stornoquote je Kanal, Segmentzugang. → Rechnung: [[02_Areas/Studium_HM/G10_Digitale_Technologien_Distribution/Beispielaufgaben|Beispielaufgabe 1]].

## Plattformökonomie & Marktdynamik

**Netzwerkeffekte → Konzentration → Verhandlungsmacht:** klassische [[00_System/Konzept_Bibliothek|verstärkende Feedback-Schleife]]; Folge: Kommissionsniveau, Ranking-Abhängigkeit ("Visibility-Booster" kosten extra).

**Billboard-Effekt:** OTA-Listing wirkt als Werbefläche — ein Teil der Betrachter bucht anschließend direkt. Konsequenz: OTA-Präsenz ≠ nur Kommissionskosten, sondern auch Marketingwert.

**Disintermediation vs. Re-Intermediation:** Internet schaltete klassische Mittler (Reisebüro) aus — aber neue Mittler (OTA, Metasearch, Plattformen) schoben sich dazwischen. Prüfungsreife These: "Das Netz hat Mittler nicht abgeschafft, sondern ausgetauscht — und mächtiger gemacht."

**Rate Parity / Bestpreisklauseln:** OTAs verlangten, dass Hotels nirgends billiger anbieten ("weite" Klauseln: nirgendwo; "enge": nicht auf eigener Website). In Deutschland kartellrechtlich gekippt (Booking-Verfahren; EU: Digital Markets Act adressiert Gatekeeper) → Hotels DÜRFEN direkt günstiger sein; Stand laut Skript/aktueller Rechtsprechung prüfen. Praktische Nutzung: Direktbuchervorteile (Rate, Extras, flexible Storno).

**Sharing-/Plattform-Angebote:** Airbnb & Co. als Parahotellerie-Konkurrenz ([[02_Areas/Studium_HM/G3_Grundlagen_Hospitality/Konzepte|G3]]); Delivery-Plattformen & Ghost Kitchens in der Gastronomie — gleiche Plattformlogik, anderes Produkt.

## Digitale Customer Journey (Phasen → Touchpoints → Daten)

1. **Inspiration/Dreaming:** Social Media, Content, Empfehlungen
2. **Suche/Planung:** Google, Metasearch, OTA-Listen, Bewertungen (**Social Proof** — Review-Score beeinflusst Conversion & durchsetzbare Rate messbar)
3. **Buchung:** OTA vs. direkt; Conversion-Hebel: Ladezeit, mobile UX, transparente Preise, wenige Schritte
4. **Pre-Stay:** Bestätigung, Upselling-Mails (Upgrade, Frühstück), Online-Check-in
5. **Stay:** Self-Services (Kiosk, mobiler Schlüssel), Gäste-App/Messaging, POS-Datenpunkte
6. **Post-Stay:** Bewertungsbitte, CRM-Pflege, Wiederbuchungsimpulse — **die Journey ist ein Kreislauf** ([[02_Areas/Studium_HM/G3_Grundlagen_Hospitality/Konzepte|G3 Wertschöpfungskette]])

**Review-Management:** Antwort-SOP in [[02_Areas/Studium_HM/G10_Digitale_Technologien_Distribution/SOP_Klausurvorbereitung|SOP §2D]]; statistische Vorsicht (Selektionsbias → [[02_Areas/Studium_HM/G8_Statistik_Datenkompetenz/Konzepte|G8]]).

## Trends & Rahmen (Schema: Nutzenmechanik statt Buzzword)

- **KI/Chatbots & Messaging:** entlasten Front Office von Routinefragen (Kosten ↓), 24/7 (Erlebnis ↑); Risiko: falsche Antworten, unpersönlich — Eskalation an Menschen definieren
- **Dynamische Personalisierung/Upselling:** CRM+RMS-Daten → passende Angebote; DSGVO-Grenzen
- **Self-Check-in/mobiler Schlüssel:** Personalengpass-Antwort ([[02_Areas/Studium_HM/G2_Personal_Interkulturelles_Management/Konzepte|G2]]); Gefahr: Kontaktpunkt für Upselling/Beziehung entfällt
- **Payment:** PSD2/SCA, virtuelle Kreditkarten der OTAs, Vorauszahlungsmodelle — Cashflow- und Gebührenwirkung
- **DSGVO-Grundzüge:** personenbezogene Daten nur mit Rechtsgrundlage (Vertrag, Einwilligung), Zweckbindung, Datenminimierung, Auskunfts-/Löschrechte, AV-Verträge mit Systemanbietern — Gästedaten sind reguliertes Kapital

## Kanal-Mix-Heuristik (für Empfehlungsaufgaben)

Betriebstyp bestimmt Mix: **Kettenhotel** (starke Marke, Loyalty-Programm) → hoher Direktanteil realistisch; **Privathotel Stadtrandlage** → OTA als Reichweitenmaschine akzeptieren, parallel Direktbucher-Konversion (Gast im Haus → Stammgast direkt); **Resort/Ferien** → Veranstalter/Wholesale + saisonale Steuerung. Immer: Kontingente & Raten je Kanal aktiv steuern (Channel Manager), nicht "einstellen und vergessen".
