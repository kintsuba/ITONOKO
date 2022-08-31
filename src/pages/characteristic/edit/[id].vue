<template>
  <div>
    <ItonokoBreadcrumb :breadcrumbs="breadcrumbs" class="ml-4 mt-4" />
    <main class="container mx-auto px-4">
      <h1 class="text-2xl font-bold font-display my-6">スキル追加</h1>
      <CharacteristicEditor
        :editingCharacteristic="(editingCharacteristic as Characteristic)"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import { Characteristic } from "@/types/characteristic";
const CharacteristicEditor = resolveComponent("editor/CharacteristicEditor");

const route = useRoute();
const id = route.params.id as string;
const { data: editingCharacteristic } = await useFetch(
  "/api/characteristics/get/id/" + id,
  {
    initialCache: false,
  }
);

const breadcrumbs = [
  {
    name: "特徴編集",
    to: "/characteristic/list",
  },
  {
    name: (editingCharacteristic.value as Characteristic).name,
    to: `/characteristic/edit/${id}`,
  },
];
</script>
