// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles/styles.css"],
  modules: ["@nuxt/ui"],
  colorMode: {
    preference: "light",
  },
});
