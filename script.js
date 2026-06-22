// --- Test-Reset ---
//   ?reset     löscht Test-Daten lokal (Zähler-Startdatum + lokaler Briefkasten)
//   ?resetall  löscht zusätzlich den ONLINE-Briefkasten (alle Nachrichten!)
(function handleReset() {
  const q = location.search.toLowerCase();
  if (!q.includes("reset")) return;

  localStorage.removeItem("togetherSince");
  localStorage.removeItem("mailbox");

  const wipeOnline =
    q.includes("resetall") &&
    typeof mailboxConfig !== "undefined" &&
    mailboxConfig.binId &&
    mailboxConfig.apiKey;

  const finish = () => {
    alert("Test-Daten gelöscht! Der Zähler startet beim nächsten 'Ja' neu. 💕");
    location.replace(location.pathname);
  };

  if (wipeOnline) {
    fetch(`https://api.jsonbin.io/v3/b/${mailboxConfig.binId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": mailboxConfig.apiKey,
      },
      body: JSON.stringify({ messages: [] }),
    }).finally(finish);
  } else {
    finish();
  }
})();

// --- Schwebende Herzen im Hintergrund (erst im romantischen Modus) ---
const heartsBg = document.getElementById("heartsBg");
const heartEmojis = ["💖", "💕", "💗", "❤️", "🌸", "💞", "✨"];
let heartsTimer = null;

function spawnHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 18 + Math.random() * 28 + "px";
  const duration = 6 + Math.random() * 6;
  heart.style.animationDuration = duration + "s";
  heartsBg.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}

// Romantischen Modus einschalten: rosa Theme + Herzen
function activateRomanticMode() {
  document.body.classList.add("romantic");
  if (!heartsTimer) heartsTimer = setInterval(spawnHeart, 500);
}

// --- Elemente ---
const searchScreen = document.getElementById("searchScreen");
const searchForm = document.getElementById("searchForm");
const nameInput = document.getElementById("nameInput");
const searchError = document.getElementById("searchError");

const card = document.getElementById("card");
const profileCard = document.getElementById("profileCard");
const profileEmoji = document.getElementById("profileEmoji");
const profileTitle = document.getElementById("profileTitle");
const profileText = document.getElementById("profileText");

nameInput.focus();

// --- Name eingeben ---
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = nameInput.value.trim().toLowerCase();
  const profile = profiles[value];

  if (!profile) {
    // Easter Egg? Dann Emoji-Regen statt Fehlermeldung.
    if (typeof easterEggs !== "undefined" && easterEggs[value]) {
      const egg = easterEggs[value];
      emojiRain(egg.emoji);
      showToast(egg.message);
      searchError.classList.add("hidden");
      nameInput.value = "";
      return;
    }
    searchError.classList.remove("hidden");
    return;
  }

  searchError.classList.add("hidden");
  searchScreen.classList.add("hidden");

  if (profile.special) {
    // Sedefs Antrag – jetzt wird's romantisch
    activateRomanticMode();
    card.classList.remove("hidden");
  } else {
    // Freundes-Karte füllen und zeigen
    profileEmoji.textContent = profile.emoji || "🙂";
    profileTitle.textContent = profile.title || "Hallo!";
    profileText.textContent = profile.text || "";
    profileCard.classList.remove("hidden");
  }
});

// --- Zurück-Knopf (führt wieder zur Suche) ---
document.querySelectorAll("[data-back]").forEach((btn) => {
  btn.addEventListener("click", () => {
    profileCard.classList.add("hidden");
    searchScreen.classList.remove("hidden");
    nameInput.value = "";
    nameInput.focus();
  });
});

// --- Bildschirme im Antrag wechseln ---
const introScreen = document.getElementById("introScreen");
const questionScreen = document.getElementById("questionScreen");
const yesScreen = document.getElementById("yesScreen");
const finalScreen = document.getElementById("finalScreen");

document.getElementById("startBtn").addEventListener("click", () => {
  introScreen.classList.add("hidden");
  questionScreen.classList.remove("hidden");
});

// --- Nein-Button: wird kleiner & läuft weg ---
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
let noScale = 1;

const cheekyTexts = [
  "Nein 🙈",
  "Sicher? 🥺",
  "Bitte? 💔",
  "Überleg nochmal 😢",
  "Wirklich nein? 😭",
  "Mein Herz… 💗",
];
let textIndex = 0;

function dodge() {
  noScale = Math.max(0.55, noScale - 0.1);
  textIndex = Math.min(cheekyTexts.length - 1, textIndex + 1);
  noBtn.textContent = cheekyTexts[textIndex];

  yesBtn.style.transform = `scale(${1 + (1 - noScale) * 1.0})`;

  // Button an den Body hängen, damit "fixed" sich am Bildschirm orientiert
  // (die Karte hat einen Weichzeichner, der sonst die Position verfälscht)
  if (noBtn.parentElement !== document.body) {
    document.body.appendChild(noBtn);
  }
  noBtn.classList.add("runaway");
  noBtn.style.transform = "scale(" + noScale + ")";

  const margin = 12;
  const w = noBtn.offsetWidth;
  const h = noBtn.offsetHeight;
  // sichtbare Fläche (auf Handys: dynamische Höhe)
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const maxX = Math.max(margin, vw - w - margin);
  const maxY = Math.max(margin, vh - h - margin);
  const x = margin + Math.random() * (maxX - margin);
  const y = margin + Math.random() * (maxY - margin);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseenter", dodge);
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dodge();
});

// --- Ja-Button: Konfetti & Erfolgsbildschirm ---
yesBtn.addEventListener("click", () => {
  // weggelaufenen Nein-Button entfernen
  noBtn.style.display = "none";
  questionScreen.classList.add("hidden");
  yesScreen.classList.remove("hidden");
  burstConfetti();
});

// --- Letzte Botschaft + Halskette ---
document.getElementById("finalBtn").addEventListener("click", () => {
  yesScreen.classList.add("hidden");
  finalScreen.classList.remove("hidden");
  // Startzeitpunkt eurer Beziehung merken (nur beim ersten Mal)
  if (!localStorage.getItem("togetherSince")) {
    localStorage.setItem("togetherSince", Date.now().toString());
  }
  burstConfetti();
});

// =====================================================================
//  Easter-Egg-Helfer: Emoji-Regen + kurze Einblendung
// =====================================================================
function emojiRain(emoji) {
  for (let i = 0; i < 40; i++) {
    const drop = document.createElement("span");
    drop.textContent = emoji;
    drop.style.position = "fixed";
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.top = "-40px";
    drop.style.fontSize = 20 + Math.random() * 28 + "px";
    drop.style.zIndex = 50;
    drop.style.pointerEvents = "none";
    drop.style.transition = "transform 2.6s ease-in, opacity 2.6s ease-in";
    document.body.appendChild(drop);
    requestAnimationFrame(() => {
      drop.style.transform = `translateY(110vh) rotate(${Math.random() * 720}deg)`;
      drop.style.opacity = "0";
    });
    setTimeout(() => drop.remove(), 2800);
  }
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("toast--show"));
  setTimeout(() => {
    toast.classList.remove("toast--show");
    setTimeout(() => toast.remove(), 400);
  }, 2200);
}

// =====================================================================
//  Navigation zwischen den Bildschirmen nach dem Ja
// =====================================================================
const cardScreens = Array.from(card.querySelectorAll(".screen"));

function showCardScreen(id) {
  cardScreens.forEach((s) => s.classList.add("hidden"));
  const target = document.getElementById(id);
  if (target) target.classList.remove("hidden");
}

document.querySelectorAll("[data-goto]").forEach((btn) => {
  btn.addEventListener("click", () => {
    showCardScreen(btn.dataset.goto);
    if (btn.dataset.goto === "mailboxScreen") openMailbox();
    if (btn.dataset.goto === "reasonsScreen") showReason();
  });
});

// =====================================================================
//  Feature 1: Zusammen-seit-Zähler
// =====================================================================
const sinceDate = document.getElementById("sinceDate");
const cDays = document.getElementById("cDays");
const cHours = document.getElementById("cHours");
const cMin = document.getElementById("cMin");
const cSec = document.getElementById("cSec");

function updateCounter() {
  const start = parseInt(localStorage.getItem("togetherSince"), 10);
  if (!start) return;

  const startDate = new Date(start);
  sinceDate.textContent =
    "seit dem " +
    startDate.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

  let diff = Math.floor((Date.now() - start) / 1000);
  const days = Math.floor(diff / 86400); diff -= days * 86400;
  const hours = Math.floor(diff / 3600); diff -= hours * 3600;
  const mins = Math.floor(diff / 60); diff -= mins * 60;
  const secs = diff;

  cDays.textContent = days;
  cHours.textContent = hours;
  cMin.textContent = mins;
  cSec.textContent = secs;
}
setInterval(updateCounter, 1000);
updateCounter();

// =====================================================================
//  Feature 3: Geheime Nachrichten (Codewort)
// =====================================================================
const secretForm = document.getElementById("secretForm");
const secretInput = document.getElementById("secretInput");
const secretError = document.getElementById("secretError");
const secretResult = document.getElementById("secretResult");
const secretEmoji = document.getElementById("secretEmoji");
const secretTitle = document.getElementById("secretTitle");
const secretText = document.getElementById("secretText");

secretForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const code = secretInput.value.trim().toLowerCase();
  const found = secrets[code];

  if (found) {
    secretEmoji.textContent = found.emoji || "💖";
    secretTitle.textContent = found.title || "";
    secretText.textContent = found.text || "";
    secretResult.classList.remove("hidden");
    secretError.classList.add("hidden");
    burstConfetti();
  } else {
    secretResult.classList.add("hidden");
    secretError.classList.remove("hidden");
  }
});

// =====================================================================
//  Feature 4: Briefkasten
//  Wenn in config.js ein Online-Speicher eingetragen ist, teilen sich
//  beide Geräte denselben Briefkasten. Sonst: lokal pro Gerät.
// =====================================================================
const mailboxForm = document.getElementById("mailboxForm");
const mailboxInput = document.getElementById("mailboxInput");
const mailboxList = document.getElementById("mailboxList");

function mailboxOnline() {
  return (
    typeof mailboxConfig !== "undefined" &&
    mailboxConfig.binId &&
    mailboxConfig.apiKey
  );
}

// --- lokaler Speicher (Rückfall) ---
function loadLocal() {
  try {
    return JSON.parse(localStorage.getItem("mailbox") || "[]");
  } catch {
    return [];
  }
}
function saveLocal(messages) {
  localStorage.setItem("mailbox", JSON.stringify(messages));
}

// --- Online-Speicher (JSONBin) ---
async function fetchMessages() {
  if (!mailboxOnline()) return loadLocal();
  try {
    const res = await fetch(
      `https://api.jsonbin.io/v3/b/${mailboxConfig.binId}/latest`,
      { headers: { "X-Master-Key": mailboxConfig.apiKey } }
    );
    const data = await res.json();
    return (data.record && data.record.messages) || [];
  } catch {
    return loadLocal(); // bei Internet-Problemen wenigstens lokal zeigen
  }
}

async function saveMessages(messages) {
  if (!mailboxOnline()) {
    saveLocal(messages);
    return;
  }
  await fetch(`https://api.jsonbin.io/v3/b/${mailboxConfig.binId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": mailboxConfig.apiKey,
    },
    body: JSON.stringify({ messages }),
  });
}

function renderList(messages) {
  mailboxList.innerHTML = "";

  if (!messages || messages.length === 0) {
    const empty = document.createElement("p");
    empty.className = "mailbox-empty";
    empty.textContent = "Noch keine Nachrichten – schreib die erste! 💌";
    mailboxList.appendChild(empty);
    return;
  }

  messages
    .slice()
    .reverse()
    .forEach((m) => {
      const item = document.createElement("div");
      item.className = "mailbox-item";

      const p = document.createElement("p");
      p.textContent = m.text;

      const time = document.createElement("time");
      time.textContent = new Date(m.date).toLocaleString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      item.appendChild(p);
      item.appendChild(time);
      mailboxList.appendChild(item);
    });
}

async function renderMailbox() {
  const messages = await fetchMessages();
  renderList(messages);
}

mailboxForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = mailboxInput.value.trim();
  if (!text) return;

  mailboxInput.value = "";
  const messages = await fetchMessages(); // neueste Liste holen
  messages.push({ text, date: Date.now() });
  await saveMessages(messages);
  renderList(messages);
});

// Beim Öffnen des Briefkastens neu laden + alle 5 Sek. auffrischen
let mailboxPoll = null;
function openMailbox() {
  renderMailbox();
  if (mailboxPoll) clearInterval(mailboxPoll);
  mailboxPoll = setInterval(() => {
    const visible = !document
      .getElementById("mailboxScreen")
      .classList.contains("hidden");
    if (visible && mailboxOnline()) {
      renderMailbox();
    } else if (!visible) {
      clearInterval(mailboxPoll);
      mailboxPoll = null;
    }
  }, 5000);
}

renderMailbox();

// =====================================================================
//  Gründe-Karten
// =====================================================================
const reasonText = document.getElementById("reasonText");
const reasonCounter = document.getElementById("reasonCounter");
const reasonCard = document.getElementById("reasonCard");
const reasonNext = document.getElementById("reasonNext");
let reasonIndex = 0;

function showReason() {
  if (typeof reasons === "undefined" || reasons.length === 0) {
    reasonText.textContent = "Trag eure Gründe in der Datei profiles.js ein. 💖";
    reasonCounter.textContent = "";
    return;
  }
  reasonText.textContent = reasons[reasonIndex];
  reasonCounter.textContent = `${reasonIndex + 1} / ${reasons.length}`;
  reasonCard.classList.remove("flip");
  void reasonCard.offsetWidth; // Animation neu auslösen
  reasonCard.classList.add("flip");
}

if (reasonNext) {
  reasonNext.addEventListener("click", () => {
    if (typeof reasons === "undefined" || reasons.length === 0) return;
    reasonIndex = (reasonIndex + 1) % reasons.length;
    showReason();
  });
}
showReason();

function burstConfetti() {
  const emojis = ["💖", "🎉", "💕", "🌹", "✨", "❤️", "🥰", "💞"];
  for (let i = 0; i < 80; i++) {
    const conf = document.createElement("span");
    conf.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    conf.style.position = "fixed";
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.top = "-40px";
    conf.style.fontSize = 16 + Math.random() * 24 + "px";
    conf.style.zIndex = 10;
    conf.style.pointerEvents = "none";
    conf.style.transition = "transform 3s ease-in, opacity 3s ease-in";
    document.body.appendChild(conf);
    requestAnimationFrame(() => {
      conf.style.transform = `translateY(110vh) rotate(${Math.random() * 720}deg)`;
      conf.style.opacity = "0";
    });
    setTimeout(() => conf.remove(), 3200);
  }
}
