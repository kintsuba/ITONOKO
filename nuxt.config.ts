export default defineNuxtConfig({
  ssr: true,
  target: "server",
  srcDir: "src/",
  modules: ["nuxt-windicss", "unplugin-icons/nuxt"],
});
