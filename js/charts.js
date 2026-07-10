// Wochentrend-Chart auf <canvas>, ohne externe Bibliothek. Retina-scharf, theme-aware.

function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

const WD = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

export function drawTrend(canvas, days, kcalGoal, proteinGoal) {
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const cssW = canvas.clientWidth || 320;
  const cssH = 220;
  canvas.width = cssW * dpr;
  canvas.height = cssH * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, cssW, cssH);

  const accent = cssVar('--accent') || '#10b981';
  const protein = cssVar('--protein') || '#6366f1';
  const muted = cssVar('--muted') || '#888';
  const border = cssVar('--border') || '#ddd';
  const text = cssVar('--text') || '#111';

  const padL = 8, padR = 8, padT = 16, padB = 26;
  const plotW = cssW - padL - padR;
  const plotH = cssH - padT - padB;
  const x0 = padL, y0 = padT + plotH;

  const maxKcal = Math.max(kcalGoal, ...days.map(d => d.kcal), 1) * 1.15;
  const maxProt = Math.max(proteinGoal, ...days.map(d => d.protein), 1) * 1.15;
  const n = days.length;
  const slot = plotW / n;
  const bw = Math.min(28, slot * 0.5);

  const yK = v => y0 - (v / maxKcal) * plotH;
  const yP = v => y0 - (v / maxProt) * plotH;

  // Baseline
  ctx.strokeStyle = border; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(x0, y0 + 0.5); ctx.lineTo(x0 + plotW, y0 + 0.5); ctx.stroke();

  // Kalorien-Balken
  days.forEach((d, i) => {
    const cx = x0 + slot * i + slot / 2;
    const h = y0 - yK(d.kcal);
    ctx.fillStyle = d.kcal > kcalGoal ? cssVar('--fat') || '#ef4444' : accent;
    roundRect(ctx, cx - bw / 2, yK(d.kcal), bw, Math.max(1, h), 5);
    ctx.fill();
  });

  // Kalorienziel-Linie (gestrichelt)
  ctx.strokeStyle = muted; ctx.lineWidth = 1.5; ctx.setLineDash([5, 4]);
  ctx.beginPath(); ctx.moveTo(x0, yK(kcalGoal)); ctx.lineTo(x0 + plotW, yK(kcalGoal)); ctx.stroke();
  ctx.setLineDash([]);

  // Protein-Linie
  ctx.strokeStyle = protein; ctx.lineWidth = 2.5;
  ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  ctx.beginPath();
  days.forEach((d, i) => {
    const cx = x0 + slot * i + slot / 2;
    i ? ctx.lineTo(cx, yP(d.protein)) : ctx.moveTo(cx, yP(d.protein));
  });
  ctx.stroke();
  // Protein-Punkte
  days.forEach((d, i) => {
    const cx = x0 + slot * i + slot / 2;
    ctx.fillStyle = protein;
    ctx.beginPath(); ctx.arc(cx, yP(d.protein), 3, 0, Math.PI * 2); ctx.fill();
  });

  // X-Achsen-Beschriftung
  ctx.fillStyle = muted; ctx.font = '11px system-ui, sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  days.forEach((d, i) => {
    const cx = x0 + slot * i + slot / 2;
    const wd = WD[new Date(d.day + 'T00:00').getDay()];
    ctx.fillText(wd, cx, y0 + 7);
  });
}

function roundRect(ctx, x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
