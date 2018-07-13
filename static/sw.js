importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nekyoku-note",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.229ba9f5615115badeb6.js",
    "revision": "f3ea9543b8dc4d10eb48705134fff15e"
  },
  {
    "url": "/_nuxt/layouts/default.1ef939b154ee280dea14.js",
    "revision": "3a79378e5ab4d34299a9f740dad1c0a4"
  },
  {
    "url": "/_nuxt/manifest.87cce596b8fee8ac7de3.js",
    "revision": "ac9a69eceb99bb6843f5686a1a8df795"
  },
  {
    "url": "/_nuxt/pages/about.6e0b28b0435aa27e4c6b.js",
    "revision": "fb2770c524f0ae6fba52cf424ca5b9e4"
  },
  {
    "url": "/_nuxt/pages/html/basic.07abbad6538d0ba89bbe.js",
    "revision": "3bb678db4f6977a64f1f05a656283352"
  },
  {
    "url": "/_nuxt/pages/html/index.72d053646caa03993e13.js",
    "revision": "4d7b0719a5769618e7c325737d54ca36"
  },
  {
    "url": "/_nuxt/pages/index.f5090d77c5b7e3f9aa34.js",
    "revision": "0cb93f0c8588c75c1190d43bd5c44c52"
  },
  {
    "url": "/_nuxt/pages/javascript/basic.69514d9c31cd9fd7d787.js",
    "revision": "38b5d12cfbe9189f10e09c7b73b9e7a5"
  },
  {
    "url": "/_nuxt/pages/javascript/basicDom.df8199584d4a1529ca34.js",
    "revision": "c78f977c8fa51d24d4acd8de68b30326"
  },
  {
    "url": "/_nuxt/pages/test.3c11ab9be450e5f96303.js",
    "revision": "4666507ca8f1202e91397d2877f72fd7"
  },
  {
    "url": "/_nuxt/vendor.4f72840bacc552ebb1c9.js",
    "revision": "ce12aba2820134a6c5ffc4400e260c7c"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

