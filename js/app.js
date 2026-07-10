import * as store from './store.js';
import { estimateMeal, generateShoppingList } from './llm.js';
import { drawTrend } from './charts.js';
import { recurringShoppingList, groupByCategory, listToText } from './shopping.js';
import { getPosition, findRestaurants } from './places.js';
import { speechSupported, createRecognizer } from './speech.js';

const $ = sel => document.querySelector(sel);
const $$ = sel => [...document.querySelectorAll(sel)];

let lastShopping = null; // { title, groups }

// ---------- Init ----------
function init() {
  registerSW();
  setupTabs();
  setupHeute();
  setupSettings();
  setupEntryDialog();
  setupShopping();
  setupResto();
  $('#today-label').textContent = new Date().toLocaleDateString('de-DE',
    { weekday: 'long', day: 'numeric', month: 'long' });
  render();
}

// ---------- Navigation ----------
function setupTabs() {
  $$('.tab').forEach(tab => tab.addEventListener('click', () => {
    const view = tab.dataset.view;
    $$('.tab').forEach(t => t.classList.toggle('active', t === tab));
    $$('.view').forEach(v => v.classList.toggle('active', v.id === `view-${view}`));
    if (view === 'trend') renderTrend();
    if (view === 'resto') $('#resto-budget').textContent = remainingKcal();
  }));
}

// ---------- Heute ----------
function setupHeute() {
  $('#btn-estimate').addEventListener('click', onEstimate);
  $('#btn-manual').addEventListener('click', () => openEntryDialog(null));
  $('#entry-text').addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') onEstimate();
  });
  $$('.water-btns button').forEach(b => b.addEventListener('click', () => {
    store.addWater(+b.dataset.water);
    render();
  }));
  setupMic();
}

// ---------- Spracheingabe ----------
let recognizer = null;
let listening = false;
function setupMic() {
  const micBtn = $('#btn-mic');
  const ta = $('#entry-text');
  if (!speechSupported()) { micBtn.hidden = true; return; }
  const basePlaceholder = ta.placeholder;

  recognizer = createRecognizer({
    lang: 'de-DE',
    onStart: () => {
      listening = true;
      micBtn.classList.add('listening');
      micBtn.textContent = '⏹️';
      ta.placeholder = 'Sprich jetzt … (z.B. „zwei Eier und ein Toast")';
      ta.value = '';
    },
    onInterim: text => { ta.value = text; },
    onEnd: finalText => {
      listening = false;
      micBtn.classList.remove('listening');
      micBtn.textContent = '🎤';
      ta.placeholder = basePlaceholder;
      if (finalText) { ta.value = finalText; onEstimate(); }
    },
    onError: err => {
      listening = false;
      micBtn.classList.remove('listening');
      micBtn.textContent = '🎤';
      ta.placeholder = basePlaceholder;
      if (err === 'not-allowed' || err === 'service-not-allowed') toast('Mikrofonzugriff verweigert');
      else if (err === 'no-speech') toast('Nichts gehört – nochmal versuchen');
      else if (err !== 'aborted') toast('Spracherkennung: ' + err);
    },
  });

  micBtn.addEventListener('click', () => {
    if (listening) recognizer.stop();
    else recognizer.start();
  });
}

async function onEstimate() {
  const text = $('#entry-text').value.trim();
  if (!text) return;
  const settings = store.getSettings();
  if (!settings.claudeKey) {
    toast('Bitte zuerst den API-Key in den Einstellungen eintragen.');
    openSettings();
    return;
  }
  const status = $('#estimate-status');
  const btn = $('#btn-estimate');
  status.hidden = false; status.className = 'status busy'; status.textContent = 'Schätze';
  btn.disabled = true;
  try {
    const est = await estimateMeal(text, settings);
    store.addEntry({ text, ...est });
    $('#entry-text').value = '';
    status.hidden = true;
    toast(`+${est.kcal} kcal · ${est.protein} g Protein`);
    render();
  } catch (err) {
    status.className = 'status err';
    status.textContent = err.message || 'Schätzung fehlgeschlagen.';
  } finally {
    btn.disabled = false;
  }
}

function render() {
  const s = store.getSettings();
  const t = store.dayTotals();
  const water = store.getWater();
  const remaining = Math.round(s.kcalGoal - t.kcal);

  // Ring
  $('#kcal-remaining').textContent = remaining;
  $('#kcal-goal').textContent = `${s.kcalGoal} kcal`;
  $('#kcal-eaten').textContent = `${Math.round(t.kcal)} kcal`;
  const pct = Math.min(1, s.kcalGoal ? t.kcal / s.kcalGoal : 0);
  const circ = 2 * Math.PI * 52;
  const ring = $('#ring-fill');
  ring.style.strokeDasharray = circ;
  ring.style.strokeDashoffset = circ * (1 - pct);
  ring.style.stroke = t.kcal > s.kcalGoal
    ? getVar('--fat') : getVar('--accent');

  // Protein-Ampel
  $('#protein-eaten').textContent = round1(t.protein);
  $('#protein-goal').textContent = s.proteinGoal;
  applyProteinLight(t.protein, s.proteinGoal);

  // Makro-Balken
  setMacro('protein', t.protein, s.proteinGoal, 'g');
  setMacro('carbs', t.carbs, s.carbGoal, 'g');
  setMacro('fat', t.fat, s.fatGoal, 'g');
  setMacro('water', water, s.waterGoal, 'ml');

  renderEntries();
}

function applyProteinLight(protein, goal) {
  const light = $('#protein-light');
  light.classList.remove('green', 'amber', 'red');
  const ratio = goal ? protein / goal : 0;
  const now = new Date();
  const dayProgress = (now.getHours() * 60 + now.getMinutes()) / (24 * 60);
  // Erwarteter Fortschritt bis 20 Uhr; danach zählt der Tagesendstand.
  const expected = Math.min(1, dayProgress / 0.83);
  let cls, msg;
  if (ratio >= 1) { cls = 'green'; msg = 'Proteinziel erreicht'; }
  else if (ratio >= expected * 0.8) { cls = 'green'; msg = 'Protein im Plan'; }
  else if (ratio >= expected * 0.5) { cls = 'amber'; msg = 'Protein etwas niedrig'; }
  else { cls = 'red'; msg = 'Protein deutlich unter Ziel'; }
  light.classList.add(cls);
  light.title = msg;
}

function setMacro(name, val, goal, unit) {
  $(`#m-${name}`).textContent = `${round1(val)} ${unit}`;
  const pct = goal ? Math.min(100, (val / goal) * 100) : 0;
  $(`#bar-${name}`).style.width = pct + '%';
}

function renderEntries() {
  const entries = store.entriesForDay();
  const list = $('#entry-list');
  list.innerHTML = '';
  $('#entry-count').textContent = entries.length;
  $('#entry-empty').hidden = entries.length > 0;
  for (const e of entries) {
    const li = document.createElement('li');
    li.className = 'entry-item';
    const time = new Date(e.ts).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
    li.innerHTML = `
      <div class="ei-main">
        <div class="ei-text"></div>
        <div class="ei-macros">P ${round1(e.protein)} · K ${round1(e.carbs)} · F ${round1(e.fat)} g
          <span class="ei-time">· ${time}</span></div>
      </div>
      <div class="ei-kcal">${e.kcal}</div>`;
    li.querySelector('.ei-text').textContent = e.text || '(ohne Text)';
    li.addEventListener('click', () => openEntryDialog(e));
    list.appendChild(li);
  }
}

// ---------- Trend ----------
function renderTrend() {
  const s = store.getSettings();
  const days = store.lastDays(7);
  drawTrend($('#trend-chart'), days, s.kcalGoal, s.proteinGoal);

  const withData = days.filter(d => d.kcal > 0);
  const avg = arr => arr.length ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length) : 0;
  $('#avg-kcal').textContent = avg(withData.map(d => d.kcal)) || '–';
  $('#avg-protein').textContent = avg(withData.map(d => d.protein)) || '–';
  $('#avg-water').textContent = avg(days.filter(d => d.water > 0).map(d => d.water)) || '–';
  $('#days-ontrack').textContent = days.filter(d => d.protein >= s.proteinGoal).length;

  const fmt = d => new Date(d + 'T00:00').toLocaleDateString('de-DE', { day: 'numeric', month: 'short' });
  $('#trend-range').textContent = `${fmt(days[0].day)} – ${fmt(days[days.length - 1].day)}`;
}

// ---------- Einkauf ----------
function setupShopping() {
  $('#btn-shop-recurring').addEventListener('click', () => {
    const days = +$('#shop-days').value;
    const groups = recurringShoppingList(days);
    if (!groups.length) {
      shopStatus('Noch zu wenige wiederkehrende Zutaten. Logge ein paar Tage mit KI-Schätzung.', true);
      lastShopping = null; $('#shop-list').innerHTML = ''; $('#shop-actions').hidden = true;
      return;
    }
    lastShopping = { title: `Wiederkehrend (${days} Tage)`, groups };
    renderShopping();
    shopStatus('', false, true);
  });

  $('#btn-shop-generate').addEventListener('click', async () => {
    const prompt = $('#shop-prompt').value.trim();
    if (!prompt) return;
    const settings = store.getSettings();
    if (!settings.claudeKey) { toast('Bitte API-Key eintragen.'); openSettings(); return; }
    shopStatus('Generiere Liste', false, false, true);
    try {
      const res = await generateShoppingList(prompt, settings);
      lastShopping = { title: res.title, groups: groupByCategory(res.items) };
      renderShopping();
      shopStatus('', false, true);
    } catch (err) {
      shopStatus(err.message || 'Fehler bei der Generierung.', true);
    }
  });

  $('#btn-shop-copy').addEventListener('click', async () => {
    if (!lastShopping) return;
    const text = listToText(lastShopping.groups, lastShopping.title);
    try { await navigator.clipboard.writeText(text); toast('Kopiert'); }
    catch { toast('Kopieren nicht möglich'); }
  });
  $('#btn-shop-share').addEventListener('click', async () => {
    if (!lastShopping || !navigator.share) { toast('Teilen nicht verfügbar'); return; }
    try { await navigator.share({ title: lastShopping.title, text: listToText(lastShopping.groups, lastShopping.title) }); }
    catch {}
  });
}

function renderShopping() {
  const wrap = $('#shop-list');
  wrap.innerHTML = '';
  for (const g of lastShopping.groups) {
    const div = document.createElement('div');
    div.className = 'shop-group';
    const h = document.createElement('h3'); h.textContent = g.category; div.appendChild(h);
    const ul = document.createElement('ul');
    for (const it of g.items) {
      const li = document.createElement('li');
      const cb = document.createElement('input'); cb.type = 'checkbox';
      cb.addEventListener('change', () => li.classList.toggle('checked', cb.checked));
      const span = document.createElement('span');
      span.textContent = it.qty ? `${it.name} – ${it.qty}` : it.name;
      li.append(cb, span);
      if (it.count) { const c = document.createElement('span'); c.className = 'cnt'; c.textContent = `${it.count}×`; li.appendChild(c); }
      ul.appendChild(li);
    }
    div.appendChild(ul);
    wrap.appendChild(div);
  }
  $('#shop-actions').hidden = false;
}

function shopStatus(msg, err, hide, busy) {
  const el = $('#shop-status');
  if (hide) { el.hidden = true; return; }
  el.hidden = false;
  el.className = 'status' + (err ? ' err' : '') + (busy ? ' busy' : '');
  el.textContent = msg;
}

// ---------- Restaurant ----------
function setupResto() {
  $('#btn-resto-find').addEventListener('click', async () => {
    const settings = store.getSettings();
    if (!settings.googleKey) { toast('Bitte Google-Maps-API-Key in den Einstellungen eintragen.'); openSettings(); return; }
    const status = $('#resto-status');
    status.hidden = false; status.className = 'status busy'; status.textContent = 'Suche in der Nähe';
    $('#resto-list').innerHTML = '';
    try {
      const pos = await getPosition();
      const places = await findRestaurants({ key: settings.googleKey, ...pos });
      const budget = remainingKcal();
      const sorted = places
        .map(p => ({ ...p, fits: p.estKcal <= budget }))
        .sort((a, b) => (b.fits - a.fits) || (b.rating || 0) - (a.rating || 0));
      renderResto(sorted, budget);
      status.hidden = true;
    } catch (err) {
      status.className = 'status err'; status.textContent = err.message || 'Suche fehlgeschlagen.';
    }
  });
}

function renderResto(places, budget) {
  const wrap = $('#resto-list');
  wrap.innerHTML = '';
  if (!places.length) { wrap.innerHTML = '<p class="muted empty">Keine Restaurants gefunden.</p>'; return; }
  for (const p of places) {
    const div = document.createElement('div');
    div.className = 'resto-item';
    const badge = p.fits ? '✅ passt' : '⚠️ über Budget';
    const price = p.priceLevel ? ' · ' + priceLabel(p.priceLevel) : '';
    const rating = p.rating ? `★ ${p.rating} (${p.ratingCount})` : 'keine Bewertung';
    div.innerHTML = `
      <h3></h3>
      <div class="meta"><span>~${p.estKcal} kcal ${badge}</span><span>${rating}${price}</span></div>
      <div class="meta"><span class="addr"></span></div>
      ${p.mapsUri ? `<a href="${p.mapsUri}" target="_blank" rel="noopener">In Google Maps öffnen →</a>` : ''}`;
    div.querySelector('h3').textContent = p.name;
    div.querySelector('.addr').textContent = p.address;
    wrap.appendChild(div);
  }
}
function priceLabel(level) {
  return ({ PRICE_LEVEL_INEXPENSIVE: '€', PRICE_LEVEL_MODERATE: '€€',
    PRICE_LEVEL_EXPENSIVE: '€€€', PRICE_LEVEL_VERY_EXPENSIVE: '€€€€' })[level] || '';
}

// ---------- Eintrag-Dialog (manuell / bearbeiten) ----------
let editingId = null;
function setupEntryDialog() {
  const dlg = $('#entry-dialog');
  $('#btn-save-entry').addEventListener('click', e => {
    e.preventDefault();
    const data = {
      text: $('#e-text').value.trim(),
      kcal: $('#e-kcal').value, protein: $('#e-protein').value,
      fat: $('#e-fat').value, carbs: $('#e-carbs').value,
    };
    if (editingId) store.updateEntry(editingId, data);
    else store.addEntry(data);
    dlg.close(); render();
    toast(editingId ? 'Aktualisiert' : 'Gespeichert');
  });
  $('#btn-delete-entry').addEventListener('click', () => {
    if (editingId) { store.deleteEntry(editingId); dlg.close(); render(); toast('Gelöscht'); }
  });
}
function openEntryDialog(entry) {
  editingId = entry?.id || null;
  $('#entry-dialog-title').textContent = entry ? 'Eintrag bearbeiten' : 'Manueller Eintrag';
  $('#e-text').value = entry?.text || '';
  $('#e-kcal').value = entry?.kcal || '';
  $('#e-protein').value = entry?.protein || '';
  $('#e-fat').value = entry?.fat || '';
  $('#e-carbs').value = entry?.carbs || '';
  $('#btn-delete-entry').hidden = !entry;
  $('#entry-dialog').showModal();
}

// ---------- Einstellungen ----------
function setupSettings() {
  $('#btn-settings').addEventListener('click', openSettings);
  $('#btn-save-settings').addEventListener('click', e => {
    e.preventDefault();
    store.saveSettings({
      kcalGoal: +$('#set-kcal').value || 0,
      proteinGoal: +$('#set-protein').value || 0,
      fatGoal: +$('#set-fat').value || 0,
      carbGoal: +$('#set-carbs').value || 0,
      waterGoal: +$('#set-water').value || 0,
      claudeKey: $('#set-claude-key').value.trim(),
      model: $('#set-model').value,
      googleKey: $('#set-google-key').value.trim(),
    });
    $('#settings-dialog').close();
    render();
    toast('Gespeichert');
  });

  $('#btn-export').addEventListener('click', () => {
    const blob = new Blob([store.exportAll()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `domynat-export-${store.localDay()}.json`; a.click();
    URL.revokeObjectURL(url);
  });
  $('#btn-import').addEventListener('click', () => $('#import-file').click());
  $('#import-file').addEventListener('change', async e => {
    const file = e.target.files[0]; if (!file) return;
    try { store.importAll(await file.text()); fillSettings(); render(); toast('Import erfolgreich'); }
    catch { toast('Import fehlgeschlagen'); }
    e.target.value = '';
  });
}
function openSettings() { fillSettings(); $('#settings-dialog').showModal(); }
function fillSettings() {
  const s = store.getSettings();
  $('#set-kcal').value = s.kcalGoal;
  $('#set-protein').value = s.proteinGoal;
  $('#set-fat').value = s.fatGoal;
  $('#set-carbs').value = s.carbGoal;
  $('#set-water').value = s.waterGoal;
  $('#set-claude-key').value = s.claudeKey;
  $('#set-model').value = s.model;
  $('#set-google-key').value = s.googleKey;
}

// ---------- Helpers ----------
function remainingKcal() {
  const s = store.getSettings();
  return Math.max(0, Math.round(s.kcalGoal - store.dayTotals().kcal));
}
function round1(v) { return Math.round((+v || 0) * 10) / 10; }
function getVar(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }

let toastTimer;
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg; el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 2400);
}

function registerSW() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }
}

init();
