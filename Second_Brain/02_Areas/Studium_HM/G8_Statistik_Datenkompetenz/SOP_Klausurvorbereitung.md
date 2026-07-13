---
tags:
  - Uni
  - G8
  - SOP
typ: SOP
erstellt: 2026-07-13
---

# G8 Statistik — SOP Klausurvorbereitung

> Rechenfach mit Verfahrenswahl: Erst ERKENNEN (welches Verfahren?), dann rechnen. Der Erkennungs-Entscheidungsbaum in §2 ist das Herzstück dieser SOP.

## 1. Themenreihenfolge

1. **Skalenniveaus + Lage-/Streuungsmaße** — Fundament + sichere Punkte
2. **Normalverteilung (z-Transformation)** — Standardaufgabe, mechanisch lernbar
3. **Korrelation & einfache Regression** — Rechnung + Interpretationspunkte
4. **Bedingte Wahrscheinlichkeit** (Vierfeldertafel/Baum) — dankbar, wenn Schema sitzt
5. **Binomialverteilung** — Erkennungsmerkmale + Formel
6. **Konfidenzintervall & Testlogik** — Verständnisfragen
7. **Indexzahlen, Diagrammlesen** — Restpunkte

## 2. Verfahrenswahl-Entscheidungsbaum (VOR jeder Aufgabe durchlaufen)

**Frage 1: Skalenniveau der Daten?**
- Nominal (Kategorien ohne Ordnung: Zimmertyp, Herkunftsland) → nur Modus, Häufigkeiten, Chi²-Denken
- Ordinal (Ordnung ohne gleiche Abstände: Sterne, Zufriedenheit 1–5) → zusätzlich Median, Quartile, Spearman
- Metrisch (Intervall/Verhältnis: Preis, Umsatz, Nächte) → alles erlaubt: Mittelwert, Varianz, Pearson, Regression

**Frage 2: Beschreiben oder Schließen?** Nur vorliegende Daten zusammenfassen → deskriptiv. Aussage über Grundgesamtheit aus Stichprobe → induktiv (Konfidenzintervall/Test).

**Frage 3 (bei Wahrscheinlichkeit): Welche Verteilung?**
- Feste Anzahl n unabhängiger Ja/Nein-Versuche mit konstantem p → **Binomial** (Signalwörter: "von 20 Buchungen", "Trefferwahrscheinlichkeit")
- Stetige Größe, glockenförmig, μ und σ gegeben → **Normal** (Signalwörter: "normalverteilt mit …")

**Frage 4 (bei Zusammenhängen):** Beide metrisch → Pearson/lineare Regression; mind. eine ordinal → Spearman; Richtung der Vorhersage beachten (y aus x → Regression von y auf x).

## 3. Typische Aufgabentypen + Denkschritte

### Typ A: Deskriptive Auswertung
1. Daten ORDNEN (aufsteigend) — Pflicht vor Median/Quartilen
2. Lagemaße: Modus (häufigster), Median (Mitte; bei geradem n Mittel der beiden mittleren), arithm. Mittel
3. Streuung: Varianz s² = Σ(xᵢ−x̄)²/n (oder /(n−1) — Skript-Konvention prüfen!), s = √s², Variationskoeffizient v = s/x̄ (für Vergleiche verschiedener Einheiten!)
4. Ausreißer-Kommentar: Mittel reagiert empfindlich, Median robust → bei schiefen Verteilungen (Umsätze, Preise) Median berichten ([[03_Resources/Mathe_Grundlagen_Klausuren|Mathe §3]])

### Typ B: Normalverteilung
1. Skizze mit μ, gesuchtem Bereich schraffieren (ordnet das Denken, gibt oft Teilpunkte)
2. **z = (x − μ)/σ** — standardisieren
3. Tabelle: Φ(z) ablesen; Regeln: P(X > x) = 1 − Φ(z); P(a < X < b) = Φ(z_b) − Φ(z_a); Φ(−z) = 1 − Φ(z)
4. Rückwärtsaufgaben ("Welcher Wert wird von 5 % überschritten?"): z aus Tabelle → x = μ + z·σ

### Typ C: Bedingte Wahrscheinlichkeit
1. IMMER Vierfeldertafel oder Baum aufstellen — nie im Kopf
2. Notation klären: P(A|B) = P(A∩B)/P(B) — "gegeben B" = Zeile/Ast B als neue Basis
3. Bayes-Fälle (Test positiv → wirklich krank?): Baum vorwärts füllen, dann Pfade kombinieren; Basisraten ernst nehmen ([[00_System/Konzept_Bibliothek|Basisraten]])

### Typ D: Binomialverteilung
P(X = k) = C(n,k) · pᵏ · (1−p)ⁿ⁻ᵏ; "mindestens einmal" → Gegenereignis: 1 − P(X=0); E(X) = n·p; Var = n·p·(1−p). Anwendung No-Show/Überbuchung → [[02_Areas/Studium_HM/G8_Statistik_Datenkompetenz/Beispielaufgaben|Beispielaufgabe 3]].

### Typ E: Regression
1. b = Σ(xᵢ−x̄)(yᵢ−ȳ) / Σ(xᵢ−x̄)² ; a = ȳ − b·x̄ → ŷ = a + b·x
2. Interpretation b in Alltagssprache ("pro zusätzlichem Messetag steigen die Übernachtungen um b Einheiten") — gibt eigene Punkte!
3. r (Korrelation) und **R² = erklärter Varianzanteil** interpretieren
4. Pflicht-Vorbehalte: Korrelation ≠ Kausalität (Drittvariablen!); keine Extrapolation weit außerhalb des Datenbereichs

### Typ F: Testlogik (Verständnisfragen)
H0 = Skepsis-Hypothese ("kein Effekt"); Fehler 1. Art = H0 fälschlich verworfen (α); Fehler 2. Art = H0 fälschlich beibehalten; p-Wert = Wahrscheinlichkeit der (oder extremerer) Daten UNTER H0 — NICHT "Wahrscheinlichkeit, dass H0 stimmt" (Klassiker-Fangfrage!). p < α → H0 verwerfen.

## 4. Häufige Fehlerquellen (vor Abgabe prüfen)

- [ ] Skalenniveau geprüft, bevor Mittelwert auf Ordinaldaten losgelassen wurde?
- [ ] Daten vor Median/Quartilen sortiert?
- [ ] Varianz: richtige Skript-Konvention (n vs. n−1)?
- [ ] z-Wert-Vorzeichen und Tabellenregeln (Φ(−z))?
- [ ] "Mindestens/höchstens" über Gegenereignis gelöst?
- [ ] Renditen/Wachstum: geometrisches statt arithmetisches Mittel ([[03_Resources/Mathe_Grundlagen_Klausuren|Mathe §3]])?
- [ ] Regressionsrichtung (y auf x) korrekt?
- [ ] p-Wert korrekt interpretiert?
- [ ] Standard-Endkontrolle [[03_Resources/Lernmethoden_Referenz|§6]]

## 5. Zeitplan

- **T−14 bis T−7:** §1-Themen 1–5 mit je 4+ Aufgaben; parallel Formelsammlung SELBST schreiben (bestes Lernwerkzeug, auch wenn eine gestellt wird)
- **T−7 bis T−2:** Gemischte Sets (Interleaving!) — der Entscheidungsbaum §2 wird nur durch Mischen trainiert; Altklausur unter Zeit
- **T−1:** Entscheidungsbaum + Fehlerliste + Tabellenablesen üben
