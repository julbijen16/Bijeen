/* Bijeen service worker: makes the app open without internet and shows push notifications. */
const VERSION = 'dev';
const SHELL = 'bijeen-shell-' + VERSION;
const RUNTIME = 'bijeen-runtime';
const FILES = ['./', 'index.html', 'css/app.css', 'js/config.js', 'js/store.js', 'js/app.js', 'vendor/supabase.js',
  'manifest.webmanifest', 'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(SHELL).then(c => c.addAll(FILES.map(f => new Request(f, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('bijeen-shell-') && k !== SHELL).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // app files: from the cache first, so the app also opens offline
  if (url.origin === location.origin) {
    e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).catch(() => req.mode === 'navigate' ? caches.match('index.html') : Response.error())));
    return;
  }
  // fonts
  if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.open(RUNTIME).then(c => c.match(req).then(hit => hit || fetch(req).then(r => { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }))));
    return;
  }
  // photos (signed links change, the photo does not)
  if (url.pathname.includes('/storage/v1/object/sign/photos/')) {
    const key = new Request(url.origin + url.pathname);
    e.respondWith(caches.open(RUNTIME).then(c => c.match(key).then(hit => hit || fetch(req).then(r => { if (r.ok) c.put(key, r.clone()); return r; }))));
  }
});

self.addEventListener('push', e => {
  let d = {}; try { d = e.data.json(); } catch (x) { d = { title: 'Bijeen', body: e.data ? e.data.text() : '' }; }
  e.waitUntil(self.registration.showNotification(d.title || 'Bijeen', {
    body: d.body || '', tag: d.tag, data: { url: d.url || '#home' },
    icon: 'icons/icon-192.png', badge: 'icons/badge-96.png', lang: 'nl',
  }));
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const target = (e.notification.data && e.notification.data.url) || '#home';
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) { c.postMessage({ open: target }); return c.focus(); }
    return self.clients.openWindow(self.registration.scope + target);
  }));
});
