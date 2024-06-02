// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'light'
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: ["@nuxt/ui", '@vueuse/nuxt'],
})
