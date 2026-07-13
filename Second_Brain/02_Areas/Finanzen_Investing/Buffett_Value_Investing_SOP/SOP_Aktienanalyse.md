---
tags:
  - Finanzen
  - Investing
  - SOP
typ: SOP
erstellt: 2026-07-13
status: aktiv
---

# SOP Aktienanalyse (Buffett-Stil)

> **Für jedes Modell:** Diese SOP wird VOLLSTÄNDIG und IN REIHENFOLGE abgearbeitet. Jeder Schritt endet mit einem dokumentierten Zwischenergebnis. Ein Nicht-Bestehen bei den Stopp-Kriterien beendet die Analyse sofort ("Pass" ist ein gültiges, gutes Ergebnis!). Format des Endberichts: wie [[02_Areas/Finanzen_Investing/Buffett_Value_Investing_SOP/Beispielanalysen|Beispielanalysen]]. Formeln/Schwellen: [[02_Areas/Finanzen_Investing/Buffett_Value_Investing_SOP/Kennzahlen_Referenz|Kennzahlen_Referenz]].

## Benötigte Daten (Checkliste vor Start)

Geschäftsberichte (10-K/Annual Report) der letzten 5–10 Jahre; daraus: Umsatz, EBIT, Jahresüberschuss, operativer Cashflow, Capex, Eigenkapital, Finanzverbindlichkeiten, Zinsaufwand, Aktienanzahl (verwässert), Dividenden/Rückkäufe. Aktueller Kurs & Marktkapitalisierung. KEINE Analystenkursziele, KEINE Forumsmeinungen als Datenquelle.

## Schritt 0 — Circle of Competence (Stopp-Kriterium)

Die 5 Fragen aus [[02_Areas/Finanzen_Investing/Buffett_Value_Investing_SOP/Philosophie|Philosophie §1]] schriftlich beantworten (je 1–2 Sätze). **Eine Frage unbeantwortbar → STOPP, Ergebnis "außerhalb Kompetenzkreis".**

## Schritt 1 — Geschäftsmodell in 5 Sätzen

Womit wird Geld verdient (Produkt, Preismodell)? Wer zahlt, wie oft (einmalig/wiederkehrend)? Kapitalintensität (braucht Wachstum viel Kapital? → asset-light bevorzugt, vgl. [[02_Areas/Studium_HM/G3_Grundlagen_Hospitality/Konzepte|G3 Betreibermodelle]])? Zyklik (Konjunkturabhängig? → [[02_Areas/Studium_HM/G6_Einfuehrung_VWL/Konzepte|G6]])? Konzentrationsrisiken (Großkunden, Lieferanten, Regulierung)?

## Schritt 2 — Moat-Prüfung (qualitativ + Zahlenbeweis)

1. Moat-Quelle(n) aus der Checkliste ([[02_Areas/Finanzen_Investing/Buffett_Value_Investing_SOP/Philosophie|Philosophie §2]]) benennen — mit konkretem Beleg (nicht "starke Marke", sondern "hat Preise 2019–2025 um X % p. a. erhöht bei stabilem Absatz")
2. **Zahlenbeweis:** ROIC ≥ 12 % in ≥ 8 von 10 Jahren UND Bruttomarge stabil/steigend? ([[02_Areas/Finanzen_Investing/Buffett_Value_Investing_SOP/Kennzahlen_Referenz|Referenz]])
3. Moat-Trend: wird der Graben breiter oder schmaler? (Marktanteile, Kundenbindung, Technologiebedrohung — [[00_System/Konzept_Bibliothek|Second-Order]]: Wer greift an, und warum scheitert er?)
**Stopp-Kriterium:** Kein belegbarer Moat → nur weiter, wenn Preis extrem unter Substanzwert (Ausnahmefall dokumentieren).

## Schritt 3 — Kennzahlen-Screening (10-Jahres-Sicht)

Tabelle aus der [[02_Areas/Finanzen_Investing/Buffett_Value_Investing_SOP/Kennzahlen_Referenz|Kennzahlen_Referenz]] füllen: ROE, ROIC, Bruttomarge, Nettomarge, Verschuldung (NetDebt/EBITDA, Zinsdeckung), Umsatz-/Gewinn-CAGR (geometrisch! → [[03_Resources/Mathe_Grundlagen_Klausuren|Mathe §3]]), Aktienanzahl-Trend (Verwässerung?), FCF-Conversion.
**Ampelregel:** Jede Kennzahl grün/gelb/rot nach Referenz-Schwellen. ≥ 2 rote Kern-Kennzahlen (ROIC, Verschuldung, FCF) → STOPP oder explizite Begründung, warum die Kennzahl hier irreführt (z. B. Sonderjahr).

## Schritt 4 — Management & Kapitalallokation

1. Insider-Eigentum? Vergütungslogik (an ROIC/FCF oder an Umsatzwachstum um jeden Preis gekoppelt)? ([[00_System/Konzept_Bibliothek|Anreize]])
2. Kapitalverwendung der letzten 5 Jahre nachrechnen: Anteile Capex / M&A / Dividende / Rückkäufe / Schuldentilgung. Rückkäufe zu hohen Kursen = Wertvernichtung; zu niedrigen = Wertschöpfung.
3. Aktionärsbriefe: werden Fehler zugegeben? Prognose-Treffsicherheit früherer Aussagen?

## Schritt 5 — Owner Earnings bestimmen

**Owner Earnings ≈ operativer Cashflow − Erhaltungs-Capex** (Buffett 1986). Praktisch:
1. Ø operativer Cashflow der letzten 3–5 Jahre (Ausreißer glätten)
2. Erhaltungs-Capex schätzen: Wenn nicht ausweisbar, Näherung = Ø-AfA ODER Gesamt-Capex × Erhaltungsanteil (konservativ: bei stabilen Firmen 60–80 % des Capex; Wachstumsanteil nur abziehen, wenn Wachstum auch wirklich in der Prognose honoriert wird!)
3. Plausibilisieren gegen Jahresüberschuss: OE dauerhaft ≪ Nettogewinn → Gewinnqualität anzweifeln (Bilanzpolitik? → [[02_Areas/Studium_HM/G4_Bilanzierung/Konzepte|G4: Gewinn ist Ansichtssache, Cash ist Fakt]])

## Schritt 6 — Grobe DCF-Bewertung (bewusst simpel, dreistufig konservativ)

Identische Mathematik wie [[02_Areas/Studium_HM/G5_Internes_Rechnungswesen_Finanzierung/Konzepte|G5 Kapitalwertmethode]]:
1. **Basis:** Owner Earnings aus Schritt 5
2. **Wachstumsphase (Jahre 1–10):** konservative Rate — Regel: min(historischer CAGR, 8 %) für Jahre 1–5, dann Hälfte davon für 6–10. Nie über 10 % ansetzen, egal was die Story sagt
3. **Terminal Value:** OE Jahr 10 × Terminal-Multiple 12–15 (entspricht ~2–3 % ewigem Wachstum) — konservativ wählen
4. **Diskontsatz:** 9–10 % Standard (Eigenkapital-Opportunitätskosten); 11–12 % bei erhöhter Unsicherheit. NICHT über niedrigen Diskontsatz "schönrechnen"
5. Barwerte summieren = **innerer Wert gesamt**; ÷ verwässerte Aktienzahl = **innerer Wert je Aktie**
6. **Szenario-Pflicht:** pessimistisch/Basis/optimistisch (Wachstum ± und Multiple ±) → [[00_System/Konzept_Bibliothek|Erwartungswert]]-Blick; entscheidend ist das PESSIMISTISCHE Szenario: Verliere ich auch dann kein Kapital?

## Schritt 7 — Sicherheitsmarge & Entscheidung

1. **Marge = 1 − Kurs / innerer Wert (Basis-Szenario)**
2. Entscheidungsregeln: **Kauf erst ab ≥ 30 % Marge** (Qualitätsfirma mit breitem Moat: 25 % vertretbar — dokumentieren). 0–25 %: Watchlist mit Wunschkurs. Negativ: kein Kauf, egal wie gut die Firma
3. Positionsgröße: nach Überzeugung UND Fehlertoleranz; keine Position, deren Totalverlust die Strategie gefährdet
4. **Inversions-Absatz (Pflicht):** "So verliere ich hier dauerhaft Geld: …" + warum akzeptabel/abgesichert

## Schritt 8 — Dokumentation & Wiedervorlage

Endbericht im Format der [[02_Areas/Finanzen_Investing/Buffett_Value_Investing_SOP/Beispielanalysen|Beispielanalysen]] ablegen (eigene Datei pro Analyse im Ordner). **Kaufthese in 3 Sätzen** fixieren (gegen sie wird später der Verkauf geprüft — [[02_Areas/Finanzen_Investing/Buffett_Value_Investing_SOP/Philosophie|Philosophie §4]]). Wiedervorlage: jährlich nach Geschäftsbericht ODER bei Thesen-relevanten News; NICHT bei bloßen Kursbewegungen.

## Fehlerliste (vor Abschluss jeder Analyse prüfen)

- [ ] Renditen/CAGR geometrisch gerechnet?
- [ ] Verwässerte Aktienzahl (nicht Basiszahl) verwendet?
- [ ] Nettoverschuldung vom Firmenwert korrekt behandelt (Enterprise-Denkweise bei Vergleich mit Marktkapitalisierung)?
- [ ] Zyklus-Peak-Gewinne als Basis vermieden (normalisieren! [[00_System/Konzept_Bibliothek|Regression zur Mitte]])?
- [ ] Terminal Value < 60 % des Gesamtwerts? (sonst hängt alles an der fernen Zukunft → Annahmen prüfen)
- [ ] Survivorship-/Story-Bias: Hätte ich dieselben Zahlen bei einer namenlosen Firma genauso bewertet? ([[02_Areas/Studium_HM/G8_Statistik_Datenkompetenz/Konzepte|G8 Datenkompetenz]])
- [ ] Stopp-Kriterien ehrlich angewandt (nicht "durchgewunken", weil die Idee gefällt)?
