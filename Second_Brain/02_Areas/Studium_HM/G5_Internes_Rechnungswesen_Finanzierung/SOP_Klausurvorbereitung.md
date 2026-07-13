---
tags:
  - Uni
  - G5
  - SOP
typ: SOP
erstellt: 2026-07-13
---

# G5 KLR/Finanzierung — SOP Klausurvorbereitung

> Rechenfach: 20/80-Regel (Theorie/Üben). Zinsmechanik: [[03_Resources/Mathe_Grundlagen_Klausuren|Mathe_Grundlagen_Klausuren]] §2.

## 1. Themenreihenfolge

1. **Deckungsbeitragsrechnung + Break-even** — höchste Punktdichte, wenig Stoff
2. **Zuschlagskalkulation + BAB** — mechanisch, gut trainierbar
3. **Kapitalwertmethode (+ interner Zinsfuß, Annuität)** — Kernrechnung Finanzteil
4. **Abgrenzung Aufwand/Kosten + kalkulatorische Kosten** — Theoriefragen mit Rechenanteil
5. **Leverage-Effekt** — kleine Rechnung, große Erklärpunkte
6. **Statische Investitionsverfahren, Liquiditätsgrade, Finanzierungsregeln, Finanzierungsformen** — Breitenwissen

## 2. Typische Aufgabentypen + Denkschritte

### Typ A: Deckungsbeitrags-Entscheidung (Zusatzauftrag, Sortiment, Preisuntergrenze)
**Denkschritte:**
1. Kosten in **fix / variabel** trennen (Angabe markieren!). Bei Unsicherheit fragen: "Fällt die Position weg, wenn eine Einheit weniger produziert wird?" → nein = fix.
2. **db (Stück) = Preis − variable Stückkosten**; DB gesamt = db × Menge.
3. Entscheidungsregeln anwenden:
   - Zusatzauftrag bei freier Kapazität: annehmen, wenn **Preis > kv** (Fixkosten sind kurzfristig irrelevant — sie fallen sowieso an, [[00_System/Konzept_Bibliothek|Sunk-Cost-Logik]])
   - **Kurzfristige Preisuntergrenze = kv**; langfristige = Vollkosten (kv + anteilige Fixkosten)
   - Engpass: Rangfolge nach **db pro Engpasseinheit** (nicht nach db!) — [[00_System/Konzept_Bibliothek|Engpassdenken]]
   - Produkt eliminieren nur, wenn DB < 0 (positiver DB deckt Fixkosten mit, auch wenn "Verlust" nach Vollkosten)
4. Antwortsatz mit Bedingung ("… solange freie Kapazität besteht und keine Preisansteckung auf Stammgeschäft droht").
**Häufiger Fehler:** Fixkosten in kurzfristige Entscheidungen einrechnen; beim Engpass nach absolutem db sortieren.

### Typ B: Break-even
**Denkschritte:** x_BE = **Kf / (p − kv)** → Menge AUFRUNDEN; Umsatz-BE = x_BE × p; Sicherheitsstrecke = (Ist-Menge − BE-Menge)/Ist-Menge. Grafik: Erlösgerade vs. Gesamtkostengerade, Schnittpunkt beschriften.

### Typ C: BAB + Zuschlagskalkulation
**Denkschritte:**
1. Gemeinkosten laut Verteilungsschlüssel auf Kostenstellen (Material/Fertigung/Verwaltung/Vertrieb) verteilen → Spaltensummen.
2. **Zuschlagssätze:** MGK % = MGK/Materialeinzelkosten; FGK % = FGK/Fertigungslöhne; VwGK/VtGK % = auf **Herstellkosten des Umsatzes**.
3. Kalkulationsschema (auswendig): MEK + MGK + FEK + FGK = **Herstellkosten** + VwGK + VtGK = **Selbstkosten** + Gewinnzuschlag = Barverkaufspreis (+ Skonto/Rabatt-Aufschläge im Hundert!) = Listenpreis.
4. Rückwärtskalkulation: vom Listenpreis rückwärts — Skonto/Rabatt "**im Hundert**" herausrechnen ([[03_Resources/Mathe_Grundlagen_Klausuren|§1]]).
**Häufiger Fehler:** Verwaltungs-/Vertriebszuschlag auf Herstellkosten der PRODUKTION statt des UMSATZES; vermehrter/verminderter Grundwert verwechselt.

### Typ D: Kapitalwert (dynamische Investitionsrechnung)
**Denkschritte:**
1. Zahlungsreihe aufstellen: t0 = −Anschaffung; t1…tn = Einzahlungsüberschüsse; tn zusätzlich + Restwert.
2. Jeden Betrag abzinsen: Barwert = Zahlung / (1+i)^t — Abzinsungsfaktoren notfalls einzeln ausrechnen.
3. **C0 = Σ Barwerte − Investition.** C0 > 0 → vorteilhaft (verzinst sich über Kalkulationszins hinaus); Vergleich: höchster C0 gewinnt.
4. Interner Zinsfuß = i, bei dem C0 = 0 (Interpretation: Effektivverzinsung); Annuität = C0 × Wiedergewinnungsfaktor **WGF = i·(1+i)ⁿ / ((1+i)ⁿ − 1)** (übersetzt C0 in gleichmäßige Periodenbeträge).
**Häufiger Fehler:** Restwert vergessen; Investition versehentlich abgezinst; Zins nicht als Dezimalzahl.

### Typ E: Leverage-Effekt
**Denkschritte:**
1. Formel: **r_EK = r_GK + (r_GK − i) × FK/EK**
2. Prüfen: r_GK > i? → Hebel wirkt positiv (mehr FK steigert EK-Rendite); r_GK < i → Hebel schlägt negativ um.
3. IMMER die Risiko-Kehrseite nennen: steigender Verschuldungsgrad hebelt auch Verluste; r_GK ist unsicher, i ist vertraglich fix.
**Häufiger Fehler:** FK/EK invertiert; Bedingung r_GK > i nicht genannt (gibt die Erklärpunkte!).

### Typ F: Abgrenzungsrechnung (Aufwand ↔ Kosten)
**Denkschritte:** Vier Fälle prüfen: neutraler Aufwand (betriebsfremd/außerordentlich/periodenfremd → keine Kosten), Zweckaufwand = Grundkosten, **Anderskosten** (anders bewertet: kalk. AfA zu Wiederbeschaffungswerten), **Zusatzkosten** (ohne Aufwand: kalk. Unternehmerlohn, kalk. EK-Zinsen, kalk. Miete) — Begründung: [[00_System/Konzept_Bibliothek|Opportunitätskosten]].

## 3. Häufige Fehlerquellen (vor Abgabe prüfen)

- [ ] Fix/variabel-Trennung dokumentiert (nicht im Kopf)?
- [ ] Engpass: nach db/Engpasseinheit sortiert?
- [ ] BE-Menge aufgerundet?
- [ ] Zuschlagsbasis je Satz korrekt (MEK, FL, HK des Umsatzes)?
- [ ] Kapitalwert: t0 nicht abgezinst, Restwert in tn?
- [ ] Leverage: Bedingung + Risiko genannt?
- [ ] Kalkulatorische ≠ bilanzielle Kosten getrennt gehalten (Brücke zu [[02_Areas/Studium_HM/G4_Bilanzierung/Konzepte|G4]])?
- [ ] Einheiten €, %, Stück an jedem Ergebnis + Antwortsatz?
- [ ] Standard-Endkontrolle [[03_Resources/Lernmethoden_Referenz|§6]]

## 4. Zeitplan

- **T−14 bis T−7:** Themen 1–4 aus §1, je 4+ Aufgaben nach den [[02_Areas/Studium_HM/G5_Internes_Rechnungswesen_Finanzierung/Beispielaufgaben|Beispielmustern]]
- **T−7 bis T−2:** Gemischte Sets KLR+Finanzierung unter Zeit (Interleaving); Altklausur komplett
- **T−1:** Formelblatt aus dem Kopf reproduzieren (Active Recall), Fehlerliste §3
