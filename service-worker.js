const CACHE_NAME = 'hola-live-cache-v1';
const URLS = [
  '/',
  '/index.html',
  '/app.html',
  '/pages/live.html',
  '/assets/css/reset.css',
  '/assets/css/layout.css',
  '/assets/js/core/state.js',
  '/assets/js/core/router.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.map(key => {
        if(key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(resp => resp || fetch(event.request))
  );
});
