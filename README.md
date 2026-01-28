# Mittelalterliches Städte- & Strategie-Spiel (Konzept + Umsetzungsplan)

## Kurzbeschreibung
Ein rundenbasiertes, systemgetriebenes Strategie-Spiel im mittelalterlichen Setting. Der Spieler baut eine Stadt auf, verwaltet Ressourcen und formt eine Armee, während Diplomatie, Politik, Wirtschaft (BWL/VWL), menschliche Psychologie sowie militärische Strategie ineinandergreifen. Als Inspirationsquelle dient **Mount & Blade II: Bannerlord** (Stadt-/Clan-Strukturen, Fraktionen, Feldzüge), jedoch mit stärkerem Fokus auf komplexe Systeme und Management.

## Design-Ziele
- **Systemische Tiefe** statt Skript-Events: Märkte, Politik und Moral reagieren aufeinander.
- **Entscheidungen mit Langzeitfolgen**: Steuerpolitik, Rekrutierung, Kriegsausgaben.
- **Sandbox mit Fokus**: Viele Wege zum Erfolg (Handel, Diplomatie, Expansion).

## Kernfantasie
Vom kleinen Lehnsherrn zum Machtzentrum: Dorf → Stadt → Region → Großmacht.

---

# Spielsysteme

## 1) Ressourcen & Produktion
- **Rohstoffe**: Holz, Stein, Eisen, Getreide, Vieh, Textilien.
- **Verarbeitung**: Schmieden (Waffen/Rüstungen), Mühlen (Mehl), Gerbereien (Leder).
- **Logistik**: Lagerkapazität, Transportwege, Verluste (Diebstahl, Verderb).

## 2) Stadtentwicklung
- **Gebäude-Typen**
  - Infrastruktur: Straßen, Lagerhäuser, Brunnen
  - Wirtschaft: Märkte, Werkstätten, Hafen
  - Politik: Rathaus, Gericht, Diplomatenviertel
  - Militär: Kasernen, Wachposten, Belagerungswerkstatt
- **Bevölkerung**: Bauern, Handwerker, Händler, Adelige, Klerus.
- **Wohlstand**: Steuern, Löhne, Konsum, Preisniveaus, Zuzug/Abwanderung.

## 3) Militär
- **Truppentypen**: Miliz, Infanterie, Bogenschützen, Kavallerie.
- **Ausrüstung & Versorgung**: Waffen, Rüstungen, Nahrung, Sold.
- **Moral & Disziplin**: abhängig von Siegen, Versorgung, Führungsstil.
- **Kriegskosten**: Sold, Nachschub, Kriegserschöpfung.

## 4) Diplomatie & Politik
- **Fraktionen**: Adelsfamilien, Städtebünde, religiöse Orden.
- **Beziehungen**: Vertrauen, Furcht, Interessenüberschneidungen.
- **Politische Aktionen**: Bündnisse, Heiraten, Handelsabkommen, Tributzahlungen.

## 5) Volkswirtschaft (VWL)
- **Angebot & Nachfrage**: Preisschwankungen, Marktengpässe.
- **Regionale Spezialisierung**: Landwirtschaft, Bergbau, Handwerk.
- **Handelsrouten**: Risiko durch Überfälle, Zölle, saisonale Schwankungen.

## 6) BWL & Verwaltung
- **Budgetplanung**: Einnahmen vs. Ausgaben.
- **Investitionen**: Bauprojekte, Forschung, Militärreformen.
- **Risiko-Management**: Rücklagen, Versicherungen, Notfallpläne.

## 7) Psychologie & Verhalten
- **Loyalität**: beeinflusst durch Gerechtigkeit, Sicherheit, Wohlstand.
- **Furcht & Hoffnung**: beeinflussen Steuern, Rekrutierung, Aufstände.
- **Kulturelle Werte**: Prestige, Religion, Traditionen.

## 8) Militärische Strategie
- **Kampagnen**: Planung von Feldzügen, Nachschublinien.
- **Gelände & Wetter**: beeinflussen Schlachten und Versorgung.
- **Spionage**: Informationsvorteile, Sabotage.

---

# Spieler-Loop
1. Ressourcen sammeln & Wirtschaft ankurbeln.
2. Stadt ausbauen & Bevölkerung stabilisieren.
3. Diplomatische Beziehungen pflegen oder ausnutzen.
4. Armee aufbauen & strategisch einsetzen.
5. Auf Ereignisse reagieren (Krisen, Kriege, Intrigen).

---

# Mechaniken, die miteinander verzahnen

## Preisbildung & Politik
- Hohe Steuern erhöhen kurzfristig Einnahmen, senken aber Loyalität und Zuzug.
- Niedrige Zölle steigern Handel, schwächen jedoch Staatskasse.

## Moral & Versorgung
- Versorgungskrisen senken Moral → Desertionen → schwächere Armee → mehr Unsicherheit.

## Diplomatie & Wirtschaft
- Handelsabkommen erhöhen Wohlstand, können aber Abhängigkeiten erzeugen.

## Psychologie & Aufstände
- Angstpolitik senkt kurzfristig Opposition, erzeugt jedoch langfristig Instabilität.

---

# MVP (Minimal spielbar)

**Ziel:** Ein funktionierender Kernloop mit Stadtbau, Wirtschaft und einfacher Diplomatie.

## Inhalte MVP
- 1 Stadt, 2 Dörfer, 2 KI-Fraktionen
- 6 Ressourcen (Holz, Stein, Eisen, Getreide, Vieh, Textilien)
- 8 Gebäudetypen
- 4 Truppentypen
- Grundlegende Diplomatie (Frieden, Handel, Tribut)
- Einfache Ereignisse (Dürre, Überfälle)

## MVP-Loop
- Produzieren → Bauen → Rekrutieren → Handeln → Ereignisse reagieren

---

# Erweiterungen (nach MVP)

## Diplomatie-Upgrade
- Heiraten, Intrigen, Spionage

## Politik-Upgrade
- Gesetze, Parlamente, Fraktionskämpfe

## Militär-Upgrade
- Belagerungen, Kriegsdoktrinen, Veteranen

## Psychologie-Upgrade
- Persönlichkeitsprofile für NPCs

---

# Beispiel-UI (Bildschirme)
- Weltkarte (Dörfer, Städte, Armeen)
- Stadt-Management (Bau/Produktion/Bevölkerung)
- Diplomatie-Panel (Beziehungen, Verträge)
- Militär-Panel (Truppen, Nachschub, Moral)

---

# Technische Umsetzung (Vorschlag)

## Engine / Tech-Stack
- **Unity** oder **Godot** für schnelle Prototypen
- Datengetriebene Systeme (JSON/YAML für Balancing)

## System-Architektur (high level)
- **Simulation Layer**: Wirtschaft, Bevölkerung, Märkte
- **Decision Layer**: KI-Fraktionen, Diplomatie, Events
- **Presentation Layer**: UI, Kartenansicht

---

# Inspirationspunkte aus Bannerlord
- Fraktionssysteme
- Clanstrukturen und Loyalität
- Städte, Dörfer, Burgen
- Truppentraining & Upgrades

---

# Nächste Schritte
1. MVP-Loop als Prototyp definieren
2. Datenmodell (Ressourcen, Gebäude, Fraktionen) festlegen
3. Grundlegendes UI & Simulation implementieren

---

## Vision
Ein tiefes, aber zugängliches Sandbox-Spiel, in dem jede Entscheidung durch wirtschaftliche, soziale und militärische Systeme spürbare Konsequenzen hat.

---

# Wie du als Nächstes weitermachst (konkret)

## 1) Entscheide dich für eine Engine
- **Godot** (sehr schnell für 2D/Prototyping) oder **Unity** (großes Ökosystem).

## 2) Lege den MVP fest (klein halten)
- 1 Stadt, 2 Dörfer, 2 KI-Fraktionen
- 6 Ressourcen, 8 Gebäude, 4 Truppentypen
- Frieden/Handel/Tribut, 2 einfache Events

## 3) Baue den ersten spielbaren Prototyp (1–2 Wochen)
**Minimaler Loop**: Ressourcen produzieren → Gebäude bauen → Truppen rekrutieren → Ereignis verarbeiten

### Technische Aufgaben (sehr konkret)
1. **Datenmodell erstellen** (JSON oder ScriptableObjects/Resources)
2. **Simulations-Tick** (z. B. 1 Tag = 1 Tick)
3. **UI mit 3 Screens** (Stadt, Diplomatie, Militär)
4. **Speichern/Laden** (einfaches JSON)

## 4) Wie du es dann spielen kannst
Sobald der Prototyp läuft, startest du ihn direkt aus der Engine:
- **Godot**: Projekt öffnen → Play drücken
- **Unity**: Projekt öffnen → Play drücken

## 5) Wenn du willst, kann ich dir den Start-Code vorbereiten
Sag mir einfach:
- Welche Engine du willst (Godot oder Unity)
- Ob 2D oder 3D

Dann erstelle ich dir ein Grundgerüst (Projektstruktur + Datenmodelle + einfache Simulation + UI-Screens).

---

# Unity 2D Starter (bereitgestellt)
Im Ordner `Unity2DPrototype` findest du ein minimales Unity-2D-Grundgerüst mit:
- einer einfachen Simulation (`Simulation.cs`)
- einem Game-State (`GameState.cs`)
- einem Bootstrap-Skript für den Tick (`GameBootstrap.cs`)
- einer JSON-Startkonfiguration (`Assets/StreamingAssets/initial_state.json`)

## So startest du den Prototyp
1. Unity öffnen → **Open Project** → `Unity2DPrototype` auswählen.
2. In der Szene ein **Empty GameObject** erstellen.
3. `GameBootstrap` als Component hinzufügen.
4. **Play** drücken.

In der Console siehst du den Tages-Tick und die Ressourcenänderungen.
