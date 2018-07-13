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
    "url": "/_nuxt/layouts/default.2ac335ca5d6a6ef9ba60.js",
    "revision": "83a9c9537e9ab78ea731ac37697f66db"
  },
  {
    "url": "/_nuxt/manifest.bd60215622d54d9e1131.js",
    "revision": "3bfa69705b434155b1f13cb5b6897b06"
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
    "url": "/_nuxt/pages/index.f5090d77c5b7e3f9aa34.js",
    "revision": "0cb93f0c8588c75c1190d43bd5c44c52"
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

