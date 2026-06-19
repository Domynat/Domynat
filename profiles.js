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

  morgen: {
    emoji: "🌅",
    title: "Guten Morgen, Schönste",
    text: "Mein erster Gedanke heute warst du. Hab einen wunderschönen Tag. ☀️",
  },

  nacht: {
    emoji: "🌙",
    title: "Schlaf schön",
    text: "Egal wie mein Tag war – an dich zu denken macht ihn besser. Träum süß. 💤❤️",
  },

  liebe: {
    emoji: "❤️",
    title: "Ich liebe dich",
    text: "Einfach so, ohne Grund, ohne Anlass. Ich liebe dich – heute, morgen und immer.",
  },

  vermisst: {
    emoji: "🥺",
    title: "Ich vermiss dich",
    text: "Gerade in diesem Moment wünschte ich, du wärst hier bei mir. 💕",
  },

  jahrestag: {
    emoji: "🥂",
    title: "Alles Gute zum Jahrestag!",
    text: "Ein Jahr mit dir – und ich würde sofort wieder Ja sagen. 💍",
  },

  geburtstag: {
    emoji: "🎂",
    title: "Alles Liebe zum Geburtstag!",
    text: "Heute feiern wir den besten Menschen der Welt: dich. 🥳🎈",
  },

  traurig: {
    emoji: "🫂",
    title: "Kopf hoch, mein Schatz",
    text: "Schlechte Tage gehen vorbei – ich bleibe. Ich bin für dich da, immer. 🤍",
  },

  lachen: {
    emoji: "😊",
    title: "Lächel mal",
    text: "Dein Lächeln ist mein Lieblingsanblick auf der ganzen Welt. Zeig es mir. 😄",
  },

  kuss: {
    emoji: "😘",
    title: "Ein Kuss für dich",
    text: "Stell dir vor, ich gebe dir gerade einen ganz sanften Kuss auf die Stirn. 💋",
  },

  zukunft: {
    emoji: "🔮",
    title: "Unsere Zukunft",
    text: "Ich sehe noch so viele Abenteuer, Lacher und Umarmungen mit dir vor uns. 🌷",
  },

  danke: {
    emoji: "🙏",
    title: "Danke, dass es dich gibt",
    text: "Danke, dass du Ja gesagt hast. Danke, dass du einfach du bist. 💖",
  },

  sterne: {
    emoji: "⭐",
    title: "Unter den Sternen",
    text: "Von allen Sternen am Himmel bist du der hellste in meinem Leben. ✨",
  },

  zuhause: {
    emoji: "🏡",
    title: "Mein Zuhause",
    text: "Zuhause ist kein Ort für mich – Zuhause bist du. 🤍",
  },

  tanz: {
    emoji: "💃",
    title: "Tanz mit mir",
    text: "Egal ob in der Küche oder im Regen – mit dir würde ich überall tanzen. 🕺",
  },

  abenteuer: {
    emoji: "🌍",
    title: "Unser Abenteuer",
    text: "Mit dir an meiner Seite wird selbst der normalste Tag zum Abenteuer. 🚀",
  },

  kaffee: {
    emoji: "☕",
    title: "Kaffee mit dir",
    text: "Der schönste Morgen ist der mit dir, einem Kaffee und ganz viel Zeit. 🥐",
  },

  regen: {
    emoji: "🌧️",
    title: "Auch im Regen",
    text: "Mit dir sind sogar Regentage schön. Kuscheln wir uns einfach ein. ☔💞",
  },

  mut: {
    emoji: "🦁",
    title: "Du schaffst das",
    text: "Du bist stärker, als du denkst. Und ich glaube an dich – immer. 💪",
  },

  stolz: {
    emoji: "🌟",
    title: "Ich bin so stolz auf dich",
    text: "Egal was du tust – ich bin unendlich stolz, dich an meiner Seite zu haben.",
  },

  immer: {
    emoji: "♾️",
    title: "Für immer",
    text: "Was auch immer kommt: Ich bleibe an deiner Seite. Versprochen. 🤞❤️",
  },

  schatz: {
    emoji: "💎",
    title: "Mein größter Schatz",
    text: "Kein Gold der Welt ist so wertvoll wie ein einziges Lächeln von dir.",
  },

  umarmung: {
    emoji: "🤗",
    title: "Eine feste Umarmung",
    text: "Stell dir vor, ich halte dich gerade ganz fest. Lass mich nicht los. 💕",
  },

  mond: {
    emoji: "🌝",
    title: "Bis zum Mond",
    text: "Ich liebe dich bis zum Mond – und unendlich oft wieder zurück. 🚀",
  },

  sonne: {
    emoji: "☀️",
    title: "Mein Sonnenschein",
    text: "Selbst an grauen Tagen bringst du mein Herz zum Leuchten. 🌻",
  },

  lieblingsmensch: {
    emoji: "💖",
    title: "Mein Lieblingsmensch",
    text: "Von allen Menschen auf der Welt bist du genau der eine, den ich will.",
  },

  herz: {
    emoji: "💓",
    title: "Du hast mein Herz",
    text: "Es gehört dir – ganz allein und für immer. Pass gut darauf auf. 🔐❤️",
  },

  // Tipp: gib Sedef die Codewörter nach und nach persönlich,
  // dann ist jede Nachricht eine kleine Überraschung.
};
