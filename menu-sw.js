// Minimal service worker so browsers offer "Install". It does not cache anything:
// the menu is always loaded live.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
