// =======================================================================
//  HIER kannst du Namen, Geheimnisse usw. ändern. Du musst nichts können –
//  einfach die Beispiele kopieren und deine Texte einsetzen.
// =======================================================================
//
//  EIN NAME sieht so aus:
//
//    "name": { emoji: "😀", title: "Überschrift", text: "Nachricht" },
//
//  - Den Namen IMMER klein schreiben (z. B. "wim", nicht "Wim").
//    Beim Tippen ist Groß-/Kleinschreibung dann egal.
//  - Jede Zeile endet mit einem Komma ,
//  - Sedef steht ganz unten und ist dein Antrag – bitte so lassen.
// =======================================================================

const profiles = {

  // ---- Deine Freunde ----

  wim: {
    emoji: "🏀",
    title: "Yo Wim!",
    text: "Mein bester Freund. Auf dem Basketballplatz unschlagbar – zumindest fast. 😏 Nächstes 1-gegen-1 gewinn ich!",
  },

  maik: {
    emoji: "🎧",
    title: "Was geht, Maik!",
    text: "Der Mann mit den besten Playlists weit und breit. Schick mal wieder was Neues für die Ohren!",
  },

  marcel: {
    emoji: "🧥",
    title: "Hey Marcel!",
    text: "Style-Ikone. Egal wann, egal wo – dein Outfit sitzt immer. Wie machst du das nur?",
  },

  // ---- Ihre Freundinnen ----

  yomna: {
    emoji: "⚡",
    title: "Hiii Yomna!",
    text: "Pure Energie auf zwei Beinen! Mit dir wird's nie langweilig. 🌟",
  },

  clara: {
    emoji: "🎮",
    title: "Hey Clara!",
    text: "Gamerin und ein bisschen verrückt – aber genau das ist dein Charme. Zumindest würde Wim das so sagen. 👀💘",
  },

  // ---- NICHT ändern: Das ist Sedefs großer Moment ----
  sedef: {
    special: true, // löst den Antrag aus statt einer normalen Karte
  },
};

// =======================================================================
//  GEHEIME NACHRICHTEN (Feature 3)
//  Nach dem "Ja" gibt es einen Bereich, in dem Sedef ein Codewort tippen
//  kann. Passt es, erscheint eine versteckte Überraschung.
//  So kannst du z. B. zum Jahrestag ein neues Codewort vereinbaren.
//
//  Codewort IMMER klein schreiben.
// =======================================================================

const secrets = {

  jahrestag: {
    emoji: "🥂",
    title: "Alles Gute zum Jahrestag!",
    text: "Ein Jahr mit dir – und ich würde sofort wieder Ja sagen. 💍",
  },

  guteN8: {
    emoji: "🌙",
    title: "Schlaf schön",
    text: "Egal wie mein Tag war – an dich zu denken macht ihn besser. Träum süß. 💤❤️",
  },

  // Tipp: gib Sedef ein Codewort persönlich, damit nur sie es kennt.
};
