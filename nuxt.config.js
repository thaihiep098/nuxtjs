import fs from 'fs'
import path from 'path'
import dotenvExpand from 'dotenv-expand'
import { DEFAULT_LOCALE } from './constants'
dotenvExpand(require('dotenv').config())

const locales = fs
  .readdirSync(path.join(__dirname, 'locales'))
  .map((file) => file.replace(/\.json/, ''))

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'upsell',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/main.scss', '~/assets/bootstrap.min.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/firebase',
    'nuxt-i18n',
    'nuxt-webfontloader',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.NUXT_ENV_SERVER_BASE_URL,
  },

  // Config style resource
  styleResources: {
    scss: [
      '~/assets/styles/base/colors.scss',
      '~/assets/styles/base/mixins.scss',
    ],
  },

  // Firebase configuration
  firebase: {
    config: {
      apiKey: process.env.NUXT_ENV_FIREBASE_API_KEY,
      authDomain: process.env.NUXT_ENV_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NUXT_ENV_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NUXT_ENV_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NUXT_ENV_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NUXT_ENV_FIREBASE_APP_ID,
      measurementId: process.env.NUXT_ENV_FIREBASE_MEASUREMENT_ID,
    },
    services: {
      firestore: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // I18n
  i18n: {
    locales: locales.map((locale) => ({
      code: locale,
      file: `${locale}.json`,
    })),
    defaultLocale: DEFAULT_LOCALE,
    vuex: false,
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: DEFAULT_LOCALE,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
  },
}
