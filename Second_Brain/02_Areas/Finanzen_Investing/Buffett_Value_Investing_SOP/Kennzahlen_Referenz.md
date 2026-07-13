---
tags:
  - Finanzen
  - Investing
  - Referenz
typ: Referenz
erstellt: 2026-07-13
---

# Kennzahlen-Referenz (Value Investing)

> **Nutzung:** Formel → Datenquelle → Ampel-Schwellen → Fallstricke. Die Schwellen sind MEINE Konventionen für die [[02_Areas/Finanzen_Investing/Buffett_Value_Investing_SOP/SOP_Aktienanalyse|SOP_Aktienanalyse]]; branchenspezifische Abweichungen immer dokumentieren. BWL-Grundlagen: [[02_Areas/Studium_HM/G1_Einfuehrung_ABWL/Konzepte|G1]], [[02_Areas/Studium_HM/G5_Internes_Rechnungswesen_Finanzierung/Konzepte|G5]].

## Rentabilität

### ROE (Return on Equity, Eigenkapitalrendite)
**Formel:** Jahresüberschuss / Ø-Eigenkapital
**Ampel:** 🟢 ≥ 15 % nachhaltig · 🟡 10–15 % · 🔴 < 10 % dauerhaft
**Fallstricke:** ROE ist HEBELBAR — hohe Verschuldung pumpt ROE auf ([[02_Areas/Studium_HM/G5_Internes_Rechnungswesen_Finanzierung/Konzepte|G5 Leverage]]). Immer zusammen mit Verschuldung lesen; Aktienrückkäufe schrumpfen das EK und verzerren nach oben. Deshalb ROIC als Königskennzahl.

### ROIC (Return on Invested Capital)
**Formel:** NOPAT / investiertes Kapital = EBIT × (1 − Steuersatz) / (Eigenkapital + zinstragendes Fremdkapital − Überschuss-Cash)
**Ampel:** 🟢 ≥ 15 % · 🟡 10–15 % · 🔴 < 10 % (unter Kapitalkosten = Wertvernichtung)
**Interpretation:** Wie viel verdient das GESCHÄFT auf das gesamte eingesetzte Kapital, unabhängig von der Finanzierung — der Zahlenbeweis für einen Moat, wenn über 8–10 Jahre hoch und stabil.

### Margen
**Bruttomarge** = Bruttoergebnis/Umsatz (Preissetzungsmacht-Indikator; stabil/steigend = 🟢); **EBIT-Marge** (operative Effizienz; Vergleich nur innerhalb Branche); **Nettomarge** = JÜ/Umsatz. **Fallstrick:** Ein Margen-REKORDJAHR ist keine Basis — normalisieren ([[00_System/Konzept_Bibliothek|Regression zur Mitte]]).

## Bilanzqualität / Verschuldung

### Net Debt / EBITDA
**Formel:** (Finanzverbindlichkeiten − Zahlungsmittel) / EBITDA
**Ampel:** 🟢 < 1,5 · 🟡 1,5–3 · 🔴 > 3 (Ausnahme regulierte, stabile Cashflows — dokumentieren)

### Zinsdeckungsgrad
**Formel:** EBIT / Zinsaufwand · **Ampel:** 🟢 > 10× · 🟡 5–10× · 🔴 < 5×

### Eigenkapitalquote
**Formel:** EK / Bilanzsumme · Kontextgröße (Branchen streuen stark); Warnsignal: NEGATIVES EK durch schuldenfinanzierte Rückkäufe → gesondert prüfen.
**Fallstricke:** Leasingverbindlichkeiten zählen zur Verschuldung (IFRS 16 bilanziert sie ohnehin); Pensionsverpflichtungen prüfen. Goodwill-Anteil am EK beachten ([[02_Areas/Studium_HM/G4_Bilanzierung/Konzepte|G4]]: Bilanzwerte ≠ Marktwerte — in beide Richtungen).

## Cashflow & Gewinnqualität

### Owner Earnings
**Formel (Arbeitsdefinition):** operativer Cashflow − Erhaltungs-Capex (Details/Schätzverfahren: [[02_Areas/Finanzen_Investing/Buffett_Value_Investing_SOP/SOP_Aktienanalyse|SOP Schritt 5]])
**Nutzung:** Bewertungsbasis der DCF; ehrlicher als der Buchgewinn.

### FCF-Conversion
**Formel:** Free Cashflow / Jahresüberschuss (FCF = operativer CF − Gesamt-Capex)
**Ampel:** 🟢 > 80 % nachhaltig · 🟡 50–80 % · 🔴 < 50 % (Gewinne kommen nicht als Cash an: Working-Capital-Aufbau? aggressive Umsatzrealisierung?)

### Capex-Intensität
**Formel:** Capex / Umsatz — hohe Intensität = kapitalhungriges Geschäft; asset-light bevorzugt ([[02_Areas/Studium_HM/G3_Grundlagen_Hospitality/Konzepte|G3: Management-/Franchise-Modelle der Hotelketten als Beispiel]]).

## Wachstum

### CAGR (Umsatz, Gewinn, OE)
**Formel:** (Endwert/Anfangswert)^(1/n) − 1 — **geometrisch**, nie arithmetisch ([[03_Resources/Mathe_Grundlagen_Klausuren|Mathe §3]])
**Ampel (Umsatz-CAGR 10 J):** 🟢 ≥ 5 % · 🟡 0–5 % · 🔴 schrumpfend — Wachstum ist nur wertvoll bei ROIC > Kapitalkosten!

### Aktienanzahl (verwässert)
**Trend über 10 Jahre:** 🟢 sinkend (Rückkäufe) · 🟡 stabil · 🔴 > 2 %/Jahr Verwässerung (Stock-Comp-Maschine — Aktionär zahlt die Gehälter)

## Bewertung

### KGV (P/E)
**Formel:** Kurs / Gewinn je Aktie — Schnelltest, KEINE Entscheidungsgrundlage. Fallstricke: Zyklus-Tief-KGV bei Peak-Gewinnen ist eine Falle; Einmaleffekte bereinigen.

### FCF-Rendite (Owner-Earnings-Yield)
**Formel:** OE je Aktie / Kurs (bzw. OE / Marktkapitalisierung)
**Daumenregel:** 🟢 ≥ 6–7 % bei moatstarker Qualität interessant · vergleichen mit sicherer Alternativrendite (Anleihen) + Risikoprämie

### DCF / innerer Wert
→ vollständiges Verfahren in [[02_Areas/Finanzen_Investing/Buffett_Value_Investing_SOP/SOP_Aktienanalyse|SOP Schritt 6]]; Parameter-Konventionen: Diskont 9–12 %, Wachstum gedeckelt (max. 8 %/halbiert ab Jahr 6), Terminal-Multiple 12–15.

### Sicherheitsmarge
**Formel:** 1 − Kurs / innerer Wert · **Regel:** Kauf ≥ 30 % (25 % bei breitem Moat, dokumentiert) — [[02_Areas/Finanzen_Investing/Buffett_Value_Investing_SOP/Philosophie|Philosophie §3]]

## Schnell-Screen (Reihenfolge im Alltag)

1. ROIC 10 Jahre ≥ 12 %? → sonst Pass
2. NetDebt/EBITDA < 3? → sonst Pass
3. FCF-Conversion > 70 %? → sonst tiefer graben
4. Verstehe ich das Geschäft (5 Fragen)? → sonst Pass
5. Erst DANN Zeit in die volle [[02_Areas/Finanzen_Investing/Buffett_Value_Investing_SOP/SOP_Aktienanalyse|SOP]] investieren — der Screen schützt die Zeit, nicht das Depot.
