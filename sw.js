self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('frenos-v1').then(cache => {
            return cache.addAll([
                '/analisis-frenos-con-resaltado.html',
                '/manifest.json',
                '/icon.png'
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