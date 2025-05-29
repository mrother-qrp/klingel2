self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('klingel2-cache').then(cache => {
      return cache.addAll([
        './index.html',
        './manifest.json',
        './icon-192.png',
        './icon-512.png',
        'https://www.soundjay.com/phone/old-telephone-ringing-01.mp3'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
