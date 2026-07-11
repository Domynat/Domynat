// Wiederkehrende Zutaten aus den letzten n Tagen zu einer gruppierten Liste verdichten.
import { getEntries, localDay } from './store.js';
import { CATEGORIES } from './llm.js';

// Zutatennamen normalisieren, damit "Haferflocken" und "haferflocken " zusammenfallen.
function norm(name) {
  return name.toLowerCase().trim().replace(/\s+/g, ' ');
}

export function recurringShoppingList(days = 14) {
  const since = Date.now() - days * 86400000;
  const map = new Map(); // key -> {name, category, count, days:Set}
  for (const e of getEntries()) {
    if (e.ts < since) continue;
    const day = localDay(e.ts);
    for (const it of e.items || []) {
      if (!it.name) continue;
      const key = norm(it.name);
      if (!map.has(key)) map.set(key, { name: it.name, category: it.category || 'Sonstiges', count: 0, days: new Set() });
      const rec = map.get(key);
      rec.count++;
      rec.days.add(day);
      if (rec.category === 'Sonstiges' && it.category) rec.category = it.category;
    }
  }
  // "wiederkehrend" = an mindestens 2 verschiedenen Tagen aufgetaucht
  const recurring = [...map.values()]
    .filter(r => r.days.size >= 2)
    .sort((a, b) => b.days.size - a.days.size || b.count - a.count);

  return groupByCategory(recurring.map(r => ({
    name: r.name, category: r.category, count: r.days.size,
  })));
}

export function groupByCategory(items) {
  const groups = new Map();
  for (const it of items) {
    const cat = CATEGORIES.includes(it.category) ? it.category : 'Sonstiges';
    if (!groups.has(cat)) groups.set(cat, []);
    groups.get(cat).push(it);
  }
  // In definierter Kategorie-Reihenfolge ausgeben
  return CATEGORIES
    .filter(c => groups.has(c))
    .map(c => ({ category: c, items: groups.get(c) }));
}

export function listToText(groups, title = 'Einkaufsliste') {
  const lines = [`🛒 ${title}`, ''];
  for (const g of groups) {
    lines.push(g.category.toUpperCase());
    for (const it of g.items) {
      const qty = it.qty ? ` – ${it.qty}` : (it.count ? ` (${it.count}×)` : '');
      lines.push(`  ☐ ${it.name}${qty}`);
    }
    lines.push('');
  }
  return lines.join('\n').trim();
}
