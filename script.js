// --- Schwebende Herzen im Hintergrund ---
const heartsBg = document.getElementById("heartsBg");
const heartEmojis = ["💖", "💕", "💗", "❤️", "🌸", "💞", "✨"];

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
setInterval(spawnHeart, 500);

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
    searchError.classList.remove("hidden");
    return;
  }

  searchError.classList.add("hidden");
  searchScreen.classList.add("hidden");

  if (profile.special) {
    // Sedefs Antrag
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
  noScale = Math.max(0.5, noScale - 0.12);
  textIndex = Math.min(cheekyTexts.length - 1, textIndex + 1);
  noBtn.textContent = cheekyTexts[textIndex];

  yesBtn.style.transform = `scale(${1 + (1 - noScale) * 1.4})`;

  noBtn.classList.add("runaway");
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;
  const x = Math.max(20, Math.random() * maxX);
  const y = Math.max(20, Math.random() * maxY);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  noBtn.style.transform = `scale(${noScale})`;
}

noBtn.addEventListener("mouseenter", dodge);
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dodge();
});

// --- Ja-Button: Konfetti & Erfolgsbildschirm ---
yesBtn.addEventListener("click", () => {
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
//  Navigation zwischen den Bildschirmen nach dem Ja
// =====================================================================
const cardScreens = Array.from(card.querySelectorAll(".screen"));

function showCardScreen(id) {
  cardScreens.forEach((s) => s.classList.add("hidden"));
  const target = document.getElementById(id);
  if (target) target.classList.remove("hidden");
}

document.querySelectorAll("[data-goto]").forEach((btn) => {
  btn.addEventListener("click", () => showCardScreen(btn.dataset.goto));
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
//  Feature 4: Briefkasten (wird auf diesem Gerät gespeichert)
// =====================================================================
const mailboxForm = document.getElementById("mailboxForm");
const mailboxInput = document.getElementById("mailboxInput");
const mailboxList = document.getElementById("mailboxList");

function loadMailbox() {
  try {
    return JSON.parse(localStorage.getItem("mailbox") || "[]");
  } catch {
    return [];
  }
}

function renderMailbox() {
  const messages = loadMailbox();
  mailboxList.innerHTML = "";

  if (messages.length === 0) {
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

mailboxForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = mailboxInput.value.trim();
  if (!text) return;

  const messages = loadMailbox();
  messages.push({ text, date: Date.now() });
  localStorage.setItem("mailbox", JSON.stringify(messages));
  mailboxInput.value = "";
  renderMailbox();
});

renderMailbox();

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
