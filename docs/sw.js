importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nekyoku-note",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.546dd612f44fcf15967f.js",
    "revision": "d639f5c4fb77b039d14381761686e59d"
  },
  {
    "url": "/_nuxt/layouts/default.bdad11c7d9a2fc606af4.js",
    "revision": "4e40988f41bf345e9cf018f3ed933274"
  },
  {
    "url": "/_nuxt/manifest.8632312d0e91f537e74d.js",
    "revision": "e829217ea9f9808700649dcc69d4508f"
  },
  {
    "url": "/_nuxt/pages/about.4eb56776c2aa92c42c6e.js",
    "revision": "9c3bb76d071689a65c0d04a2f8ebba0c"
  },
  {
    "url": "/_nuxt/pages/html/basic.e62b636ccbdfccc73b98.js",
    "revision": "3c7cfff4f14fb7499ce5a244eb755a4e"
  },
  {
    "url": "/_nuxt/pages/html/index.ef8a15c4a4ab94402d4f.js",
    "revision": "e21872e77e6ee411de2cf11bba8af09d"
  },
  {
    "url": "/_nuxt/pages/index.0769adf1b39277117afe.js",
    "revision": "e0778bcfc2485f99163e77d022225595"
  },
  {
    "url": "/_nuxt/pages/test.76c9849c664a6623a743.js",
    "revision": "63803f2fb0fb2d6168fe42dc1ebd3f1e"
  },
  {
    "url": "/_nuxt/vendor.3fad48e5fc6b2d8f0e6a.js",
    "revision": "17e2745871a1208f55b6493ef7fb5436"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

