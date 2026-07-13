---
tags:
  - Code
  - SOP
typ: SOP
erstellt: 2026-07-13
status: aktiv
---

# SOP Code Review (Selbstprüfung vor "fertig")

> **Zweck:** Kein Code gilt als fertig, bevor diese SOP durchlaufen ist — egal ob von mir oder einem Modell geschrieben. Die Reihenfolge ist bewusst: erst Korrektheit, dann Robustheit, dann Lesbarkeit, dann Stil. Ein Modell dokumentiert am Ende: "Review-SOP durchlaufen, Befunde: …" (auch wenn Befund = keiner).

## Stufe 1 — Läuft es überhaupt? (Korrektheit)

1. **Ausführen, nicht anschauen:** Code mindestens einmal mit realistischen Daten laufen lassen. "Sieht richtig aus" zählt nicht.
2. **Happy Path verifizieren:** Erwartetes Ergebnis für einen bekannten Fall von Hand nachgerechnet/nachgeprüft? (Wie Antwortsatz + Probe in [[03_Resources/Mathe_Grundlagen_Klausuren|Klausuren]])
3. **Anforderungsabgleich:** Jede Anforderung aus der Aufgabe einzeln abhaken — was wurde NICHT umgesetzt? Explizit sagen, nicht verschweigen.

## Stufe 2 — Wo bricht es? (Robustheit, [[00_System/Konzept_Bibliothek|Inversion]])

Gezielt versuchen, den eigenen Code kaputt zu machen — die Standard-Kaputtmacher-Liste:
- **Leere Eingaben:** leere Liste/String/Datei, `None`/`null`/`undefined`
- **Ränder:** 0, 1, negativ, sehr groß, genau am Limit (off-by-one!)
- **Falsche Typen/Formate:** String statt Zahl, ungültiges Datum, kaputtes JSON, falsches Encoding (Umlaute!)
- **Externe Fehler:** Netzwerk weg, Datei fehlt, API liefert 500/Timeout/leeres Ergebnis — wird das behandelt oder crasht es hässlich?
- **Nebenläufigkeit/Doppelaufruf:** Was passiert bei zweimal Ausführen (Idempotenz — legt es doppelte Datensätze an)?
- **Division durch 0 / Ganzzahl vs. Float / Rundung bei Geld**

Jeder gefundene Bruch: fixen ODER dokumentiert als bewusste Nichtbehandlung ("Eingabe kommt aus validiertem Formular").

## Stufe 3 — Versteht es ein Fremder? (Lesbarkeit)

1. **Namen-Test:** Jede Funktion/Variable laut vorlesen — beschreibt der Name den Inhalt? (`tmp`, `data2`, `doStuff` → umbenennen)
2. **Verschachtelungs-Test:** > 3 Einrückungsebenen → Guard Clauses / Funktion extrahieren
3. **Kommentar-Test:** Erklären Kommentare WARUM? WAS-Kommentare löschen ([[02_Areas/Code_Standards/Persoenliche_Code_Konventionen/Konventionen|Konventionen §4]])
4. **Überraschungs-Test:** Gibt es Stellen, an denen ich in 3 Monaten stutzen würde? → vereinfachen oder Warum-Kommentar

## Stufe 4 — Ist es sauber? (Stil & Hygiene)

- [ ] Formatter gelaufen (`black`/`ruff` bzw. `prettier`)?
- [ ] Keine toten Importe, kein auskommentierter Code, keine Debug-Prints?
- [ ] Keine Secrets/Pfade/Personendaten hardcodiert?
- [ ] Magische Zahlen als Konstanten benannt?
- [ ] Fehlerbehandlung spezifisch (kein nacktes `except`)?
- [ ] Abhängigkeiten minimal ([[02_Areas/Code_Standards/Persoenliche_Code_Konventionen/Konventionen|Konventionen §6]])?
- [ ] Bei Updates: nur geänderte Stellen ausgegeben (Output-Format §5)?

## Stufe 5 — Tests & Absicherung

1. Kernlogik hat mindestens 1 Test pro Verhaltensregel + 1 pro gefundenem Bug (Regression)
2. Tests laufen GRÜN — und ein absichtlich eingebauter Fehler macht sie ROT (Test testet wirklich etwas)
3. Bei fehlender Testinfrastruktur: mindestens ein reproduzierbares Beispielskript/`assert`-Block dokumentieren

## Abschlussprotokoll (Pflicht-Output)

```
Review-SOP durchlaufen:
- Stufe 1: ausgeführt mit <Daten>, Ergebnis verifiziert gegen <Referenz>
- Stufe 2: geprüft leere Eingaben/Ränder/externe Fehler — Befunde: <keine | Liste + Fix>
- Stufe 3/4: <Auffälligkeiten + Behebung | sauber>
- Stufe 5: <n Tests grün | Begründung, warum keine Tests>
- Bewusst NICHT behandelt: <Liste mit Begründung>
```

> **Eskalationsregel:** Unsicherheit über Anforderungen ist KEIN Grund zu raten — Annahme explizit dokumentieren und die riskanteste Annahme als Frage markieren. Lieber eine präzise Rückfrage als eine stille Fehlentscheidung.
