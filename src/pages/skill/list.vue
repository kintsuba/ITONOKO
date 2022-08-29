<template>
  <div>
    <ItonokoBreadcrumb :breadcrumbs="breadcrumbs" class="ml-4 mt-4" />
    <main class="container mx-auto px-4">
      <h1 class="text-2xl font-bold font-display my-6">スキル編集</h1>
    </main>
  </div>
</template>

<script setup lang="ts">
import KenkiTable from "@/components/KenkiTable.vue";
import ItonokoFab from "@/components/ItonokoFab.vue";

const breadcrumbs = [
  {
    name: "スキル編集",
    to: "/skill/list",
  },
];
</script>
