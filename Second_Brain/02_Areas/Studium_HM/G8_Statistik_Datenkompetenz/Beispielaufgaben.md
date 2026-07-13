---
tags:
  - Uni
  - G8
  - Beispielaufgaben
typ: FewShot
erstellt: 2026-07-13
---

# G8 Statistik — Durchgerechnete Beispielaufgaben

## Aufgabe 1 — Deskriptive Auswertung

**Angabe:** Bon-Umsätze von 8 Restaurantgästen (€): 22, 18, 25, 95, 20, 24, 19, 21. Berechnen Sie Mittelwert, Median, Standardabweichung (Grundgesamtheits-Konvention /n) und beurteilen Sie, welches Lagemaß hier berichtet werden sollte.

**Lösung:**
1. Sortieren: 18, 19, 20, 21, 22, 24, 25, 95
2. Mittel: x̄ = 244/8 = **30,50 €**
3. Median: n=8 gerade → (21+22)/2 = **21,50 €**
4. Varianz: Abweichungsquadrate: (18−30,5)²+…+(95−30,5)² = 156,25+132,25+110,25+90,25+72,25+42,25+30,25+4.160,25 = 4.794 → s² = 4.794/8 = 599,25 → **s = 24,48 €**
5. **Beurteilung:** Der Ausreißer 95 € zieht das Mittel weit über den typischen Bon (7 von 8 Werten < 26 €). Verteilung rechtsschief → **Median berichten**; Mittel nur mit Ausreißer-Hinweis. *(Merkposten: erst sortieren; Konvention n vs. n−1 laut Skript.)*

## Aufgabe 2 — Normalverteilung (z-Transformation)

**Angabe:** Die Aufenthaltsdauer im Frühstücksrestaurant sei normalverteilt mit μ = 45 Min, σ = 10 Min. (a) Anteil der Gäste über 60 Min? (b) Welche Dauer wird nur von 5 % der Gäste überschritten? (Φ(1,5) = 0,9332; z₀,₉₅ = 1,645)

**Lösung:**
1. (a) z = (60−45)/10 = 1,5 → P(X > 60) = 1 − Φ(1,5) = 1 − 0,9332 = **6,68 %**
2. (b) Gesucht x mit P(X > x) = 5 % → z = 1,645 → x = μ + z·σ = 45 + 16,45 = **61,45 Min**
3. **Antwortsatz:** Knapp 7 % frühstücken länger als eine Stunde; die "Top-5 %-Grenze" liegt bei ca. 61 Minuten — relevant für Kapazitätsplanung der Sitzplätze. *(Skizze mit schraffiertem Rechtsbereich anfertigen!)*

## Aufgabe 3 — Binomialverteilung (No-Shows/Überbuchung)

**Angabe:** Erfahrungsgemäß erscheinen 10 % der Buchungen nicht (unabhängig). Das Hotel hat 20 Buchungen für 19 Zimmer angenommen. Mit welcher Wahrscheinlichkeit reichen die Zimmer NICHT (d. h. alle 20 erscheinen)?

**Lösung:**
1. Verfahrenswahl: n = 20 unabhängige Ja/Nein-Versuche ("erscheint"), p(erscheinen) = 0,9 → Binomial.
2. Überbuchungsproblem tritt nur ein, wenn X = 20 erscheinen:
   P(X = 20) = C(20,20) · 0,9²⁰ · 0,1⁰ = 0,9²⁰ = **12,16 %**
3. **Antwortsatz:** In gut 12 % der Fälle müsste ein Gast "ausgewalkt" werden — für die Praxis zu hoch; entweder nur 20 Buchungen auf 20 Zimmer oder Walking-Kosten (Ersatzhotel, Kulanz) gegen den Zusatzerlös abwägen ([[00_System/Konzept_Bibliothek|Erwartungswert]]-Rechnung!). → Genau so kalkuliert Revenue Management Überbuchung: [[02_Areas/Studium_HM/G9_Grundlagen_Hospitality_Management/Konzepte|G9]].

## Aufgabe 4 — Bedingte Wahrscheinlichkeit (Vierfeldertafel)

**Angabe:** 60 % der Gäste sind Geschäftsreisende (G), 40 % Urlauber (U). 80 % der Geschäftsreisenden buchen direkt, von den Urlaubern nur 30 %. Ein zufällig gewählter Gast hat direkt gebucht — mit welcher Wahrscheinlichkeit ist er Geschäftsreisender?

**Lösung:**
1. Vierfeldertafel (auf 100 Gäste):

| | direkt | OTA/sonstig | Σ |
|---|---|---|---|
| G | 48 | 12 | 60 |
| U | 12 | 28 | 40 |
| Σ | 60 | 40 | 100 |

2. Gesucht P(G|direkt) = 48/60 = **80 %**
3. **Antwortsatz:** Vier von fünf Direktbuchern sind Geschäftsreisende — die Direktbuchungsquote ist segmentgetrieben; Marketingbudget für Direktkanal auf Business-Zielgruppe ausrichten ([[02_Areas/Studium_HM/G10_Digitale_Technologien_Distribution/Konzepte|G10 Kanalsteuerung]]). *(Merkposten: Tafel schlägt Kopfrechnen; Bayes steckt implizit drin.)*

## Aufgabe 5 — Korrelation & Regression

**Angabe:** 5 Monate: Messetage x und verkaufte Zimmernächte y (in 100): (2; 30), (4; 34), (6; 41), (8; 44), (10; 51). Bestimmen Sie die Regressionsgerade und R², interpretieren Sie.

**Lösung:**
1. x̄ = 6; ȳ = 40
2. Abweichungsprodukte: (−4)(−10)+(−2)(−6)+(0)(1)+(2)(4)+(4)(11) = 40+12+0+8+44 = 104
   Σ(xᵢ−x̄)² = 16+4+0+4+16 = 40 → **b = 104/40 = 2,6**
3. a = ȳ − b·x̄ = 40 − 15,6 = **24,4** → ŷ = 24,4 + 2,6x
4. Σ(yᵢ−ȳ)² = 100+36+1+16+121 = 274; r = 104/√(40·274) = 104/104,69 = 0,9934 → **R² ≈ 0,987**
5. **Interpretation:** Pro zusätzlichem Messetag steigen die Zimmernächte um ~260 (2,6 × 100); Basisniveau ohne Messen ~2.440 Nächte; 98,7 % der Streuung der Nachfrage wird durch Messetage erklärt. **Vorbehalte (Pflicht):** n = 5 ist winzig; Korrelation ≠ Kausalität (Saisonalität als Drittvariable denkbar); keine Extrapolation auf 20 Messetage.
