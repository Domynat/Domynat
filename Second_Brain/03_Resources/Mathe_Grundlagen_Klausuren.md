---
tags:
  - Resource
  - Mathe
  - Uni
typ: Referenz
erstellt: 2026-07-13
---

# Mathe-Grundlagen für Klausuren (G4, G5, G6, G8, Investing)

> **Zweck:** Die Rechen-Basics, an denen in Klausuren die meisten "Schlamperei-Punkte" verloren gehen. Wird von mehreren Modulen verlinkt.

## 1. Prozentrechnung — die drei Fragen

| Frage | Formel | Beispiel |
|---|---|---|
| Prozentwert: "Wie viel sind 19 % von 200 €?" | W = G × p | 200 × 0,19 = **38 €** |
| Prozentsatz: "38 € sind wie viel % von 200 €?" | p = W / G | 38/200 = **19 %** |
| Grundwert: "38 € sind 19 % — wovon?" | G = W / p | 38/0,19 = **200 €** |

**Klassische Falle — Umsatzsteuer herausrechnen:** Bruttopreis 119 € enthält 19 % USt. Die USt ist **NICHT** 119 × 0,19! Netto = 119 / 1,19 = 100 €; USt = 19 €. Merksatz: *Vom Brutto wird geteilt, aufs Netto wird geschlagen.*

**Prozentpunkte vs. Prozent:** Steigt eine Quote von 20 % auf 25 %, sind das +5 **Prozentpunkte**, aber +25 **Prozent** (5/20). In Klausuren immer die Einheit dazuschreiben.

## 2. Auf-/Abzinsung (G5, Investing)

- Aufzinsen: Endwert = K₀ × (1+i)ⁿ — "Was ist heutiges Geld später wert?"
- Abzinsen: Barwert = Kₙ / (1+i)ⁿ — "Was ist späteres Geld heute wert?"
- **72er-Regel:** Verdopplungszeit ≈ 72 / Zinssatz in %. (8 % → ~9 Jahre)
- Ewige Rente: Barwert = jährliche Zahlung / i. (1.000 €/Jahr bei 5 % → 20.000 €)

**Falle:** Zinssatz als Dezimalzahl in die Formel (5 % → 0,05), Perioden und Zinssatz müssen zusammenpassen (Monatszins ↔ Monate).

## 3. Durchschnitte richtig wählen (G8)

| Situation | richtiges Mittel |
|---|---|
| Normale Beobachtungswerte | arithmetisches Mittel |
| Wachstumsraten/Renditen über Zeit | **geometrisches Mittel**: (∏(1+rᵢ))^(1/n) − 1 |
| Geschwindigkeiten/Verhältnisse bei gleicher Bezugsgröße | harmonisches Mittel |
| Ausreißer vorhanden, "typischer Wert" gesucht | Median |

**Falle:** +50 % dann −50 % ist im Schnitt NICHT 0 %: 1,5 × 0,5 = 0,75 → −13,4 % p. a. geometrisch. Renditen nie arithmetisch mitteln.

## 4. Lineare Funktionen & Schnittpunkte (G5, G6)

- Gerade: y = a + b·x (a = Achsenabschnitt/Fixkosten, b = Steigung/variable Stückkosten)
- Schnittpunkt zweier Geraden: gleichsetzen, nach x auflösen. (Break-even: Erlös = Kosten → p·x = Kf + kv·x → **x = Kf / (p − kv)**)
- Steigung aus zwei Punkten: b = (y₂−y₁)/(x₂−x₁)

## 5. Rundung & Darstellung in Klausuren

1. **Zwischenergebnisse ungerundet weiterrechnen** (Speicher des Taschenrechners), erst Endergebnis runden — sonst Folgefehler.
2. Geldbeträge: 2 Nachkommastellen. Prozentsätze: 1–2 Nachkommastellen. Stückzahlen: **immer AUFrunden bei Mindestmengen** (Break-even von 1.333,4 Stück → 1.334 Stück nötig).
3. Jede Zahl mit Einheit (€, %, Stück, Nächte). Ergebnis doppelt unterstreichen bzw. Antwortsatz.

## 6. Taschenrechner-Disziplin

- Vor der Klausur klären, welcher Rechner erlaubt ist (steht i. d. R. in der Prüfungsankündigung).
- Klammern großzügig setzen: 100/(1,05^3) statt Kettenrechnung.
- Ergebnis-Plausibilität: Überschlag im Kopf (100/1,16 ≈ 86 — wenn der Rechner 862 zeigt, Kommafehler suchen).
