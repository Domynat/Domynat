---
tags:
  - Uni
  - G5
  - Beispielaufgaben
typ: FewShot
erstellt: 2026-07-13
---

# G5 KLR/Finanzierung — Durchgerechnete Beispielaufgaben

## Aufgabe 1 — Deckungsbeitrag & Zusatzauftrag

**Angabe:** Restaurant, Kapazität 8.000 Menüs/Monat, aktuell 6.000 verkauft. Preis 30 €, variable Kosten 12 €/Menü, Fixkosten 90.000 €/Monat. Ein Busreiseveranstalter bietet: 1.500 Menüs zu 15 €. Annehmen?

**Lösung:**
1. Freie Kapazität: 8.000 − 6.000 = 2.000 ≥ 1.500 ✓ (kein Stammgeschäft verdrängt)
2. db_Zusatz = 15 − 12 = **+3 €/Menü** → DB_Zusatz = 1.500 × 3 = **+4.500 €/Monat**
3. Fixkosten irrelevant (fallen ohnehin an — kurzfristige Entscheidung).
4. Vollkosten-Kontrolle (warum "Verlust" täuscht): Vollkosten/Menü bei 6.000 Stück = 12 + 90.000/6.000 = 27 € > 15 € — nach Vollkosten scheinbar −12 €/Menü. Falsche Logik: Fixkostenproportionalisierung.
5. **Antwortsatz:** Annehmen (+4.500 € Betriebsergebnis), Bedingungen: freie Kapazität, keine Preisansteckung auf reguläre Gäste (separater Kanal/Zeitfenster), keine besseren Alternativaufträge ([[00_System/Konzept_Bibliothek|Opportunitätskosten]]).

## Aufgabe 2 — Break-even & Sicherheitsstrecke

**Angabe:** Hotelbar: Fixkosten 22.000 €/Monat, Ø-Bon 16 €, variable Kosten 5 €/Bon. Aktuell 2.600 Bons/Monat. Break-even? Sicherheitsstrecke?

**Lösung:**
1. db = 16 − 5 = 11 €/Bon
2. x_BE = 22.000 / 11 = **2.000 Bons** (glatt; sonst AUFrunden)
3. Umsatz_BE = 2.000 × 16 = 32.000 €
4. Sicherheitsstrecke = (2.600 − 2.000)/2.600 = **23,1 %** → Umsatz darf um 23 % einbrechen, bevor die Bar in die Verlustzone rutscht.

## Aufgabe 3 — BAB & Zuschlagskalkulation

**Angabe:** Cateringbetrieb. Materialeinzelkosten 80.000 €, Fertigungslöhne 60.000 €. BAB-Gemeinkosten: Material 8.000 €, Fertigung 90.000 €, Verwaltung 23.900 €, Vertrieb 16.730 €. Keine Bestandsveränderungen. Kalkulieren Sie die Selbstkosten eines Auftrags mit MEK 400 €, FEK 300 €.

**Lösung:**
1. **Zuschlagssätze:** MGK = 8.000/80.000 = **10 %**; FGK = 90.000/60.000 = **150 %**
2. HK der Periode = 80.000 + 8.000 + 60.000 + 90.000 = 238.000 € (= HK des Umsatzes, da keine Bestandsveränderung)
3. VwGK = 23.900/238.000 = **10 %**; VtGK = 16.730/238.000 = **7 %**
4. **Auftragskalkulation:**

| Position | Rechnung | € |
|---|---|---|
| MEK | | 400,00 |
| + MGK 10 % | 400 × 0,10 | 40,00 |
| + FEK | | 300,00 |
| + FGK 150 % | 300 × 1,50 | 450,00 |
| = **Herstellkosten** | | **1.190,00** |
| + VwGK 10 % | 1.190 × 0,10 | 119,00 |
| + VtGK 7 % | 1.190 × 0,07 | 83,30 |
| = **Selbstkosten** | | **1.392,30** |

*(Merkposten: Vw/Vt auf HK des UMSATZES; bei Bestandsveränderungen erst HK des Umsatzes = HK der Produktion − Bestandserhöhung + Bestandsminderung.)*

## Aufgabe 4 — Kapitalwertmethode

**Angabe:** Kauf einer Spülstraße: I0 = 50.000 €; Einzahlungsüberschüsse 18.000 / 20.000 / 22.000 € in t1–t3; Restwert t3 = 5.000 €; Kalkulationszins 8 %. Vorteilhaft?

**Lösung:**
1. Barwerte: t1: 18.000/1,08 = 16.666,67 · t2: 20.000/1,08² = 17.146,78 · t3: (22.000+5.000)/1,08³ = 27.000/1,259712 = 21.433,47
2. Summe Barwerte = 55.246,92 €
3. **C0 = 55.246,92 − 50.000 = +5.246,92 €**
4. **Antwortsatz:** C0 > 0 → vorteilhaft; die Investition verzinst das gebundene Kapital mit mehr als 8 % und schafft zusätzlich ~5.247 € Barwert. *(Fehlerkontrolle: I0 nicht abgezinst ✓, Restwert in t3 ✓, Zins als 1,08 ✓.)*

## Aufgabe 5 — Leverage-Effekt

**Angabe:** Hotel-GmbH: Gesamtkapital 2.000.000 €, Gesamtkapitalrentabilität 8 %, FK-Zins 5 %. Berechnen Sie die EK-Rentabilität bei (a) EK 1.000.000/FK 1.000.000, (b) EK 500.000/FK 1.500.000. (c) Was passiert in (b), wenn r_GK auf 3 % fällt?

**Lösung:**
1. Formel: r_EK = r_GK + (r_GK − i) × FK/EK
2. (a) r_EK = 8 % + (8 − 5) % × 1 = **11 %**
3. (b) r_EK = 8 % + 3 % × 3 = **17 %** — höherer Hebel, höhere EK-Rendite
4. (c) r_EK = 3 % + (3 − 5) % × 3 = 3 % − 6 % = **−3 %** — Hebel schlägt um, sobald r_GK < i
5. **Antwortsatz:** Verschuldung hebelt die EK-Rendite in beide Richtungen; Bedingung für positiven Effekt ist r_GK > i. Zusatzrisiko: FK-Zins ist fix geschuldet, r_GK ist unsicher; steigende Verschuldung erhöht zudem i (Bonitätsaufschlag). → Genau deshalb meidet Value Investing hohe Verschuldung: [[02_Areas/Finanzen_Investing/Buffett_Value_Investing_SOP/Kennzahlen_Referenz|Kennzahlen_Referenz]].

## Aufgabe 6 — Abgrenzung Aufwand/Kosten (Kurzfall)

**Angabe:** Ordnen Sie zu: (1) Spende 2.000 €, (2) bilanzielle AfA 10.000 €, kalkulatorisch (Wiederbeschaffung) wären 12.000 €, (3) Gehalt des mitarbeitenden Inhabers 0 € gebucht, angemessen wären 60.000 €, (4) Löhne 80.000 €.

**Lösung:** (1) neutraler Aufwand (betriebsfremd) → keine Kosten. (2) 10.000 € Aufwand; Kosten 12.000 € → **Anderskosten** (+2.000 kalkulatorisch). (3) kein Aufwand, aber 60.000 € **Zusatzkosten** (kalk. Unternehmerlohn = Opportunitätskosten der Arbeitskraft). (4) Zweckaufwand = Grundkosten 80.000 €.
