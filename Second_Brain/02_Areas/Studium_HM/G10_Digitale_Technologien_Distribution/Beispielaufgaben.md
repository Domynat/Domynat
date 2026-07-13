---
tags:
  - Uni
  - G10
  - Beispielaufgaben
typ: FewShot
erstellt: 2026-07-13
---

# G10 Digitale Technologien & Distribution — Durchgerechnete Beispielaufgaben

## Aufgabe 1 — Kanalkostenvergleich

**Angabe:** Rate 150 €/Nacht auf allen Kanälen. OTA: 18 % Kommission. Direktkanal: Metasearch-Klickkosten und SEA verursachen durchschnittlich 12 € Akquisekosten pro Buchung, Payment 1 % der Rate. OTA-Payment übernimmt die OTA (Merchant). Ø-Aufenthalt 2 Nächte. Vergleichen Sie den Nettoertrag pro Buchung und nennen Sie zwei nicht-monetäre Kriterien.

**Lösung:**
1. Buchungswert = 2 × 150 = 300 €
2. **OTA:** 300 − (18 % × 300) = 300 − 54 = **246,00 €**
3. **Direkt:** 300 − 12 (Akquise) − 3 (1 % Payment) = **285,00 €**
4. Differenz: **39 € pro Buchung** zugunsten direkt — ABER nur solange die Direktbuchung inkrementell ist (wäre der Gast sowieso direkt gekommen, sind die 12 € Akquise teils Mitnahmeeffekt; kam er wegen des OTA-Listings → Billboard-Effekt relativiert die OTA-Kosten).
5. **Nicht-monetär:** (a) Datenhoheit: nur die Direktbuchung liefert vollständige Gastdaten fürs CRM (Wiederbuchung!); (b) Stornoverhalten: OTA-Buchungen stornieren häufiger (flexible Raten) → Forecast-Unsicherheit.
6. **Antwortsatz:** Direkt ist pro Buchung ~39 € wertvoller; Ziel ist aber nicht "OTA abschalten", sondern der Mix: OTA für Reichweite/Neukunden, konsequente Konversion zum Direktbucher ab dem ersten Aufenthalt.

## Aufgabe 2 — Datenfluss einer OTA-Buchung

**Angabe:** Beschreiben Sie systematisch, was zwischen Buchungsklick auf einer OTA und dem Check-in im Hotel technisch passiert (beteiligte Systeme, Datenflüsse, Zahlungsfluss im Agency-Modell).

**Lösung (Muster in 6 Schritten):**
1. **Vorher:** Hotel pflegt Raten/Verfügbarkeiten im PMS; der **Channel Manager** hält alle Kanäle synchron (letzte verfügbare Zimmer überall korrekt).
2. **Buchungsklick OTA:** OTA prüft Verfügbarkeit (Cache/Live), erzeugt Reservierung mit Gastdaten (Name, Aufenthalt, Rate, Konditionen).
3. **Rückfluss:** Buchung geht via Channel Manager ins **PMS** (Reservierungssatz angelegt); Verfügbarkeit sinkt; Channel Manager pusht den neuen Bestand an ALLE Kanäle → Doppelverkauf verhindert.
4. **RMS-Regelkreis:** Das RMS registriert den Pickup und passt ggf. Ratenempfehlungen an (starke Nachfrage → Rate ↑).
5. **Pre-Stay:** PMS/CRM versendet Bestätigung/Upselling; Online-Check-in optional.
6. **Zahlung (Agency):** Gast zahlt im Hotel (PMS-Rechnung); OTA fakturiert die Kommission (18 %) monatlich ans Hotel. *(Merchant-Kontrast in 1 Satz: OTA kassiert bei Buchung, Hotel erhält Nettorate — Cashflow und Gebührenlast verschieben sich.)*

## Aufgabe 3 — OTA-Abhängigkeit (Diskussionsaufgabe)

**Angabe:** Ein Privathotel (60 Zimmer, Stadtrand) erzielt 70 % seiner Buchungen über eine einzige OTA. Der Inhaber will "raus aus der Abhängigkeit" und alle OTA-Verträge kündigen. Beurteilen Sie.

**Lösung (Argumentationsgerüst):**
1. **Diagnose:** 70 % Ein-Kanal-Anteil = Klumpenrisiko (Kommissionserhöhung, Ranking-Änderung, Kontosperrung träfe existenziell) — Handlungsbedarf ja.
2. **Aber Radikalkündigung prüfen:** Stadtrandlage + schwache Eigenmarke → die OTA ersetzt hier die eigene Reichweite. Sofortkündigung = Auslastungseinbruch wahrscheinlich; die Fixkosten laufen weiter ([[02_Areas/Studium_HM/G3_Grundlagen_Hospitality/Konzepte|G3: Nichtlagerbarkeit + Fixkostendominanz]]).
3. **Besserer Weg (Stufenplan):** (a) Direktbuchervorteile aufbauen (Rate/Extras — rechtlich zulässig, Bestpreisklauseln in DE gekippt); (b) IBE & Website konversionsfähig machen, Metasearch-Präsenz; (c) Gäste im Haus systematisch zu Direktbuchern konvertieren (CRM, Newsletter, Wiederbucher-Code); (d) Kanalmix diversifizieren (zweite OTA, GDS via Repräsentanz, Firmenkunden); (e) OTA-Anteil als KPI mit Zielpfad (z. B. 70 → 45 % in 24 Monaten).
4. **Fazit:** Nicht kündigen, sondern steuern — Abhängigkeit senkt man über eigenen Kanalaufbau, nicht über Reichweitenverzicht.

## Aufgabe 4 — Review-Management

**Angabe:** 1-Sterne-Bewertung: "Zimmer bei Ankunft nicht fertig, an der Rezeption unfreundlich abgefertigt. Nie wieder!" Verfassen Sie eine professionelle Antwort und leiten Sie interne Maßnahmen ab.

**Lösung:**
1. **Antwort (Muster):** "Guten Tag [Name], danke, dass Sie sich die Zeit für dieses Feedback genommen haben — auch wenn der Anlass uns schmerzt. Dass Ihr Zimmer bei Anreise nicht bezugsfertig war und Sie sich an der Rezeption nicht ernst genommen fühlten, entspricht nicht unserem Anspruch. Wir haben den Vorfall mit dem Team der Schicht besprochen und unsere Zimmerfreigabe-Prozesse angepasst. Gern möchte ich persönlich verstehen, was schiefging: [Name, Funktion, direkte E-Mail]. Wir würden uns freuen, Ihnen zu zeigen, dass es besser geht."
   *Prinzipien: schnell, persönlich, konkret (beide Kritikpunkte gespiegelt), Verantwortung übernommen, Lösung + Offline-Kanal, kein Rechtfertigen.*
2. **Interne Maßnahmen:** Ursache 1 (Zimmer nicht fertig): Schnittstelle Housekeeping ↔ Front Office prüfen (Zimmerstatus in Echtzeit im PMS? Anreisespitzen vs. Reinigungsplanung → [[02_Areas/Studium_HM/G9_Grundlagen_Hospitality_Management/Beispielaufgaben|G9 GAP-Analyse]]). Ursache 2 (unfreundlich): Einzelfall-Feedback + Empowerment-Regel (Welche Sofort-Kompensation darf die Rezeption anbieten?). Tracking: Beschwerdekategorie-Statistik monatlich.

## Aufgabe 5 — Trend bewerten (Self-Check-in-Kiosk)

**Angabe:** Ein 3-Sterne-Stadthotel (starker Personalmangel an der Rezeption) erwägt Self-Check-in-Kioske. Bewerten Sie strukturiert.

**Lösung (Trend-Schema):**
1. **Technik (1 Satz):** Terminal/App übernimmt Identifikation, Meldeschein, Zahlung, Schlüsselausgabe; Anbindung ans PMS erforderlich.
2. **Nutzenmechanik:** Personalkosten ↓ (Spitzen entzerrt, Nachtbesetzung reduzierbar); Warteschlangen ↓ (Servicequalität bei Anreisespitzen ↑); 24/7-Anreise möglich (Umsatz aus Spätanreisen).
3. **Voraussetzungen:** PMS-Schnittstelle, Meldeschein-Konformität (BMG), Zahlungsintegration, Backup-Prozess bei Störung, Personal für Betreuung der Ausnahmen.
4. **Risiken:** Wegfall des persönlichen Kontaktpunkts (Upselling! Beziehungsaufbau); Akzeptanz älterer Segmente; DSGVO (Datenverarbeitung, Ausweisdaten); Investitions- vs. Einsparungsrechnung nötig ([[02_Areas/Studium_HM/G5_Internes_Rechnungswesen_Finanzierung/Konzepte|G5 Kapitalwert]]!).
5. **Empfehlung:** Bei akutem Personalmangel: ja, als OPTION neben besetztem Desk (hybrid), Upselling in die digitale Strecke verlagern (Upgrade-Angebot im Online-Check-in); Erfolgskontrolle über Wartezeit, Konversionsrate der Upgrades, Gästefeedback.
