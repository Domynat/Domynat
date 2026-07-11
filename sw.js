// Service Worker: App-Shell cachen für Offline-Nutzung.
// API-Aufrufe (Anthropic, Google) laufen immer übers Netz und werden nicht gecacht.
const CACHE = 'domynat-v2';
const SHELL = [
  './',
  './index.html',
  './css/styles.css',
  './js/app.js',
  './js/store.js',
  './js/llm.js',
  './js/charts.js',
  './js/shopping.js',
  './js/places.js',
  './js/speech.js',
  './manifest.webmanifest',
  './icons/icon.svg',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Externe APIs nie cachen.
  if (url.origin !== self.location.origin) return;

  // App-Shell: cache-first mit Netz-Fallback und Nachcachen.
  e.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      return res;
    }).catch(() => cached))
  );
});
