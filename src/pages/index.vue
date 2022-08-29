<template>
  <main class="container mx-auto px-4">
    <h1 class="text-2xl font-bold font-display my-6 flex items-center">
      <IconHome color="#29535E" width="24" height="24" />
      <span class="ml-1">Home</span>
    </h1>

    <section class="mt-16 mx-4">
      <h2 class="text-xl font-bold font-display my-6">メニュー</h2>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <ItonokoCard
          :to="menu.to"
          :title="menu.title"
          :description="menu.description"
          v-for="menu in menus"
          key="menu.title"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import IconHome from "~icons/material-symbols/home";

import ItonokoCard from "@/components/ItonokoCard.vue";

const menus = [
  {
    to: "/kenki/list",
    title: "建姫編集",
    description: "建姫を確認・修正したいとき",
  },
  {
    to: "/kenki/add",
    title: "建姫追加",
    description: "新しく建姫を追加したいとき",
  },
  {
    to: "/skill/list",
    title: "スキル編集",
    description: "スキルを確認・修正したいとき",
  },
  {
    to: "/skill/add",
    title: "スキル追加",
    description: "新しくスキルを追加したいとき",
  },
];
</script>
