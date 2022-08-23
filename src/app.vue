<template>
  <div>
    <ItonokoHeader />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const ItonokoHeader = resolveComponent("ItonokoHeader");

useHead({
  title: "ITONOKO",
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
  htmlAttrs: {
    lang: "ja",
  },
  meta: [
    {
      name: "description",
      content:
        "いつもオヤカタに寄りそう糸ノコちゃんをイメージした、『毎日こつこつ俺タワー』のデータベースサイトです。",
    },
  ],
});
</script>
