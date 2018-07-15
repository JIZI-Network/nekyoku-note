module.exports = {
  head: {
    title: 'Nekyoku Note',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'JIZI-network project' },
      { name: 'msapplication-TileColor', content: '#cccccc'},
      { name: 'theme-color', content: '#cccccc'}
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
      { rel: 'manifest', href: '/site.webmanifest'},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  loading: '~/components/loading.vue',
  modules: [
    '@nuxtjs/markdownit','@nuxtjs/pwa'
  ],
  markdownit: {
    preset: 'default',
    linkify: true,
    injected: true
  },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    dir: 'docs'
  },
  manifest: {
    name: 'nekyoku-note',
    short_name: 'ne',
    title: 'nekyoku-note',
    'og:title': 'nekyoku-note',
    description: 'written by jizi-nekyoku',
    'og:description': 'written by jizi-nekyoku',
    lang: 'ja',
    theme_color: '#cccccc',
    background_color: '#ffffff'
  }
}
