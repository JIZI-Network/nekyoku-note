importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nekyoku-note",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.1032b44f63a959aab46c.js",
    "revision": "f8ccc56c582d69a39d6a0622101f7a87"
  },
  {
    "url": "/_nuxt/layouts/default.f6bb5890e52e0d2d9d0c.js",
    "revision": "c9ed7e9d10832f3c641b2f307aed2a4c"
  },
  {
    "url": "/_nuxt/manifest.aeadf947dde973307a39.js",
    "revision": "4e3de19da0317255d1faed1f3d277f0f"
  },
  {
    "url": "/_nuxt/pages/about.f96717704cf70681f416.js",
    "revision": "f2a57a2baafbbea22b47f78448c2e23b"
  },
  {
    "url": "/_nuxt/pages/index.29d786bf325735ecf3e5.js",
    "revision": "d521980781354aa0000ce20703ec06b6"
  },
  {
    "url": "/_nuxt/vendor.b1454ec09fb161998c5d.js",
    "revision": "bfc0c7a6c72c1e4d6f5ede7e37a4360b"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

