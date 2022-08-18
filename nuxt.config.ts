import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    title: "ITONOKO",
    htmlAttrs: {
      lang: "ja",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "いつもオヤカタに寄りそう糸ノコちゃんをイメージした、『毎日こつこつ俺タワー』のデータベースサイトです。",
      },
    ],
  },

  srcDir: "src/",

  modules: ["nuxt-windicss"],
});
