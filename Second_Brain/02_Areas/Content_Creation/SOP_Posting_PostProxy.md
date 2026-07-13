---
tags:
  - Content
  - SOP
  - PostProxy
typ: SOP
erstellt: 2026-07-13
status: aktiv — Anbindungsdetails mit (→ eintragen) markiert
---

# SOP Posting via Post Proxy

> **Zweck:** Definiert, wie ein fertiges Content-Kit vom Notion-Redaktionsplan zu den Plattformen kommt — automatisiert über Post Proxy ODER manuell als Fallback. Beide Wege nutzen dieselben Kits und Konventionen; nur der letzte Schritt unterscheidet sich. Vorstufen: [[02_Areas/Content_Creation/SOP_Content_Engine|Engine]] Schritte 1–4.

## 1. Das Content-Kit (Pflichtfelder — unvollständig = nicht postbar)

Ein Kit = 1 Post auf 1 Plattform. Ablage: Videodatei im Content-Ordner (→ eintragen: Pfad/Cloud) + Metadaten in der Notion-Content-DB ([[02_Areas/Content_Creation/Redaktionsplan_Notion|Redaktionsplan_Notion]]).

**Dateinamens-Konvention:** `JJJJ-MM-TT_<plattform>_<serie-oder-slug>_v<Nr>.mp4`
Beispiel: `2026-07-20_tiktok_agent-log-01_v2.mp4`

**Pflichtfelder je Kit:**
1. Videodatei (finale Fassung, ohne Wasserzeichen, Spezifikationen laut [[02_Areas/Content_Creation/SOP_Repurposing|Repurposing-Tabelle]])
2. Titel (YouTube) bzw. erster Caption-Satz (IG/TikTok)
3. Caption/Beschreibung (plattform-nativ, NICHT kopiert)
4. Hashtags (Anzahl laut Repurposing-Tabelle)
5. CTA + **Tracking-Link** (§3)
6. Publish-Slot (Datum/Uhrzeit, §2)
7. Compliance-Status: Checkliste abgehakt ([[02_Areas/Content_Creation/Compliance_Checkliste|Compliance_Checkliste]]) — Feld „Compliance ✓"
8. **Freigabe-Feld: „Freigegeben durch Mensch am …"** — ohne Datum kein Posting (hartes Gate aus der [[02_Areas/Content_Creation/SOP_Content_Engine|Engine]])

## 2. Kadenz & Slots (Startplan — nach 4 Wochen gegen eigene Daten justieren)

| Tag | YouTube | Instagram | TikTok |
|---|---|---|---|
| Mo | — | Reel 18:00 | Video 18:00 |
| Di | Short 16:00 | — | — |
| Mi | — | Karussell 12:00 | Video 19:00 |
| Do | Short 16:00 | Reel 18:00 | — |
| Fr | Long 15:00 (wenn Long-Woche) | — | Video 17:00 |
| Sa/So | — | Story-Recap | optional Test-Slot |

Regeln: nie 2 Posts derselben Plattform < 6 h Abstand; Slots sind Hypothesen — beste Zeiten aus den eigenen Analytics ablesen (Engine §6) und Tabelle aktualisieren.

## 3. Tracking (Affiliate-/Produkt-Attribution — Pflicht ab Lead-Magnet-Launch)

1. **Ein Link-Hub in der Bio** (Landingpage → eintragen: Tool/URL) — Plattform-Bios verlinken NUR dorthin
2. Jeder Kit-CTA bekommt einen parametrisierten Link: `?utm_source=<plattform>&utm_medium=video&utm_campaign=<serie>&utm_content=<slug>`
   Beispiel: `meinlink.de/vault?utm_source=tiktok&utm_medium=video&utm_campaign=agent-log&utm_content=agent-log-01`
3. Kürzel-/Deep-Links über den Link-Hub verwalten (Klick-Zahlen dort ablesbar) → Werte wandern wöchentlich in die Notion-Performance-Felder (Engine §6)
4. Affiliate-Links zusätzlich mit Programm-eigenem Sub-ID-Parameter, wo verfügbar (→ eintragen je Programm, [[02_Areas/Content_Creation/Monetarisierung_Referenz|Referenz §3]])

## 4. Weg A — Automatisiert über Post Proxy

**Anbindung (→ eintragen, sobald verifiziert):** Zugriffsweg = API / MCP / Webhook? · Auth-Mechanismus? · unterstützte Plattformen & Felder? · Rate-Limits? — Diese vier Antworten hier dokumentieren, DANN erst Weg A aktivieren. (Muster: [[02_Areas/Infrastruktur/Hermes_Agent_Doku|Hermes_Agent_Doku §3 MCP-Pattern]].)

**Ablauf (Hermes, Do-Slot der Engine):**
1. Notion-Ansicht „Bereit + Freigegeben" ziehen — NUR Kits mit Freigabe-Datum und Compliance ✓
2. Je Kit: Upload/Schedule-Call an Post Proxy mit Datei + Metadaten + Slot
3. Antwort (Post-ID/Status) in Notion-Feld „PostProxy-ID" schreiben, Status → „Geplant"
4. Fehlerfall: Status → „Fehler" + Fehlertext ins Kommentar-Feld; KEINE eigenmächtigen Wiederholungsversuche mit veränderten Inhalten — Mensch entscheidet
5. Nach Publish-Zeit: Live-Status prüfen, Status → „Veröffentlicht", Publish-URL eintragen

**Betriebsregeln (aus [[02_Areas/Infrastruktur/Hermes_Agent_Doku|Hermes-Doku §5]]):** Hermes meldet jede Schreiboperation; Löschen/Ändern live gestellter Posts nur nach expliziter Freigabe; nur offizielle Plattform-APIs über Post Proxy ([[02_Areas/Content_Creation/Plattform_Spielregeln|ToS]]).

## 5. Weg B — Manueller Fallback (funktioniert ab Tag 1, kein Blocker)

1. Hermes erzeugt aus der Notion-Ansicht „Bereit + Freigegeben" einen **Wochen-Postplan** als eine Übersicht: je Kit → Plattform, Slot, Dateiname, Titel/Caption zum Copy-Paste, Hashtags, Link
2. Mensch lädt zu den Slots nativ hoch (Plattform-Scheduler nutzen: YouTube Studio Planen, IG-Planungsfunktion, TikTok-Scheduler — alle können Terminierung, ein fester Upload-Termin pro Woche reicht!)
3. Publish-URLs zurück in Notion (2 Min) — sonst bricht die Analyse-Kette

**Regel:** Weg B ist der Standard, bis Weg A dokumentiert UND 2 Wochen fehlerfrei parallel gelaufen ist. Automatisierung ersetzt Handarbeit erst, wenn sie nachweislich zuverlässiger ist ([[02_Areas/Code_Standards/Persoenliche_Code_Konventionen/SOP_Code_Review|Review-Denke]]).

## 6. Fehlerliste (vor jedem Posting-Lauf)

- [ ] Alle Kits mit Freigabe-Datum UND Compliance ✓?
- [ ] Richtige Datei je Plattform (kein Wasserzeichen-Crosspost)?
- [ ] Tracking-Parameter im Link (source = tatsächliche Plattform)?
- [ ] Slots kollisionsfrei (< 6-h-Regel)?
- [ ] Nach dem Lauf: Stati + IDs/URLs in Notion aktualisiert?
