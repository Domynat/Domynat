---
tags:
  - Content
  - Notion
  - Infrastruktur
typ: Systemdokumentation
erstellt: 2026-07-13
---

# Redaktionsplan in Notion (DB „Content")

> **Einhängung ins Command Center:** Neue, EIGENE Datenbank „Content" — nicht die Aufgaben-DB überladen (andere Objektlebensdauer, andere Felder). Konsistent mit der Architektur in [[02_Areas/Infrastruktur/Notion_System_Doku|Notion_System_Doku]]: Notion = Betrieb/Status, dieses Vault = Wissen/SOPs. Beziehung: `Content (n) — (1) Kurse` entfällt; stattdessen optionale Relation zu „Aufgaben" (Produktions-Todos) und zum „Kalender" (Publish-Slots).

## 1. DB „Content" — Felder (exakt so anlegen)

| Feld | Typ | Werte/Regel |
|---|---|---|
| Titel (intern) | Title | Arbeitstitel, z. B. „Agent-Log #1 — Agent postet selbst" |
| Säule | Select | Agent-Builds / Second-Brain-Study / Build-in-Public / Tool-Checks ([[02_Areas/Content_Creation/_Uebersicht\|Übersicht]]) |
| Serie | Select | Agent-Log / Fail der Woche / System-Sonntag / — (erweiterbar) |
| Status | Select (Pipeline) | **Idee → Skript → Produktion → Bereit → Geplant → Veröffentlicht** (+ „Fehler", „Verworfen") |
| Backlog-Score | Number | Schmerz + Beweisbarkeit + Serienpotenzial (je 1–3), Regel in [[02_Areas/Content_Creation/SOP_Content_Engine\|Engine §1]] |
| Plattform | Select | YouTube-Long / YouTube-Short / Reel / Karussell / TikTok — **je Plattform-Fassung EIN Eintrag** (= 1 Kit), verbunden über Feld „Kern-Idee" |
| Kern-Idee | Relation (self) | verknüpft alle Kits derselben Idee (Master + Fassungen) |
| Hook-Formel | Select | 1–9 laut [[02_Areas/Content_Creation/SOP_Hook_und_Skript\|Hook-SOP]] (macht Formeln auswertbar!) |
| Skript | Text/Seite | Skript im 4-Elemente-Format (Timestamps, Sprechtext, Overlays, Bildquelle) |
| Datei | Text | Dateiname nach Konvention ([[02_Areas/Content_Creation/SOP_Posting_PostProxy\|Posting-SOP §1]]) |
| Publish-Slot | Date+Zeit | aus Kadenz-Tabelle (Posting-SOP §2) |
| Compliance ✓ | Checkbox | erst nach [[02_Areas/Content_Creation/Compliance_Checkliste\|Checkliste]] |
| Freigegeben am | Date | **leer = nicht postbar** (hartes Gate) |
| PostProxy-ID / URL | Text | nach Scheduling bzw. Veröffentlichung |
| Views / 3-Sek-Rate / Ø-Watchtime / Follower-Δ / Link-Klicks / Kommentare | Number (6 Felder) | Analyse-Lauf So ([[02_Areas/Content_Creation/SOP_Content_Engine\|Engine §6]]) |
| Erlös-Zuordnung | Number (€) | Affiliate/Produkt-Erlöse, die via UTM diesem Post zuordenbar sind |
| Learnings | Text | max. 3 Stichpunkte |

## 2. Ansichten (genau diese fünf)

1. **Backlog** — Status = Idee, sortiert nach Backlog-Score absteigend (Montags-Quelle)
2. **Pipeline** — Kanban nach Status (Wochenarbeit auf einen Blick)
3. **Bereit + Freigegeben** — Filter: Status = Bereit UND Freigegeben ≠ leer UND Compliance ✓ (Einzige Quelle für den Posting-Lauf!)
4. **Kalenderwoche** — Kalenderansicht auf Publish-Slot (Kollisionen/6-h-Regel sichtbar)
5. **Performance** — Status = Veröffentlicht, Spalten: Kennzahlen + Erlös; Sortierung Views absteigend (Monatsreview-Quelle)

## 3. Betriebsregeln

- **1 Kit = 1 Zeile.** Eine Idee mit 3 Plattform-Fassungen = 4 Einträge (1 Master-Idee + 3 Kits), verbunden über „Kern-Idee" — nur so ist Performance je Plattform auswertbar.
- **Status-Wechsel nur mit erfülltem Gate:** Bereit erfordert alle Pflichtfelder (Posting-SOP §1); Geplant erfordert Freigabe-Datum.
- **Agenten-Rechte** (aus [[02_Areas/Infrastruktur/Notion_System_Doku|Notion-Doku §4]]): Hermes darf Einträge anlegen/aktualisieren und Stati bis „Geplant" setzen; „Freigegeben am" schreibt NUR der Mensch; Schema-Änderungen nur nach Freigabe.
- **Wöchentlicher Mini-Export:** Beim Sonntags-Lauf zusätzlich die Wochen-KPIs (aggregiert) als eine Zeile in ein Dashboard-Board (→ eintragen: Seite/DB) — Trendkurve über Wochen ist wichtiger als Einzelposts.

## 4. Anlage-Checkliste (einmalig, ~30 Min)

- [ ] DB „Content" mit Feldern aus §1 anlegen
- [ ] Die 5 Ansichten aus §2 bauen
- [ ] Self-Relation „Kern-Idee" testen (1 Dummy-Idee + 2 Dummy-Kits)
- [ ] DB-ID in [[02_Areas/Infrastruktur/Notion_System_Doku|Notion_System_Doku §4]] nachtragen (Agenten-Zugriff)
- [ ] 10 Start-Ideen aus [[02_Areas/Content_Creation/Nische_Positionierung|Nische_Positionierung]]-Beispielthemen als Backlog einpflegen (mit Score)
