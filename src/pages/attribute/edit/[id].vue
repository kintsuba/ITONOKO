<template>
  <div>
    <ItonokoBreadcrumb :breadcrumbs="breadcrumbs" class="ml-4 mt-4" />
    <main class="container mx-auto px-4">
      <h1 class="text-2xl font-bold font-display my-6">属性追加</h1>
      <AttributeEditor :editingAttribute="(editingAttribute as Attribute)" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { Attribute } from "@/types/attribute";
const AttributeEditor = resolveComponent("editor/AttributeEditor");

const route = useRoute();
const id = route.params.id as string;
const { data: editingAttribute } = await useFetch(
  "/api/attributes/get/id/" + id
);

const breadcrumbs = [
  {
    name: "属性編集",
    to: "/attribute/add",
  },
  {
    name: (editingAttribute.value as Attribute).name,
    to: "/attribute/add",
  },
];
</script>
