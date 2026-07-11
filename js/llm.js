// Anthropic-Claude-Aufrufe direkt aus dem Browser.
// Der API-Key bleibt lokal; die Anfrage geht direkt an api.anthropic.com.

const API_URL = 'https://api.anthropic.com/v1/messages';
const ANTHROPIC_VERSION = '2023-06-01';

const CATEGORIES = ['Obst/Gemüse', 'Kühlregal', 'Fleisch/Fisch', 'Trockenware', 'Tiefkühl', 'Getränke', 'Backwaren', 'Sonstiges'];

async function callClaude({ key, model, system, user, maxTokens = 1024 }) {
  if (!key) throw new Error('Kein Anthropic-API-Key hinterlegt. Bitte in den Einstellungen eintragen.');
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': key,
      'anthropic-version': ANTHROPIC_VERSION,
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model,
      max_tokens: maxTokens,
      system,
      messages: [{ role: 'user', content: user }],
    }),
  });
  if (!res.ok) {
    let msg = `API-Fehler ${res.status}`;
    try { const j = await res.json(); if (j.error?.message) msg += `: ${j.error.message}`; } catch {}
    throw new Error(msg);
  }
  const data = await res.json();
  return (data.content || []).filter(c => c.type === 'text').map(c => c.text).join('');
}

// JSON aus einer Modellantwort robust extrahieren (auch aus ```json ...``` Blöcken).
function extractJSON(text) {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidate = fenced ? fenced[1] : text;
  const start = candidate.indexOf('{');
  const startArr = candidate.indexOf('[');
  const from = start < 0 ? startArr : (startArr < 0 ? start : Math.min(start, startArr));
  if (from < 0) throw new Error('Keine strukturierte Antwort erhalten.');
  const openCh = candidate[from];
  const closeCh = openCh === '{' ? '}' : ']';
  const end = candidate.lastIndexOf(closeCh);
  return JSON.parse(candidate.slice(from, end + 1));
}

// Kalorien + Makros + Zutaten für einen freien Text schätzen.
export async function estimateMeal(text, settings) {
  const system =
    `Du bist ein präziser Ernährungs-Schätzer. Der Nutzer beschreibt Speisen/Getränke auf Deutsch. ` +
    `Schätze realistische Werte (deutsche Portions- und Produktgrößen). ` +
    `Zerlege die Mahlzeit in einzelne Einkaufs-Zutaten mit ganzzahliger Kategorie. ` +
    `Kategorien: ${CATEGORIES.join(', ')}. ` +
    `Antworte AUSSCHLIESSLICH mit JSON dieser Form, ohne weiteren Text:\n` +
    `{"kcal":Zahl,"protein_g":Zahl,"fat_g":Zahl,"carbs_g":Zahl,` +
    `"items":[{"name":"Zutat","qty":"Menge z.B. 100 g","category":"Kategorie"}],"note":"kurze Notiz"}`;
  const raw = await callClaude({
    key: settings.claudeKey, model: settings.model, system, user: text, maxTokens: 900,
  });
  const j = extractJSON(raw);
  return {
    kcal: num(j.kcal),
    protein: num(j.protein_g),
    fat: num(j.fat_g),
    carbs: num(j.carbs_g),
    items: (j.items || []).map(it => ({
      name: String(it.name || '').trim(),
      qty: String(it.qty || '').trim(),
      category: CATEGORIES.includes(it.category) ? it.category : 'Sonstiges',
    })).filter(it => it.name),
    note: String(j.note || ''),
  };
}

// Einkaufsliste frei generieren (z.B. "3 Tage, 2000 kcal, Fokus Protein").
export async function generateShoppingList(prompt, settings) {
  const system =
    `Du bist Meal-Prep-Assistent für einen Gym-Nutzer. Erstelle eine konkrete, mengenbasierte Einkaufsliste. ` +
    `Berücksichtige das Kalorien- und Proteinziel. Kategorien: ${CATEGORIES.join(', ')}. ` +
    `Antworte AUSSCHLIESSLICH mit JSON: ` +
    `{"title":"kurzer Titel","items":[{"name":"Zutat","qty":"Gesamtmenge","category":"Kategorie"}]}`;
  const user =
    `Tagesziel: ${settings.kcalGoal} kcal, ${settings.proteinGoal} g Protein. Anfrage: ${prompt}`;
  const raw = await callClaude({ key: settings.claudeKey, model: settings.model, system, user, maxTokens: 1200 });
  const j = extractJSON(raw);
  return {
    title: String(j.title || 'Einkaufsliste'),
    items: (j.items || []).map(it => ({
      name: String(it.name || '').trim(),
      qty: String(it.qty || '').trim(),
      category: CATEGORIES.includes(it.category) ? it.category : 'Sonstiges',
    })).filter(it => it.name),
  };
}

export { CATEGORIES };
function num(v) { return Math.max(0, Math.round((+v || 0) * 10) / 10); }
