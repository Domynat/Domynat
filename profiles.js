// =======================================================================
//  HIER kannst du Namen hinzufügen oder ändern.  Du musst nichts können –
//  einfach die Beispiele kopieren und deine Texte einsetzen.
// =======================================================================
//
//  So funktioniert ein Eintrag:
//
//    "name": { emoji: "😀", title: "Überschrift", text: "Nachricht" },
//
//  - Den Namen IMMER klein schreiben (z. B. "emir", nicht "Emir").
//    Beim Tippen ist Groß-/Kleinschreibung dann egal.
//  - emoji  = das große Emoji oben
//  - title  = die geschwungene Überschrift
//  - text   = die Nachricht darunter
//  - Jede Zeile endet mit einem Komma ,
//
//  Sedef ist der besondere Eintrag (dein Antrag) und steht ganz unten –
//  den bitte so lassen.
// =======================================================================

const profiles = {

  // ---- Beispiele für deine Freunde / ihre Freunde (gern ändern!) ----

  emir: {
    emoji: "🎮",
    title: "Yo Emir!",
    text: "Bester Gaming-Buddy aller Zeiten. Wann zocken wir wieder?",
  },

  lena: {
    emoji: "🌻",
    title: "Hey Lena!",
    text: "Schön, dass es dich gibt. Bleib so sonnig wie du bist!",
  },

  can: {
    emoji: "⚽",
    title: "Was geht, Can!",
    text: "Nächstes Spiel gewinnen wir – versprochen.",
  },

  ela: {
    emoji: "💅",
    title: "Hi Ela!",
    text: "Königin. Mehr muss man dazu nicht sagen. 👑",
  },

  // ---- NICHT ändern: Das ist Sedefs großer Moment ----
  sedef: {
    special: true, // löst den Antrag aus statt einer normalen Karte
  },
};
