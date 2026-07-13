---
tags:
  - Uni
  - G10
  - SOP
typ: SOP
erstellt: 2026-07-13
---

# G10 Digitale Technologien & Distribution — SOP Klausurvorbereitung

> Anti-Buzzword-Regel: Jede Antwort muss MECHANIK zeigen (Datenfluss, Geldfluss) oder ABWÄGUNG (Nutzen vs. Kosten/Risiko). Nie ein System nur benennen.

## 1. Themenreihenfolge

1. **Tech-Stack + Datenflüsse** (PMS, Channel Manager, CRS, RMS, IBE) — Systemverständnis ist die halbe Klausur
2. **Distributionskanäle + Kostenlogik** — inkl. kleiner Rechnungen
3. **OTA-Ökonomie** (Geschäftsmodelle, Netzwerkeffekte, Rate Parity, Billboard-Effekt)
4. **Customer Journey + Review-Management**
5. **GDS/Wholesale** — älter, aber prüfungsklassisch
6. **Trends + Datenschutz-Grundzüge** — Transferpunkte

## 2. Typische Aufgabentypen + Denkschritte

### Typ A: "Beschreiben Sie den Weg einer OTA-Buchung durch die Systeme"
**Muster-Datenfluss (auswendig können):**
1. Hotel pflegt Raten/Verfügbarkeiten im **PMS** (bzw. CRS bei Ketten)
2. **Channel Manager** synchronisiert Raten & Verfügbarkeit in Echtzeit an alle angeschlossenen Kanäle (OTA, GDS, IBE) — verhindert Überbuchung durch Doppelverkauf
3. Gast bucht auf der **OTA** → Buchung fließt über Channel Manager zurück ins PMS, Verfügbarkeit wird überall reduziert
4. **RMS** liest Buchungsdaten (Pickup, Pace) und schlägt neue Raten vor → zurück zu Schritt 1 (Regelkreis!)
5. Zahlung je Modell (Agency: Gast zahlt im Hotel, OTA stellt Kommission in Rechnung; Merchant: OTA kassiert, Hotel erhält Nettorate)
**Häufiger Fehler:** Channel Manager mit CRS verwechselt (CRS = zentrale Reservierungsdatenbank v. a. bei Ketten; CM = Synchronisations-Drehscheibe).

### Typ B: Kanalkostenvergleich rechnen
**Denkschritte:**
1. Pro Kanal: Bruttorate → − Kommission (OTA 15–25 %) bzw. − Ratenabschlag (Wholesale) → − Payment-/Transaktionskosten → − anteilige Akquisekosten (Direktkanal: Website, SEA, Metasearch-Klicks!) = **Nettoertrag pro Buchung**
2. Vergleich fair rechnen: Direktkanal ist NICHT gratis (Marketingkosten einrechnen — sonst Scheinvorteil)
3. Nicht-monetär ergänzen: Datenhoheit (Gastdaten fürs CRM nur direkt!), Stornoverhalten je Kanal, Reichweite in neuen Märkten (OTA-Stärke)
4. Empfehlung als Mix mit Steuerungsregel, nie "nur direkt" oder "nur OTA"
**Häufiger Fehler:** Direktkanal mit 0 € Kosten angesetzt; Kommission auf Netto- statt Bruttorate.

### Typ C: OTA-Abhängigkeit / Disintermediation diskutieren
**Argumentationsgerüst:**
- OTA-Nutzen: Reichweite, Conversion-Maschine, **Billboard-Effekt** (OTA-Sichtbarkeit erzeugt auch Direktbuchungen), variable statt fixe Marketingkosten
- OTA-Kosten/Risiken: Kommission drückt Marge, [[00_System/Konzept_Bibliothek|Netzwerkeffekte]] → Konzentration → Verhandlungsmacht, Gastbeziehung gehört der Plattform, Ranking-Logik intransparent
- Gegenstrategien des Hotels: Direktbuchungsvorteile (Loyalty-Rate, Upgrades — Rate-Parity-Rechtslage beachten: Bestpreisklauseln in DE kartellrechtlich gekippt), CRM/Newsletter, Metasearch-Präsenz, eigene IBE reibungslos
- Fazit mit Bedingung (Betriebstyp: Kettenhotel mit starker Marke vs. Privathotel in Nebenlage haben verschiedene optimale Mixe)

### Typ D: Review-Management-Fall
**Denkschritte:** Monitoring (alle Plattformen, Alerts) → Antwort-SOP: schnell, persönlich, dankend, konkret, Lösung + offline-Kanal anbieten; NIE Textbaustein-Spam, NIE defensiv → intern: Beschwerde-Ursachen-Statistik ([[02_Areas/Studium_HM/G9_Grundlagen_Hospitality_Management/Konzepte|G9 Beschwerdemanagement]]) → Kennzahl: Review-Score wirkt messbar auf Conversion/ADR-Spielraum. Bias-Hinweis aus [[02_Areas/Studium_HM/G8_Statistik_Datenkompetenz/Konzepte|G8]]: Wer bewertet, ist nicht repräsentativ.

### Typ E: Trend bewerten (KI-Chatbot, Self-Check-in …)
**Schema:** Was ist es (1 Satz Technik)? → Nutzenmechanik (Kosten ↓? Erlös ↑? Erlebnis ↑?) → Voraussetzungen (Datenqualität, Schnittstellen, Personalakzeptanz) → Risiken (DSGVO, Servicequalität, Abhängigkeit) → Empfehlung je Betriebstyp.

## 3. Häufige Fehlerquellen (vor Abgabe prüfen)

- [ ] Systeme korrekt getrennt: PMS (operativ im Haus) / CRS (zentrale Reservierung) / Channel Manager (Synchronisation) / RMS (Preisvorschläge) / IBE (eigene Buchungsstrecke)?
- [ ] Geldfluss Agency- vs. Merchant-Modell richtig?
- [ ] Direktkanalkosten ehrlich gerechnet?
- [ ] Billboard-Effekt und Disintermediation nicht verwechselt (Billboard: OTA→direkt-Spillover; Disintermediation: Ausschalten von Zwischenstufen)?
- [ ] Rate Parity: Rechtslage in DE erwähnt (enge/weite Bestpreisklauseln unzulässig — Stand im Skript prüfen)?
- [ ] Bei Trends: Nutzen-MECHANIK statt Buzzword?
- [ ] Standard-Endkontrolle [[03_Resources/Lernmethoden_Referenz|§6]]

## 4. Zeitplan

- **T−10 bis T−5:** Stack + Kanäle; Datenfluss-Diagramm 3× blind zeichnen; Kanalkosten-Rechnung üben
- **T−5 bis T−2:** [[02_Areas/Studium_HM/G10_Digitale_Technologien_Distribution/Beispielaufgaben|Beispielaufgaben]] + 2 eigene Diskussionsfragen schriftlich (OTA-Abhängigkeit, Trend-Bewertung)
- **T−1:** Systemtrennungs-Tabelle + Fehlerliste
