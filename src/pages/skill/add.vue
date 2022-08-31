<template>
  <div>
    <ItonokoBreadcrumb :breadcrumbs="breadcrumbs" class="ml-4 mt-4" />
    <main class="container mx-auto px-4">
      <h1 class="text-2xl font-bold font-display my-6">スキル追加</h1>
      <SkillEditor />
    </main>
  </div>
</template>

<script setup lang="ts">
const SkillEditor = resolveComponent("editor/SkillEditor");

const breadcrumbs = [
  {
    name: "スキル追加",
    to: "/skill/add",
  },
];
</script>
