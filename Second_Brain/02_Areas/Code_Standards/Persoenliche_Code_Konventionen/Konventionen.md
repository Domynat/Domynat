---
tags:
  - Code
  - Standards
typ: Konventionen
erstellt: 2026-07-13
status: aktiv
---

# Persönliche Code-Konventionen

> **Zweck:** Jedes Modell, das für mich Code schreibt, hält sich an diese Datei. Sie definiert Stil, Prinzipien-Anwendung und Output-Format. Bei Konflikt mit Projektkonventionen gilt: **bestehender Projektstil schlägt diese Datei** (Konsistenz vor Geschmack) — Abweichung dann kurz benennen.

## 1. Prinzipien — angewandt, nicht rezitiert

**DRY (Don't Repeat Yourself) — mit Augenmaß:**
- Duplikation entfernen, wenn dieselbe LOGIK ≥ 3× vorkommt oder sich gemeinsam ändern MUSS
- NICHT abstrahieren bei zufälliger Ähnlichkeit ("falsche Abstraktion ist teurer als Duplikation") — zweimal Ähnliches darf stehen bleiben, bis das Muster klar ist (Rule of Three)

**SOLID — die zwei, die im Alltag zählen:**
- **S**ingle Responsibility: Eine Funktion tut EINE Sache; wenn der Name "und" enthält oder > ~40 Zeilen hat → aufteilen prüfen
- **D**ependency Inversion light: Abhängigkeiten (API-Clients, DB, Zeit, Zufall) als Parameter hereinreichen statt hart einbauen → testbar
- O/L/I: kennen, aber nicht kultisch — keine Interface-Hierarchien für Einweg-Skripte

**KISS/YAGNI:** Die einfachste Lösung, die das JETZIGE Problem löst. Keine Konfigurierbarkeit/Generik für hypothetische Zukünfte. Cleverness ist ein Warnsignal: Wenn ein Einzeiler eine Erklärung braucht, lieber drei lesbare Zeilen.

## 2. Python-Stil (bevorzugte Sprache für Daten/Tools)

- **PEP 8** als Basis; Formatierung nicht diskutieren, sondern `black`/`ruff format` (Default-Einstellungen)
- **Namen:** `snake_case` Funktionen/Variablen, `PascalCase` Klassen, `SCREAMING_SNAKE` Konstanten; Namen beschreiben WAS, nicht WIE (`monatsumsatz` statt `df2`)
- **Type Hints Pflicht** an öffentlichen Funktionssignaturen; innen optional
- **f-Strings** statt Konkatenation; `pathlib` statt `os.path`; Context Manager (`with`) für Ressourcen
- **Fehlerbehandlung:** spezifische Exceptions fangen, nie nackt `except:`; früh raus (`return`/`raise`) statt tiefer Verschachtelung (max. 3 Einrückungsebenen anstreben)
- Kleine Skripte: eine Datei mit `main()` + `if __name__ == "__main__":` — kein Framework-Overhead

## 3. JavaScript/TypeScript-Stil (Web/Frontend)

- **`const` per Default**, `let` nur bei Reassignment, nie `var`
- Moderne Syntax: Template Literals, Destructuring, `async/await` (keine `.then()`-Ketten), optionale Verkettung `?.`
- **Strikte Gleichheit `===`** immer
- Bei TypeScript: `strict: true`; `any` ist verboten außer mit Begründungskommentar
- Funktionen klein, pure Functions bevorzugen; DOM-/State-Seiteneffekte an den Rand (Event-Handler) drängen
- Formatierung: `prettier` Defaults

## 4. Kommentar-Konventionen

- Kommentare erklären **WARUM, nie WAS** (das WAS steht im Code): `# Retry, weil API bei Last sporadisch 503 liefert` ✅ / `# Schleife über Liste` ❌
- **Docstrings/JSDoc** an jeder öffentlichen Funktion: 1 Satz Zweck, Parameter nur wenn nicht selbsterklärend, Rückgabe, geworfene Fehler
- `TODO(name/datum):` mit Kontext; auskommentierter Code wird GELÖSCHT (Git erinnert sich)
- Kommentardichte an das umgebende Projekt anpassen

## 5. Output-Format bei Code-Antworten (für Modelle, verbindlich)

1. **Bei Updates bestehenden Codes: NUR die geänderten Stellen zeigen** — Datei + Funktion/Zeilenbereich benennen, unveränderten Code nicht wiederholen (Ausnahme: Nutzer bittet explizit um die ganze Datei)
2. Änderungs-Zusammenfassung in 1–3 Sätzen VOR dem Code: was & warum
3. Neue Dateien: vollständig, lauffähig, mit Imports
4. Annahmen explizit machen ("Ich nehme an: Python ≥ 3.11, keine externen Dependencies") statt stillschweigend entscheiden
5. Bei mehreren sinnvollen Wegen: EINEN empfehlen + 1 Satz warum, nicht drei halbe Lösungen
6. Vor Abgabe: [[02_Areas/Code_Standards/Persoenliche_Code_Konventionen/SOP_Code_Review|SOP_Code_Review]] mental durchlaufen

## 6. Projekt-Hygiene

- **Git:** kleine, thematisch geschlossene Commits; Messages: Imperativ-Zeile ≤ 72 Zeichen, bei Bedarf Body mit Warum. Nie Secrets/Keys committen (`.env` + `.gitignore` von Anfang an)
- **Dependencies:** so wenige wie möglich; vor jeder neuen Library fragen: "Sind das < 30 Zeilen selbst?" 
- **Tests:** mindestens für Kernlogik + bekannte Bugfälle (Regression); Testname beschreibt das Verhalten (`test_break_even_rundet_auf`)
- **Struktur:** Verzeichnisnamen sprechend; Konfiguration von Logik trennen; magische Zahlen als benannte Konstanten
