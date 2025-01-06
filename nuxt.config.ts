import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["vuetify/styles"],
  plugins: ["~/plugins/vuetify.js"],
  build: {
    transpile: ["vuetify"],
  },
  app: {
    baseURL: "/",
  },
  nitro: {
    preset: "vercel",
    output: {
      dir: "../../.vercel/output",
    },
  },
  runtimeConfig: {
    public: { apiBase: "https://crm-app-api.vercel.app/api" },
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins?.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
