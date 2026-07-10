// Datenhaltung: localStorage. Einfach, offline-fähig, gerätelokal.

const K_ENTRIES = 'dom.entries';
const K_WATER = 'dom.water';
const K_SETTINGS = 'dom.settings';

const DEFAULT_SETTINGS = {
  kcalGoal: 2200,
  proteinGoal: 160,
  fatGoal: 70,
  carbGoal: 250,
  waterGoal: 3000,
  claudeKey: '',
  model: 'claude-haiku-4-5-20251001',
  googleKey: '',
};

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
}
function write(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

export function localDay(ts = Date.now()) {
  const d = new Date(ts);
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10); // YYYY-MM-DD in lokaler Zeit
}

// ---- Settings ----
export function getSettings() { return { ...DEFAULT_SETTINGS, ...read(K_SETTINGS, {}) }; }
export function saveSettings(patch) {
  const next = { ...getSettings(), ...patch };
  write(K_SETTINGS, next);
  return next;
}

// ---- Einträge ----
export function getEntries() { return read(K_ENTRIES, []); }

export function addEntry(e) {
  const entries = getEntries();
  const entry = {
    id: crypto.randomUUID(),
    ts: e.ts ?? Date.now(),
    text: e.text ?? '',
    kcal: Math.round(+e.kcal || 0),
    protein: round1(e.protein),
    fat: round1(e.fat),
    carbs: round1(e.carbs),
    items: Array.isArray(e.items) ? e.items : [],
    note: e.note || '',
  };
  entries.push(entry);
  write(K_ENTRIES, entries);
  return entry;
}

export function updateEntry(id, patch) {
  const entries = getEntries();
  const i = entries.findIndex(e => e.id === id);
  if (i < 0) return null;
  entries[i] = { ...entries[i], ...patch,
    kcal: Math.round(+ (patch.kcal ?? entries[i].kcal) || 0),
    protein: round1(patch.protein ?? entries[i].protein),
    fat: round1(patch.fat ?? entries[i].fat),
    carbs: round1(patch.carbs ?? entries[i].carbs) };
  write(K_ENTRIES, entries);
  return entries[i];
}

export function deleteEntry(id) {
  write(K_ENTRIES, getEntries().filter(e => e.id !== id));
}

export function entriesForDay(day = localDay()) {
  return getEntries().filter(e => localDay(e.ts) === day).sort((a, b) => b.ts - a.ts);
}

export function dayTotals(day = localDay()) {
  return entriesForDay(day).reduce((t, e) => ({
    kcal: t.kcal + e.kcal,
    protein: t.protein + e.protein,
    fat: t.fat + e.fat,
    carbs: t.carbs + e.carbs,
  }), { kcal: 0, protein: 0, fat: 0, carbs: 0 });
}

// ---- Wasser ----
export function getWater(day = localDay()) { return read(K_WATER, {})[day] || 0; }
export function addWater(ml, day = localDay()) {
  const all = read(K_WATER, {});
  all[day] = Math.max(0, (all[day] || 0) + ml);
  write(K_WATER, all);
  return all[day];
}

// ---- Trend (letzte n Tage) ----
export function lastDays(n = 7) {
  const out = [];
  const water = read(K_WATER, {});
  for (let i = n - 1; i >= 0; i--) {
    const day = localDay(Date.now() - i * 86400000);
    const t = dayTotals(day);
    out.push({ day, ...t, water: water[day] || 0 });
  }
  return out;
}

// ---- Export / Import ----
export function exportAll() {
  return JSON.stringify({
    version: 1,
    entries: getEntries(),
    water: read(K_WATER, {}),
    settings: getSettings(),
  }, null, 2);
}
export function importAll(json) {
  const data = JSON.parse(json);
  if (Array.isArray(data.entries)) write(K_ENTRIES, data.entries);
  if (data.water && typeof data.water === 'object') write(K_WATER, data.water);
  if (data.settings) write(K_SETTINGS, { ...DEFAULT_SETTINGS, ...data.settings });
}

function round1(v) { return Math.round((+v || 0) * 10) / 10; }
