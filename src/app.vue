<template>
  <div class="bg-primary-100 text-primary-900 h-screen">
    <ItonokoHeader />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const ItonokoHeader = resolveComponent("ItonokoHeader");

useHead({
  title: "ITONOKO Editor",
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
