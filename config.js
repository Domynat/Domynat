// =======================================================================
//  BRIEFKASTEN-EINSTELLUNGEN
// =======================================================================
//  Damit ihr euch über ZWEI verschiedene Geräte Nachrichten schreiben
//  könnt, braucht der Briefkasten einen kostenlosen Online-Speicher.
//
//  So bekommst du die zwei Werte (dauert ~5 Minuten, alles gratis):
//
//   1. Geh auf  https://jsonbin.io  und klick "Sign up" (mit E-Mail).
//   2. Oben auf "CREATE BIN".
//   3. Lösch den Inhalt im Feld und schreib genau das rein:
//
//          { "messages": [] }
//
//      Dann oben rechts auf "Save" / das Disketten-Symbol.
//   4. Jetzt steht in der Adresszeile eine lange ID hinter /b/, z. B.
//          https://jsonbin.io/app/bins/65a1b2c3d4e5f6...
//      Diese ID (das Stück nach /bins/) ist deine  binId.
//   5. Links im Menü auf "API KEYS". Kopier den "MASTER KEY"
//      (oder erstell einen Access Key). Das ist dein  apiKey.
//   6. Trag beide unten zwischen die Anführungszeichen ein, speichern,
//      und auf GitHub hochladen (committen). Fertig!
//
//  Lässt du beide Felder LEER, funktioniert der Briefkasten weiterhin –
//  dann aber nur auf dem jeweiligen Gerät (nicht geteilt).
// =======================================================================

const mailboxConfig = {
  binId: "",   // hier deine Bin-ID einsetzen, z. B. "65a1b2c3d4e5f6a7b8c9d0e1"
  apiKey: "",  // hier deinen JSONBin Master Key einsetzen
};
