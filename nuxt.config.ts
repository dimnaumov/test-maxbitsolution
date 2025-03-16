// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxt/image'],

  css: ['@/assets/styles/index.scss'],

  components: [
    '~/components',
    '~/containers',
  ],
});
