var CACHE = 'lazy-calc-beta-v2.8.0';
var urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg'
];

self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.map(function(k) {
          if (k !== CACHE) return caches.delete(k);
        })
      );
    }).then(function() {
      return clients.claim();
    })
  );
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  var isHtml = e.request.mode === 'navigate' || 
               e.request.destination === 'document' || 
               e.request.url.indexOf('.html') !== -1 ||
               e.request.url.endsWith('/');

  if (isHtml) {
    // Network-First for HTML: Always fetch fresh from network when online!
    e.respondWith(
      fetch(e.request).then(function(networkResponse) {
        if (networkResponse && networkResponse.status === 200) {
          var responseToCache = networkResponse.clone();
          caches.open(CACHE).then(function(cache) {
            cache.put(e.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(function() {
        return caches.match(e.request).then(function(cachedResponse) {
          return cachedResponse || caches.match('./index.html') || caches.match('./');
        });
      })
    );
    return;
  }

  // Cache-First with network fallback for static assets (svg, icons, json)
  e.respondWith(
    caches.match(e.request).then(function(cachedResponse) {
      var fetchPromise = fetch(e.request).then(function(networkResponse) {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          var responseToCache = networkResponse.clone();
          caches.open(CACHE).then(function(cache) {
            cache.put(e.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(function() {
        return cachedResponse;
      });
      return cachedResponse || fetchPromise;
    })
  );
});
