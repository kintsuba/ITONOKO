<template>
  <div>
    <ItonokoBreadcrumb :breadcrumbs="breadcrumbs" class="ml-4 mt-4" />
    <main class="container mx-auto px-4">
      <h1 class="text-2xl font-bold font-display my-6">属性追加</h1>
      <AttributeEditor />
    </main>
  </div>
</template>

<script setup lang="ts">
const AttributeEditor = resolveComponent("editor/AttributeEditor");

const breadcrumbs = [
  {
    name: "属性追加",
    to: "/attribute/add",
  },
];
</script>
