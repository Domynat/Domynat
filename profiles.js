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
    title: "WIM",
    text: "Legende auf dem Court, Bruder fürs Leben. 🏀 Im 1-gegen-1 gegen mich reden wir lieber nicht über die Statistik. 😏 Revanche steht.",
  },

  maik: {
    emoji: "🎧",
    title: "MAIK",
    text: "DJ des Vertrauens. 🎧 Wenn Playlists ein Studienfach wären, hättest du längst den Doktor. Dreh auf.",
  },

  marcel: {
    emoji: "🧥",
    title: "MARCEL",
    text: "Wandelnde Vogue-Ausgabe. 🧥 Wir tragen 'Klamotten', du trägst 'Fits'. Wie immer: ganz oben.",
  },

  // ---- Ihre Freundinnen ----

  yomna: {
    emoji: "⚡",
    title: "YOMNA",
    text: "Wer hat dich an die Steckdose angeschlossen? ⚡ 100.000 Volt pure Energie – bleib genau so laut.",
  },

  clara: {
    emoji: "🎮",
    title: "CLARA",
    text: "Final-Boss-Energie. 🎮 Auf die beste Art ein bisschen drüber – und Wim findet's heimlich mega. 👀 (du hast nichts gesehen)",
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
    text:
      "Die Sonne weckt den neuen Tag,\n" +
      "doch heller strahlt, was ich so mag.\n" +
      "Guten Morgen, Liebste mein –\n" +
      "mit dir wird jeder Tag ein Schein.",
  },

  nacht: {
    emoji: "🌙",
    title: "Gute Nacht",
    text:
      "Der Mond zieht leis am Himmel auf,\n" +
      "ich leg mein Herz in deinen Lauf.\n" +
      "Schlaf gut, mein Schatz, und träum von mir,\n" +
      "denn jede Nacht gehör ich dir.",
  },

  liebe: {
    emoji: "❤️",
    title: "Ich liebe dich",
    text:
      "Kein Grund, kein Anlass, einfach so:\n" +
      "Du machst mein ganzes Herz so froh.\n" +
      "Ich liebe dich, ganz ohne Frist,\n" +
      "weil du mein liebster Mensch nun bist.",
  },

  vermisst: {
    emoji: "🥺",
    title: "Ich vermiss dich",
    text:
      "Ein leerer Stuhl, ein stiller Raum,\n" +
      "ich seh dich noch in jedem Traum.\n" +
      "Ich vermiss dich, komm bald her,\n" +
      "denn ohne dich fällt alles schwer.",
  },

  jahrestag: {
    emoji: "🥂",
    title: "Alles Gute zum Jahrestag!",
    text:
      "Ein Jahr voll Lachen, Hand in Hand,\n" +
      "durch jedes Glück, durch jede Wand.\n" +
      "Ich würd's sofort noch einmal wagen –\n" +
      "und tausend weitere Jahre tragen.",
  },

  geburtstag: {
    emoji: "🎂",
    title: "Alles Liebe zum Geburtstag!",
    text:
      "Heut tanzt die Welt nur so für dich,\n" +
      "ein Kerzenmeer, ein Strahlen, sich.\n" +
      "Alles Liebe, Schönste mein –\n" +
      "heut sollst du ganz Prinzessin sein.",
  },

  traurig: {
    emoji: "🫂",
    title: "Kopf hoch, mein Schatz",
    text:
      "Wenn graue Wolken dich umzieh'n,\n" +
      "lass mich dein kleiner Schirm dir blüh'n.\n" +
      "Schlechte Tage zieh'n vorbei –\n" +
      "ich aber bleib, treu und dabei.",
  },

  lachen: {
    emoji: "😊",
    title: "Lächel mal",
    text:
      "Dein Lachen klingt wie schönste Musik,\n" +
      "es trifft mein Herz im Augenblick.\n" +
      "Lächel, Liebste, nur für mich –\n" +
      "nichts auf der Welt schlägt sicherlich dich.",
  },

  kuss: {
    emoji: "😘",
    title: "Ein Kuss für dich",
    text:
      "Ein sanfter Kuss, ganz weich und leis,\n" +
      "auf deine Stirn auf meine Weis'.\n" +
      "Schließ kurz die Augen, fühl ihn sacht –\n" +
      "ich hab ihn dir hierher gebracht.",
  },

  zukunft: {
    emoji: "🔮",
    title: "Unsere Zukunft",
    text:
      "Ich seh uns zwei in ferner Zeit,\n" +
      "noch immer Hand in Hand, bereit.\n" +
      "Voll Abenteuer, Lach und Glück –\n" +
      "mit dir will ich kein Stück zurück.",
  },

  danke: {
    emoji: "🙏",
    title: "Danke, dass es dich gibt",
    text:
      "Danke, dass du Ja gesagt,\n" +
      "dass du mein Herz so leicht gemacht.\n" +
      "Danke einfach, dass du bist –\n" +
      "das Schönste, was mir je geglückt ist.",
  },

  sterne: {
    emoji: "⭐",
    title: "Unter den Sternen",
    text:
      "Am Nachthimmel, so weit, so klar,\n" +
      "ist doch kein Stern wie du so wahr.\n" +
      "Von allen Lichtern, groß und fein,\n" +
      "wirst du für immer meins allein.",
  },

  zuhause: {
    emoji: "🏡",
    title: "Mein Zuhause",
    text:
      "Kein Ort aus Stein, kein Haus, kein Raum –\n" +
      "mein Zuhause bist du, mein Traum.\n" +
      "Wo du auch bist, da will ich sein,\n" +
      "in deinen Armen heim und rein.",
  },

  tanz: {
    emoji: "💃",
    title: "Tanz mit mir",
    text:
      "Komm, leg die Hand in meine sacht,\n" +
      "wir tanzen leis durch jede Nacht.\n" +
      "Ob Küche, Regen, ganz egal –\n" +
      "mit dir wird jeder Schritt total.",
  },

  abenteuer: {
    emoji: "🌍",
    title: "Unser Abenteuer",
    text:
      "Pack deine Träume, komm mit mir,\n" +
      "die ganze Welt, sie wartet hier.\n" +
      "Mit dir wird jeder Weg zur Fahrt,\n" +
      "ein Abenteuer, wunderbar und zart.",
  },

  kaffee: {
    emoji: "☕",
    title: "Kaffee mit dir",
    text:
      "Zwei Tassen dampfen, Morgenlicht,\n" +
      "dein müdes, schönes Angesicht.\n" +
      "Kein Ort der Welt ist halb so nett\n" +
      "wie du und ich, noch warm im Bett.",
  },

  regen: {
    emoji: "🌧️",
    title: "Auch im Regen",
    text:
      "Es tropft ans Fenster, grau und sacht,\n" +
      "doch du hast Sonne mitgebracht.\n" +
      "Komm kuschle dich ganz nah an mich –\n" +
      "im Regen lieb ich nur noch dich.",
  },

  mut: {
    emoji: "🦁",
    title: "Du schaffst das",
    text:
      "Du bist viel stärker, als du denkst,\n" +
      "ein Löwenherz, das Mut verschenkt.\n" +
      "Geh nur voran, ich halte dich –\n" +
      "du schaffst das alles, sicherlich.",
  },

  stolz: {
    emoji: "🌟",
    title: "Ich bin so stolz auf dich",
    text:
      "Was du auch tust, wohin du strebst,\n" +
      "ich staune, wie du Großes lebst.\n" +
      "So stolz bin ich, du glaubst es kaum,\n" +
      "auf dich, mein Mädchen, meinen Traum.",
  },

  immer: {
    emoji: "♾️",
    title: "Für immer",
    text:
      "Was auch geschieht, was kommen mag,\n" +
      "ich bleib bei dir an jedem Tag.\n" +
      "Kein Ende kennt, was uns vereint –\n" +
      "für immer, bis kein Stern mehr scheint.",
  },

  schatz: {
    emoji: "💎",
    title: "Mein größter Schatz",
    text:
      "Kein Gold, kein Glanz, kein Edelstein\n" +
      "kann je so wertvoll für mich sein.\n" +
      "Mein größter Schatz, das bist nur du –\n" +
      "ein Lächeln, und mein Herz gibt Ruh.",
  },

  umarmung: {
    emoji: "🤗",
    title: "Eine feste Umarmung",
    text:
      "Komm her zu mir, ich halt dich fest,\n" +
      "mein Arm dein warmes, sich'res Nest.\n" +
      "Drück dich ganz nah, lass los die Welt –\n" +
      "nur du und ich, sonst nichts mehr zählt.",
  },

  mond: {
    emoji: "🌝",
    title: "Bis zum Mond",
    text:
      "Ich lieb dich bis zum Mond hinauf\n" +
      "und tausendfach zurück im Lauf.\n" +
      "Und ist der Mond auch mal nicht da,\n" +
      "mein Herz bleibt dir doch immer nah.",
  },

  sonne: {
    emoji: "☀️",
    title: "Meine Sonne",
    text:
      "Du bist die Sonne, die mich weckt,\n" +
      "die jeden grauen Tag entdeckt.\n" +
      "Mein Licht, mein Strahl, mein warmer Schein –\n" +
      "du, meine Sonne, ganz allein.",
  },

  lieblingsmensch: {
    emoji: "💖",
    title: "Mein Lieblingsmensch",
    text:
      "Von Milliarden, weit und breit,\n" +
      "bist du mein Mensch für alle Zeit.\n" +
      "Mein Liebling, einzig, auserwählt –\n" +
      "der eine, der für mich nur zählt.",
  },

  herz: {
    emoji: "💓",
    title: "Du hast mein Herz",
    text:
      "Nimm es, es ist längst schon dein,\n" +
      "mein Herz – es will nur bei dir sein.\n" +
      "Pass gut drauf auf, halt es ganz warm,\n" +
      "und leg dich nachts in meinen Arm.",
  },

  // ---- Eure ganz persönlichen Codewörter ----

  prinzessin: {
    emoji: "👑",
    title: "Meine Prinzessin",
    text:
      "Trag deine Krone, steh ganz hoch,\n" +
      "denn meine Prinzessin bist du doch.\n" +
      "Kein Thron der Welt ist je so schön\n" +
      "wie dich an meiner Seit zu seh'n.",
  },

  ananas: {
    emoji: "🍍",
    title: "Reich mit dir",
    text:
      "Man sagt, wer reich ist, der besitzt\n" +
      "'ne Ananas, die stolz dort sitzt.\n" +
      "Doch reich bin ich auf andre Art:\n" +
      "Ich hab ja dich – wie wunderbar.",
  },

  katzen: {
    emoji: "🐱",
    title: "Wie ein Kätzchen",
    text:
      "Du liebst die Katzen, flauschig, klein,\n" +
      "ihr leises Schnurren, weich und fein.\n" +
      "Und so wie sie, ganz kuschelweich,\n" +
      "schmieg ich mich an dich, liebesreich.",
  },

  mango: {
    emoji: "🥭",
    title: "Getrocknete Mango",
    text:
      "Getrocknete Mango, süß und fein,\n" +
      "beim Lernen teilen wir sie zwein.\n" +
      "Auf deiner Arbeit, Stück für Stück –\n" +
      "in jedem Bissen steckt ein Glück.",
  },

  // Tipp: gib Sedef die Codewörter nach und nach persönlich,
  // dann ist jede Nachricht eine kleine Überraschung.
};

// =======================================================================
//  GRÜNDE-KARTEN
//  Erscheinen, wenn Sedef "Ja" sagt, und sind danach jederzeit unter
//  "💖 Gründe für dich" abrufbar. Schreib so viele, wie du willst –
//  einfach jede Zeile in Anführungszeichen, getrennt mit Komma.
// =======================================================================

const reasons = [
  "Weil dein Lächeln meinen ganzen Tag rettet.",
  "Weil du meine Sonne bist – an jedem grauen Tag. ☀️",
  "Weil getrocknete Mango mit dir tausendmal besser schmeckt. 🥭",
  "Weil du echte Prinzessinnen-Energie hast. 👑",
  "Weil ich mit dir reich bin – ganz ohne Ananas. 🍍",
  "Weil du Katzen liebst und selbst so kuschelig bist. 🐱",
  "Weil ich bei dir einfach ich sein kann.",
  "Weil du mich zum Lachen bringst, auch wenn mir nicht danach ist.",
  "Weil Lernen mit dir nie langweilig wird.",
  "Weil du an mich glaubst, wenn ich es selbst nicht tue.",
  "Weil jede Minute mit dir viel zu schnell vergeht.",
  "Weil du genau so bist, wie du bist – perfekt für mich.",
];

// =======================================================================
//  EASTER EGGS (Hauptsuche)
//  Tippt man eines dieser Wörter in die SUCHLEISTE (nicht im Geheim-
//  Bereich), gibt's einen kleinen versteckten Spaß: ein Emoji-Regen
//  und eine Mini-Nachricht. Wort klein schreiben.
// =======================================================================

const easterEggs = {
  ananas:  { emoji: "🍍", message: "Reich-Sein-Modus aktiviert! 🍍💰" },
  mango:   { emoji: "🥭", message: "Mango-Regen! Lern-Snack incoming. 🥭" },
  katze:   { emoji: "🐱", message: "Miau! 🐱" },
  katzen:  { emoji: "🐱", message: "Eine ganze Katzen-Parade! 🐱🐈" },
  sonne:   { emoji: "☀️", message: "Sonnenschein für dich! ☀️" },
  herz:    { emoji: "❤️", message: "Ganz viel Liebe! ❤️" },
  pizza:   { emoji: "🍕", message: "Pizza-Zeit! 🍕" },
  basketball: { emoji: "🏀", message: "Buzzer Beater! 🏀" },
};
