---
tags:
  - Infrastruktur
  - Notion
  - Tools
typ: Systemdokumentation
erstellt: 2026-07-13
status: aktiv — Platzhalter (→ eintragen) beim nächsten Notion-Arbeitstermin füllen
schicht: 2 (Tools — nutzt Schicht 1 Obsidian als Wissensquelle)
---

# Notion Command Center — Systemdokumentation

> **Rollentrennung (wichtig!):** Obsidian = WISSEN (SOPs, Konzepte, ändert sich nie) · Notion = BETRIEB (Termine, Aufgaben, Status, ändert sich täglich). Regel: Steht in einer Notion-Seite plötzlich WISSEN (eine Erklärung, ein Playbook) → nach Obsidian verschieben und in Notion verlinken. Nie umgekehrt.

## 1. Architektur-Überblick (Datenbanken & Beziehungen)

```
Kurse (1) ──< Lernthemen (n)          Kurs hat viele Lernthemen
Kurse (1) ──< Aufgaben (n)            Aufgaben hängen am Kurs (Abgaben, Übungsblätter)
Lernthemen (1) ──< Aufgaben (n)       optional: Aufgabe gehört zu Lernthema
Kalender ──< Aufgaben                 Deadlines spiegeln sich im Kalender
Portfolio (eigenständig)              Investing-Positionen & Watchlist
```

### DB „Kurse"
- **Zweck:** Ein Eintrag pro Modul (G1–G10, später Hauptstudium) — das Notion-Gegenstück zu den Obsidian-Modulordnern
- **Kernfelder:** Name, Semester, ECTS, Prüfungsform, Prüfungsdatum, Dozent, Status (laufend/bestanden), **Link zur Obsidian-`_Uebersicht.md`** (Obsidian-URI oder Pfadangabe)
- **Regel:** Fakten (ECTS, Prüfungsform) werden in Notion UND Obsidian-Frontmatter gepflegt — Notion für Filter/Ansichten, Obsidian als Wissensanker. Änderung immer an beiden Stellen (oder: Obsidian führt, Notion spiegelt)

### DB „Lernthemen"
- **Zweck:** Granulare Lerneinheiten pro Kurs (z. B. „G4: RAP", „G8: Normalverteilung") — die operative Einheit für [[03_Resources/Lernmethoden_Referenz|Spaced Repetition]]
- **Kernfelder:** Thema, Relation→Kurs, Status (neu/gelernt/wiederholt), **zuletzt wiederholt (Datum)**, nächste Wiederholung (Formel/manuell: +1/+3/+7/+14 Tage), Selbsteinschätzung (1–5)
- **Nutzung:** Tagesansicht „Heute fällig" = alle Themen mit nächster Wiederholung ≤ heute

### DB „Aufgaben"
- **Zweck:** Alles mit Deadline: Abgaben, Anmeldungen, Übungsblätter, Orga (auch privat)
- **Kernfelder:** Aufgabe, Relation→Kurs (optional), Deadline, Status (offen/in Arbeit/erledigt), Priorität, Aufwand (S/M/L)
- **Ansichten:** „Diese Woche" (Kanban nach Status), „Nach Kurs", „Überfällig"

### DB „Portfolio"
- **Zweck:** Investing-Betrieb: Positionen, Watchlist, Analyse-Status
- **Kernfelder:** Unternehmen, Ticker, Status (Position/Watchlist/Analysiert-Pass), Kaufkurs, Stück, **Kaufthese (3 Sätze — Kopie aus der Obsidian-Analyse)**, Link zur Analyse-Datei ([[02_Areas/Finanzen_Investing/Buffett_Value_Investing_SOP/Beispielanalysen|Format]]), Wunschkurs (Kaufzone), nächste Wiedervorlage (Datum des nächsten Geschäftsberichts)
- **Regel:** Die ANALYSE lebt in Obsidian; Notion hält nur Status + Zahlen für den Überblick

### DB „Kalender"
- **Zweck:** Terminspiegel: Vorlesungen, Klausuren, Arbeitsschichten, private Termine
- **Felder:** Termin, Datum/Zeit, Typ (Uni/Arbeit/privat/Investing), Relation→Kurs

## 2. Google-Calendar-Verknüpfung

- **Ist-Zustand (dokumentieren, → eintragen):** Welche Notion-Kalender-Ansicht ist mit welchem Google-Kalender gekoppelt? Über welchen Mechanismus (Notion-Kalender-App mit GCal-Integration / Zapier / manuell)?
- **Bewährtes Muster:** Google Calendar = MASTER für Uhrzeit-Termine (Vorlesungen, Schichten — überall auf dem Handy); Notion = Master für DEADLINE-Objekte (Aufgaben, Abgaben). Notion-Kalender-App (calendar.notion.so) verbindet beide Sichten: GCal-Konten einbinden + Notion-DBs als Ebenen einblenden.
- **Anti-Pattern:** Termine doppelt manuell pflegen — genau EIN Master pro Termintyp, sonst divergiert es garantiert.

## 3. Standard-Workflows (SOPs für den Betrieb)

**Semesterstart (einmalig, ~1 h):** Kurse-DB: neue Module anlegen (Daten aus ILIAS) → Obsidian: `_Uebersicht.md`-Frontmatter parallel füllen → Klausurdaten in [[01_Projects/Klausurphase_aktuelles_Semester/_Klausurphase_Plan|Klausurphase-Plan]] UND Kalender → Vorlesungszeiten in Google Calendar (Serientermine).

**Wochenreview (sonntags, 15 Min):** Aufgaben: erledigte abhaken, neue Woche priorisieren → Lernthemen: „Heute fällig"-Rückstau prüfen → Kalender-Vorschau der Woche → 1 Notiz: größter Engpass der Woche ([[00_System/Konzept_Bibliothek|Engpassdenken]]).

**Nach jeder Vorlesung (2 Min):** Neue Lernthemen anlegen (Titel reicht), Übungsblatt als Aufgabe mit Deadline.

**Nach jeder Aktienanalyse:** Portfolio-DB-Eintrag anlegen/aktualisieren (Status, Wunschkurs, Wiedervorlage) — Analyse selbst nach Obsidian.

## 4. Zugriff für Agenten (Schicht 2 ↔ Schicht 3)

- Notion ist per **MCP-Server** an Agenten angebunden (Notion-MCP: Suche, Seiten lesen/schreiben, DB-Queries) → genutzt von Hermes ([[02_Areas/Infrastruktur/Hermes_Agent_Doku|Hermes_Agent_Doku]]) und Claude-Sessions
- **Agenten-Regeln:** (1) Agenten dürfen Aufgaben/Lernthemen-Status ändern und Einträge anlegen; (2) Struktur (DB-Schemata, Felder) ändern nur nach menschlicher Freigabe; (3) bei Schreiboperationen immer benennen, WAS geändert wurde
- **→ eintragen:** Workspace-Name, DB-IDs der fünf Datenbanken (für API-Zugriffe), Name der Integration/Verbindung

## 5. Offene Punkte / Ausbau

- [ ] DB-IDs und GCal-Kopplungsdetails dokumentieren (§2, §4)
- [ ] Wiederholungs-Automatik für Lernthemen (Formel-Property oder Automation) einrichten und hier beschreiben
- [ ] Semester-Template (Kurse + Standard-Aufgaben) als Notion-Vorlage, damit Semesterstart < 30 Min dauert
