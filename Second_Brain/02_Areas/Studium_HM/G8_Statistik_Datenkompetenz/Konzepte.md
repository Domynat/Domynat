---
tags:
  - Uni
  - G8
  - Konzepte
typ: Konzeptsammlung
erstellt: 2026-07-13
---

# G8 Statistik — Kernkonzepte

## Grundbegriffe

**Grundgesamtheit vs. Stichprobe;** Merkmalsträger, Merkmal, Ausprägung. **Skalenniveaus** (bestimmen zulässige Rechenoperationen — Kernkonzept!): nominal (nur =/≠), ordinal (+ Rangordnung), metrisch: intervall (+ Differenzen; kein echter Nullpunkt, z. B. °C) / verhältnis (+ Quotienten, echter Nullpunkt: Preis, Umsatz).

**Häufigkeiten:** absolut, relativ, kumuliert; Klassierung stetiger Daten (Klassenbreite beachten — Histogramm: FLÄCHE proportional zur Häufigkeit).

## Lage- und Streuungsmaße

**Lage:** Modus (ab nominal), Median (ab ordinal; robust), arithmetisches Mittel (metrisch; ausreißerempfindlich), **geometrisches Mittel** für Wachstumsraten ([[03_Resources/Mathe_Grundlagen_Klausuren|Mathe §3]] — Klausur- UND Investing-relevant), gewogenes Mittel (Gewichte!).

**Streuung:** Spannweite, Interquartilsabstand (robust, Boxplot!), Varianz/Standardabweichung (Einheit! s hat Einheit der Daten, s² quadriert), **Variationskoeffizient v = s/x̄** (dimensionslos → Vergleich Preisstreuung Hotel A vs. B trotz unterschiedlicher Niveaus).

**Boxplot lesen/zeichnen:** Median, Q1/Q3-Box, Whisker, Ausreißer — Schiefe auf einen Blick (Median nicht mittig → schief).

**Schiefe-Faustregel:** rechtsschief (viele kleine, wenige riesige Werte — Einkommen, Bon-Umsätze): Modus < Median < Mittel.

## Zusammenhang

**Kovarianz/Korrelation (Pearson r):** nur LINEARE Zusammenhänge, −1…+1; r = 0 heißt nicht "kein Zusammenhang" (nur kein linearer). **Spearman:** Rangkorrelation für Ordinaldaten/Ausreißerrobustheit.

**Einfache lineare Regression:** ŷ = a + b·x (Kleinste Quadrate); b = Steigung (Interpretation in Sachzusammenhang!), a = Achsenabschnitt (nur sinnvoll, wenn x=0 im Datenbereich), **R² = r² = Anteil erklärter Varianz**. Grenzen: Ausreißer, Extrapolation, Scheinkorrelation durch Drittvariablen (Eisverkauf ↔ Ertrinkungsfälle: Sommer!).

**Indexzahlen:** Preisindex nach Laspeyres (Basisjahr-Warenkorb — so rechnet der VPI → [[02_Areas/Studium_HM/G6_Einfuehrung_VWL/Konzepte|G6 Inflation]]) vs. Paasche (Berichtsjahr-Korb); Umbasierung, Verkettung in Grundzügen.

## Wahrscheinlichkeitsrechnung

**Grundbegriffe:** Laplace (günstige/mögliche), Additionssatz P(A∪B) = P(A)+P(B)−P(A∩B), Gegenereignis P(Ā) = 1−P(A), Unabhängigkeit: P(A∩B) = P(A)·P(B).

**Bedingte Wahrscheinlichkeit:** P(A|B) = P(A∩B)/P(B); Werkzeuge: Baumdiagramm (Pfadregeln: multiplizieren entlang, addieren über Pfade), Vierfeldertafel; **Satz von Bayes** (Richtung umkehren) — Intuitionsfalle Basisrate: seltene Ereignisse bleiben auch nach positivem "Test" oft unwahrscheinlich ([[00_System/Konzept_Bibliothek|Basisraten]]).

**Kombinatorik-Minimum:** Binomialkoeffizient C(n,k) = n!/(k!(n−k)!) — "Anzahl Möglichkeiten, k aus n auszuwählen".

**Zufallsvariable:** Erwartungswert E(X) = Σ xᵢpᵢ ([[00_System/Konzept_Bibliothek|Erwartungswert]] als Denkmodell), Varianz. Linearität: E(aX+b) = aE(X)+b; Var(aX+b) = a²Var(X).

**Binomialverteilung B(n,p):** n unabhängige Versuche, konstantes p, X = Trefferzahl. P(X=k) = C(n,k)pᵏ(1−p)ⁿ⁻ᵏ; E = np; Var = np(1−p). Hotel-Anwendungen: No-Shows, Beschwerdequoten, Conversion.

**Normalverteilung N(μ,σ²):** stetig, symmetrisch; **z-Transformation z = (x−μ)/σ** führt alles auf Standardnormal-Tabelle zurück. Merkwerte: μ±1σ ≈ 68 %, ±2σ ≈ 95 %, ±3σ ≈ 99,7 %. **Zentraler Grenzwertsatz** (Idee): Summen/Mittelwerte vieler unabhängiger Einflüsse → näherungsweise normal — deshalb ist die NV überall.

## Schließende Statistik (Grundlogik)

**Punktschätzung vs. Intervallschätzung:** Konfidenzintervall x̄ ± z·(σ/√n) — Breite sinkt mit √n (Vervierfachung der Stichprobe halbiert das Intervall!); Interpretation: Verfahren fängt den wahren Wert in 95 % der Wiederholungen ein (nicht: "wahrer Wert liegt mit 95 % W. im Intervall" — Feinheit, die Dozenten gern prüfen).

**Hypothesentest:** H0 (kein Effekt/Status quo) vs. H1; Signifikanzniveau α = akzeptierte Irrtumswahrscheinlichkeit für Fehler 1. Art; **p-Wert** = Wahrscheinlichkeit so extremer Daten unter H0. Entscheidung: p < α → verwerfen. Fehler 2. Art (β) und Power (1−β) begrifflich. **Signifikant ≠ bedeutsam** (großes n macht Mini-Effekte signifikant — Effektgröße anschauen).

## Datenkompetenz (kritisches Lesen)

**Manipulations-Checkliste für Diagramme:** y-Achse abgeschnitten? Ungleiche Klassenbreiten? 3D-/Flächeneffekte übertreiben? Selektiver Zeitraum? Absolute vs. relative Zahlen vermischt? **Survivorship Bias** (nur Überlebende in den Daten — Investing-Klassiker: Fondsstatistiken!), Selektionsbias bei Bewertungen (wer bewertet überhaupt? → [[02_Areas/Studium_HM/G10_Digitale_Technologien_Distribution/Konzepte|G10 Reviews]]).
