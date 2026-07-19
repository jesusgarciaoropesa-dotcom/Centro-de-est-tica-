// Service worker mínimo para que el panel sea instalable como app (PWA).
// No cachea las peticiones a Supabase (siempre datos frescos); solo guarda
// la "cáscara" de la app para que abra aunque haya poca conexión.
const CACHE = 'panel-cristina-v1';
const SHELL = ['./admin.html', './icon-192.png', './icon-512.png', './apple-touch-icon.png', './manifest.webmanifest'];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).catch(() => {}));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  // Nunca cachear Supabase ni recursos externos: siempre a la red.
  if (url.origin !== self.location.origin) return;
  if (e.request.method !== 'GET') return;
  // Cáscara: network-first con fallback a caché.
  e.respondWith(
    fetch(e.request).then((r) => {
      const copy = r.clone();
      caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
      return r;
    }).catch(() => caches.match(e.request))
  );
});
