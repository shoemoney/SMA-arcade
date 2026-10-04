/**
 * Service worker. Caches the app shell and runtime assets with a versioned
 * cache name so an update replaces the old cache cleanly.
 * It never touches IndexedDB: clearing service-worker caches does not erase seasons.
 */
const CACHE = 'shoemoney-derby-v2'
const SHELL = [
  './',
  './index.html',
  './assets/asset-index.json',
  './assets/driver/portrait-neutral.webp',
  './assets/driver/portrait-focused.webp',
  './assets/driver/portrait-victory.webp',
  './assets/shoemoney-inc-logo.png',
  './assets/cars/boxline.png',
  './assets/cars/roundabout.png',
  './assets/cars/fleetline.png',
  './assets/cars/longroof.png',
  './assets/cars/statesman.png',
  './assets/cars/apex.png',
  './assets/wrecks/base.png',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const req = event.request
  if (req.method !== 'GET') return
  const url = new URL(req.url)
  if (url.origin !== self.location.origin) return
  event.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit
      return fetch(req)
        .then((res) => {
          if (res.ok && res.type === 'basic') {
            const copy = res.clone()
            caches.open(CACHE).then((c) => c.put(req, copy))
          }
          return res
        })
        .catch(() => caches.match('./index.html'))
    }),
  )
})
