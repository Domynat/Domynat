---
tags:
  - Uni
  - G4
  - Beispielaufgaben
typ: FewShot
erstellt: 2026-07-13
---

# G4 Bilanzierung — Format-Muster (Few-Shot)

> **Arbeitsteilung:** Diese Datei zeigt je Aufgabentyp EIN sauber durchgerechnetes Muster (Format-Vorlage). Der Mengen-Drill läuft über [[Bilanzierung_Klausurtraining]] — dort NICHT duplizierte Aufgabenserien. Notation hier = verbindliche Notation für alle Lösungen.

## Muster 1 — Buchungssätze mit Umsatzsteuer

**Angabe:** Das Hotel kauft Wein für 2.000 € netto zzgl. 19 % USt auf Ziel. Später Verkauf von Übernachtungen bar 1.070 € brutto (7 % USt).

**Lösung:**
1. *Einkauf (Eingangsrechnung → Vorsteuer):*
   `Wareneingang Wein 2.000 € + Vorsteuer 380 € an Verbindlichkeiten aLL 2.380 €`
   (Konten: Wareneingang = Aufwand ↑ Soll; Vorsteuer = Aktiv ↑ Soll; Verbindlichkeit = Passiv ↑ Haben; 2.000+380 = 2.380 ✓)
2. *Verkauf (Ausgangsleistung → USt):* Netto = 1.070 / 1,07 = 1.000 €; USt = 70 €
   `Kasse 1.070 € an Umsatzerlöse Logis 1.000 € + Umsatzsteuer 70 €`

**Antwortsatz-Norm:** Jeder Buchungssatz mit Beträgen an beiden Seiten, Summengleichheit im Kopf geprüft.

## Muster 2 — Abschreibungsplan (linear, pro rata temporis)

**Angabe:** Kauf Küchenmaschine am 10.09.01: Listenpreis 24.000 € netto, 10 % Rabatt, Transport 400 €, Montage 1.200 €, ND 5 Jahre, linear.

**Lösung:**
1. **AK (§ 255 HGB):** 24.000 − 2.400 (Rabatt) + 400 + 1.200 = **23.200 €** (Vorsteuer gehört NICHT in die AK)
2. Jahres-AfA = 23.200 / 5 = **4.640 €**
3. Jahr 01 zeitanteilig ab September: 4.640 × 4/12 = **1.546,67 €**

| Jahr | AfA | Buchwert 31.12. |
|---|---|---|
| 01 | 1.546,67 | 21.653,33 |
| 02 | 4.640,00 | 17.013,33 |
| 03 | 4.640,00 | 12.373,33 |
| 04 | 4.640,00 | 7.733,33 |
| 05 | 4.640,00 | 3.093,33 |
| 06 (Jan–Aug) | 3.093,33 | 0,00 |

4. Buchungssatz jährlich: `Abschreibungen auf Sachanlagen an Technische Anlagen/Maschinen`

*(Merkposten: Anschaffungsmonat zählt voll mit; die "fehlenden" 8/12 laufen im Jahr 06 aus.)*

## Muster 3 — Rechnungsabgrenzung

**Angabe:** Am 01.10.01 zahlt das Hotel die Kfz-Versicherung für 12 Monate im Voraus: 2.400 €. Außerdem erhält es am 01.12.01 Bankettvorauszahlung 5.000 € für ein Event am 15.02.02. Buchen Sie die Abschlussbuchungen zum 31.12.01.

**Lösung:**
1. *Versicherung:* Wir zahlten voraus → **ARAP**. Ins Jahr 02 gehören 9/12 = 1.800 €.
   `ARAP 1.800 € an Versicherungsaufwand 1.800 €`
   (Im Jahr 02: `Versicherungsaufwand an ARAP 1.800 €`)
2. *Bankettvorauszahlung:* Wir erhielten voraus, Leistung erst 02 → erhaltene Anzahlung/**PRAP-Logik**: Ertrag darf 01 nicht ausgewiesen werden (Realisationsprinzip § 252).
   Buchung bei Zahlungseingang: `Bank 5.000 € an Erhaltene Anzahlungen 5.000 €` — Ertragsbuchung erst bei Leistung am 15.02.02.

*(Merkposten: 2 Fragen — Wer zahlte voraus? Welcher Anteil gehört ins Folgejahr? Leistungsbezogene Vorauszahlungen = Anzahlung, zeitraumbezogene = RAP.)*

## Muster 4 — Forderungsbewertung (EWB)

**Angabe:** Forderungsbestand 31.12.: 119.000 € brutto (19 % USt). Darin: Kunde A (11.900 € brutto) ist zweifelhaft, erwarteter Ausfall 60 %. Auf den einwandfreien Rest sind 1 % PWB zu bilden.

**Lösung:**
1. Kunde A netto = 11.900 / 1,19 = 10.000 €; EWB = 60 % × 10.000 = **6.000 €**
   `Abschreibungen auf Forderungen (EWB) 6.000 € an Forderungen aLL / EWB-Konto 6.000 €`
   (USt wird erst bei endgültigem Ausfall korrigiert!)
2. Einwandfreier Bestand brutto = 119.000 − 11.900 = 107.100 € → netto = 107.100 / 1,19 = 90.000 €
3. PWB = 1 % × 90.000 = **900 €**
   `Abschreibungen auf Forderungen (PWB) 900 € an PWB 900 €`

## Muster 5 — Niederstwertprinzip

**Angabe:** (a) Weinvorrat: Buchwert 8.000 €, Marktpreis am Stichtag 6.500 €, Erholung wahrscheinlich. (b) Hotelgebäude: Buchwert 2,0 Mio €, beizulegender Wert 1,7 Mio € — Minderung voraussichtlich dauerhaft. (c) Wie (b), aber nur vorübergehend.

**Lösung:**
1. (a) UV → **strenges NWP**: Abschreibung PFLICHT auf 6.500 € (auch wenn vorübergehend). `Aufwand aus Abwertung UV 1.500 € an Vorräte 1.500 €`
2. (b) AV, dauerhaft → **gemildertes NWP**: außerplanmäßige Abschreibung PFLICHT auf 1,7 Mio €.
3. (c) AV, vorübergehend → KEINE Abschreibung (Sach-AV); Beibehaltung 2,0 Mio €. (Nur Finanz-AV hätte ein Wahlrecht.)
4. Begründung stets zitieren: Vorsichts-/Imparitätsprinzip § 252 HGB; § 253 HGB für die Abschreibungspflichten.

---

> **Weiteres Üben:** Serienaufgaben, Varianten und Selbsttests → [[Bilanzierung_Klausurtraining]]. Neue eigene Aufgaben immer in DIESEM Lösungsformat dokumentieren (nummerierte Schritte, Buchungssatz-Notation, Merkposten kursiv am Ende).
