---
tags:
  - Infrastruktur
  - Hermes
  - Agent
  - Tools
typ: Systemdokumentation
erstellt: 2026-07-13
status: aktiv — Platzhalter (→ eintragen) beim nächsten Hermes-Arbeitstermin füllen
schicht: 2 (Tools) — orchestriert Schicht 3 (Modelle) auf Basis von Schicht 1 (Obsidian)
---

# Hermes Agent — Systemdokumentation

> **Rolle im 3-Schichten-System:** Hermes ist der persönliche Agent, der Aufgaben AUSFÜHRT. Sein Wissen kommt aus dem Obsidian-Kern ([[00_System/README_System|README_System]]), sein Betriebszustand aus Notion ([[02_Areas/Infrastruktur/Notion_System_Doku|Notion_System_Doku]]), sein Modell ist austauschbar. Diese Datei ist die einzige Quelle der Wahrheit über Hermes' Aufbau — jede Änderung an Hermes wird HIER zuerst dokumentiert.

## 1. Grundprinzip

- **Modellagnostik:** Hermes = Prompt-/Tool-Konfiguration + Wissenszugriff, NICHT ein bestimmtes Modell. Modellwechsel (Fable 5 → Sonnet → Kimi → …) darf nur die Ausführungsqualität marginal ändern, weil die Denkarbeit in den Obsidian-SOPs steckt.
- **Arbeitsprotokoll:** Hermes befolgt das verbindliche Modell-Protokoll aus [[00_System/README_System|README_System §4]]: erst SOP lesen, dann handeln; Lücken melden statt improvisieren; SOPs nie stillschweigend ändern.
- **Startsequenz jeder Hermes-Session:** (1) `README_System.md` laden, (2) SOP des Aufgabenbereichs laden, (3) relevante Notion-Daten ziehen, (4) ausführen, (5) Ergebnis + ggf. SOP-Lücken zurückmelden.

## 2. Angebundene Tools/Skills (Ist-Stand pflegen!)

| Tool/Skill | Zweck | Anbindung | Status |
|---|---|---|---|
| Notion MCP | Aufgaben/Lernthemen/Portfolio lesen & schreiben | MCP-Server (offiziell) | → Status eintragen |
| Google Calendar | Termine lesen (Morning Briefing), anlegen | MCP/Connector | → Status eintragen |
| Obsidian-Vault-Zugriff | SOPs/Konzepte lesen (Kern!) | Dateizugriff auf Vault-Ordner (lokal/Sync) ODER MCP-Filesystem | → Mechanismus eintragen |
| Websuche | Recherche (Kurse, Investing-Daten) | modellseitig/Tool | → eintragen |
| E-Mail (Gmail) | lesen/Entwürfe | Connector | → eintragen |
| (weitere) | | | |

**Pflegeregel:** Neues Tool erst in diese Tabelle + Kurzbeschreibung, DANN produktiv nutzen. Tote Tools raus (Zeile ins [[04_Archive/README_Archive|Archiv]]-Prinzip: streichen + Datum).

## 3. Neues Tool anbinden — das MCP-Server-Pattern (SOP)

1. **Bedarf formulieren:** Welche Aufgabe scheitert heute woran? (Kein Tool „weil cool" — [[02_Areas/Code_Standards/Persoenliche_Code_Konventionen/Konventionen|YAGNI]])
2. **Existierenden MCP-Server suchen** (offizielle Server, Registry/Marketplace) — selbst bauen ist Plan B
3. **Anbinden:** Server-Konfiguration beim jeweiligen Client eintragen (Claude Code: `claude mcp add <name> …` bzw. `.mcp.json` im Projekt; andere Clients analog — Konfigdatei mit Command/URL + Auth)
4. **Minimal-Rechte:** nur benötigte Scopes/API-Keys; Secrets in Env-Vars, NIE in Dateien, die ins Vault/Repo synchen ([[02_Areas/Code_Standards/Persoenliche_Code_Konventionen/SOP_Code_Review|Review §4]])
5. **Smoke-Test:** eine Lese- und (falls erlaubt) eine harmlose Schreiboperation ausführen und Ergebnis prüfen
6. **Dokumentieren:** Zeile in Tabelle §2 + Stolpersteine notieren
7. **Eigenbau-Fall (Plan B):** kleiner MCP-Server (Python/TS SDK), der GENAU EINE Sache tut; Code nach [[02_Areas/Code_Standards/Persoenliche_Code_Konventionen/Konventionen|Konventionen]]; Repo-Ort hier verlinken

## 4. Morning Briefing — Konzept & Stand

**Idee:** Jeden Morgen (z. B. 6:45) erzeugt Hermes automatisch ein kompaktes Briefing:
1. **Kalender heute** (Google Calendar): Vorlesungen, Termine, Schichten
2. **Aufgaben** (Notion): heute fällig + überfällig, Top-3-Priorität
3. **Lernthemen** (Notion): heute fällige Wiederholungen ([[03_Resources/Lernmethoden_Referenz|Spaced Repetition]])
4. **Klausur-Countdown** (aus [[01_Projects/Klausurphase_aktuelles_Semester/_Klausurphase_Plan|Klausurphase-Plan]]-Daten): "G4 in 12 Tagen — laut SOP heute: Übungsphase"
5. Optional: 1 Watchlist-Hinweis (Portfolio-DB: Kurs in Kaufzone? — KEINE Handelsempfehlung, nur Wiedervorlage-Trigger)

**Format:** ≤ 15 Zeilen, Push aufs Handy (Kanal → eintragen: Telegram/E-Mail/Notification).

**Umsetzungs-Stand:** → eintragen (Konzept ✓ / Trigger-Mechanismus offen). Trigger-Optionen: Cron/Scheduled Task auf eigenem Rechner/Server, Claude-Code-Routine (create_trigger), oder Automationsdienst. Entscheidung + Konfiguration hier dokumentieren.

**Erfolgskriterium:** Briefing ersetzt das morgendliche "Was war nochmal heute?"-Scrollen durch 30 Sekunden Lesen — wenn es das nicht tut, kürzen statt erweitern.

## 5. Sicherheits- & Betriebsregeln

1. **Schreiboperationen:** Hermes meldet jede Änderung an Notion/Kalender explizit ("Angelegt: Aufgabe X, Deadline Y")
2. **Destruktives (löschen, verschieben, senden an Dritte):** nur mit expliziter Freigabe pro Fall
3. **Finanzen:** Hermes analysiert nach [[02_Areas/Finanzen_Investing/Buffett_Value_Investing_SOP/SOP_Aktienanalyse|SOP_Aktienanalyse]], führt aber NIEMALS Transaktionen aus
4. **Secrets:** API-Keys nur in der Tool-Konfiguration, nie im Vault; diese Doku beschreibt WAS angebunden ist, nie WIE die Credentials lauten
5. **Modellwechsel-Test:** Nach jedem Wechsel eine Standardaufgabe als Benchmark laufen lassen (z. B. "Erstelle das Morning Briefing für morgen" + "Löse [[02_Areas/Studium_HM/G5_Internes_Rechnungswesen_Finanzierung/Beispielaufgaben|G5 Aufgabe 1]] nach SOP") und Ergebnis mit dokumentiertem Soll vergleichen — so wird Modellagnostik messbar

## 6. Offene Punkte

- [ ] Tabelle §2 mit realem Ist-Stand füllen (Anbindungen, Status)
- [ ] Morning-Briefing-Trigger entscheiden & umsetzen (§4)
- [ ] Benchmark-Aufgabenset für Modellwechsel-Test fixieren (§5.5)
- [ ] Vault-Zugriffsweg für Hermes dokumentieren (lokal vs. Sync-Kopie)
