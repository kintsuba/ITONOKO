<template>
  <div>
    <ItonokoBreadcrumb :breadcrumbs="breadcrumbs" class="ml-4 mt-4" />
    <main class="container mx-auto px-4">
      <h1 class="text-2xl font-bold font-display my-6">特徴追加</h1>
      <CharacteristicEditor />
    </main>
  </div>
</template>

<script setup lang="ts">
const CharacteristicEditor = resolveComponent("editor/CharacteristicEditor");

const breadcrumbs = [
  {
    name: "特徴追加",
    to: "/characteristic/add",
  },
];
</script>
