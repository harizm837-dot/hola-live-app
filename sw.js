const CACHE_NAME = "hola-live-cache-v2";

const STATIC_ASSETS = [

  // Core Pages
  "index.html",
  "live.html",
  "store.html",
  "leaderboard.html",
  "analytics.html",

  // CSS
  "assets/css/live.css",
  "assets/css/realtime.css",
  "assets/css/platform.css",

  // JS Core
  "assets/js/eventBus.js",
  "assets/js/roleEngine.js",
  "assets/js/guard.js",
  "assets/js/liveEngine.js",
  "assets/js/realtimeEngine.js",

  // Economy & Growth
  "assets/js/economyEngine.js",
  "assets/js/leaderboard.js",
  "assets/js/growthEngine.js",

  // Phase 8
  "assets/js/vipEngine.js",
  "assets/js/analyticsEngine.js",
  "assets/js/moderatorPanel.js",
  "assets/js/uiEnhance.js",

  // Icons
  "assets/img/logo-192.png",
  "assets/img/logo-512.png"
];

// INSTALL
self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

// ACTIVATE
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// FETCH
self.addEventListener("fetch", event => {

  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then(networkResponse => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          return caches.match("index.html");
        });
    })
  );
});
