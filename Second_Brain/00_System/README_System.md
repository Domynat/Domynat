---
tags:
  - System
  - Meta
typ: Systemdokumentation
erstellt: 2026-07-13
status: aktiv
---

# README — Wie dieses Second Brain funktioniert

> **Zweck dieser Datei:** Jedes Modell, jeder Agent und jeder Mensch, der mit diesem Vault arbeitet, liest ZUERST diese Datei. Sie erklärt die Architektur, die Regeln und den Einstiegspunkt für jede Art von Aufgabe.

## 1. Die 3-Schichten-Architektur

Dieses System ist bewusst so gebaut, dass die Intelligenz **im Vault** steckt, nicht im Modell.

| Schicht | Inhalt | Änderungsfrequenz |
|---|---|---|
| **1. Obsidian-Kern (dieses Vault)** | Komplettes Wissen, Denk-Playbooks, SOPs, durchgerechnete Beispiele | **Nie** (nur Erweiterung/Pflege) |
| **2. Tools** | Notion Command Center, Hermes Agent, Skills, MCP-Server | Selten |
| **3. Modelle** | Fable 5, Sonnet, Kimi K2, was auch immer als Nächstes kommt | Ständig |

**Konsequenz:** Ein Modellwechsel darf die Arbeitsqualität nicht spürbar verändern. Das erreicht dieses Vault durch drei Eigenschaften jeder SOP:

1. **Explizite Denkschritte** — nicht "analysiere die Bilanz", sondern "Schritt 1: Bilanzsumme prüfen, Schritt 2: EK-Quote = EK/GK berechnen, Schritt 3: mit Schwellenwert 30 % vergleichen …"
2. **Few-Shot-Beispiele** — jede SOP hat mindestens ein vollständig durchgerechnetes Beispiel. Ein schwaches Modell imitiert das Muster, statt selbst zu reasonen.
3. **Explizite Fehlerlisten** — die häufigsten Fehler stehen in der SOP, damit sie vom Modell aktiv geprüft werden können.

## 2. PARA-Struktur des Vaults

```
00_System/    → Meta: diese Datei, Prüfungsformen, Konzept-Bibliothek
01_Projects/  → Zeitlich begrenzte Vorhaben mit Deadline (z. B. Klausurphase)
02_Areas/     → Dauerhafte Verantwortungsbereiche (Studium, Finanzen, Code, Sprachen, Infrastruktur)
03_Resources/ → Fachübergreifende Referenzen, die mehrere Areas nutzen
04_Archive/   → Abgeschlossenes (alte Semester, beendete Projekte)
```

**Regeln:**
- Ein **Projekt** hat ein Enddatum. Ist es erreicht → Ordner nach `04_Archive/` verschieben, nützliche Extrakte vorher in die passende Area übernehmen.
- Eine **Area** hat kein Enddatum, nur einen Qualitätsstandard, der gehalten wird.
- **Resources** enthalten nichts Modulspezifisches — was nur ein Fach betrifft, gehört in dessen Modul-Ordner.

## 3. Einstiegspunkte nach Aufgabentyp

| Aufgabe | Startdatei |
|---|---|
| Klausurvorbereitung Modul GX | `02_Areas/Studium_HM/GX_…/SOP_Klausurvorbereitung.md` |
| Übungsaufgabe in Modul GX lösen | `Beispielaufgaben.md` des Moduls als Muster + `Konzepte.md` als Begriffsquelle |
| Aktie analysieren | [[02_Areas/Finanzen_Investing/Buffett_Value_Investing_SOP/SOP_Aktienanalyse\|SOP_Aktienanalyse]] |
| Code schreiben/prüfen | [[02_Areas/Code_Standards/Persoenliche_Code_Konventionen/Konventionen\|Konventionen]] + [[02_Areas/Code_Standards/Persoenliche_Code_Konventionen/SOP_Code_Review\|SOP_Code_Review]] |
| Französisch üben | `02_Areas/Sprachen_Franzoesisch/A2_Francais_Entreprise/` |
| Notion/Hermes verstehen oder erweitern | `02_Areas/Infrastruktur/` |
| Prüfungsform-Kürzel entschlüsseln | [[00_System/Pruefungsformen_HHN\|Pruefungsformen_HHN]] |
| Denkmodell fachübergreifend anwenden | [[00_System/Konzept_Bibliothek\|Konzept_Bibliothek]] |

## 4. Arbeitsprotokoll für Modelle (verbindlich)

Wenn du ein KI-Modell bist und in diesem Vault arbeitest:

1. **Lies zuerst die SOP des betroffenen Bereichs vollständig.** Improvisiere nicht, wenn eine SOP existiert.
2. **Folge den Denkschritten wörtlich.** Die Reihenfolge ist Teil der Methode. Überspringe nichts, auch wenn ein Schritt trivial wirkt.
3. **Nutze die Beispielaufgaben als Format-Vorlage.** Dein Output soll aussehen wie die Musterlösungen: gleiche Gliederung, gleiche Notation, gleicher Detailgrad.
4. **Prüfe am Ende gegen die Fehlerliste der SOP.** Jeder gelistete Fehler wird explizit abgehakt ("geprüft: nicht vorhanden").
5. **Wenn die SOP eine Lücke hat:** Aufgabe trotzdem lösen (bestes Bemühen), aber die Lücke am Ende benennen, damit die SOP nachgeschärft werden kann. So verbessert sich der Kern mit jeder Nutzung.
6. **Ändere nie stillschweigend die SOP.** Verbesserungsvorschläge als Vorschlag markieren; entscheiden tut der Mensch.

## 5. Pflege-Regeln (für den Menschen)

- **Nach jeder Klausur:** 15 Minuten investieren — welche Aufgabentypen kamen wirklich dran? SOP des Moduls entsprechend aktualisieren. Das ist der wertvollste Pflege-Moment des ganzen Systems.
- **Nach jeder Aktienanalyse:** Wenn ein Schritt der [[02_Areas/Finanzen_Investing/Buffett_Value_Investing_SOP/SOP_Aktienanalyse|SOP_Aktienanalyse]] unklar war → präzisieren.
- **Semesterende:** Abgeschlossene Projekt-Ordner archivieren, neue Klausurphase in `01_Projects/` anlegen.
- **Neues Modul (Hauptstudium):** Ordner nach demselben 5-Dateien-Schema anlegen wie G1–G10 (`_Uebersicht`, `SOP_Klausurvorbereitung`, `Konzepte`, `Beispielaufgaben`, `Fach_Verbindungen`).
- **Neue Tools:** in `02_Areas/Infrastruktur/` dokumentieren, bevor sie produktiv genutzt werden.

## 6. Format-Konventionen

- **Frontmatter:** Jede Datei beginnt mit YAML-Frontmatter: `tags` (z. B. `Uni`, `G4`, `SOP`, `Finanzen`, `Code`), `typ`, `erstellt`, optional `status`.
- **Links:** Interne Links als `[[Pfad/Datei|Anzeigename]]`. Da Dateinamen wie `Konzepte.md` mehrfach existieren, immer den Pfad mitgeben.
- **Sprache:** Deutsch, präzise, keine Floskeln. Fachbegriffe beim ersten Auftreten definieren.
- **Rechnungen:** Immer mit Einheiten, Zwischenschritten und Antwortsatz — genau wie in der Klausur verlangt.
- **Keine Duplikate:** Ein Konzept lebt an genau einer Stelle; überall sonst wird verlinkt (z. B. [[00_System/Konzept_Bibliothek|Konzept_Bibliothek]] für fachübergreifende Modelle).

## 7. Stand & offene Punkte

- Grundstudium G1–G10 vollständig angelegt (Stand Juli 2026).
- ⚠️ Platzhalter `(eintragen)` bei Dozenten und einzelnen Prüfungsdetails: gegen aktuelles Modulhandbuch/ILIAS abgleichen — das ändert sich pro Semester.
- Hauptstudium-Module (ab Semester 3) nach demselben Schema ergänzen, sobald sie beginnen.
