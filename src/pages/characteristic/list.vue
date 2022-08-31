<template>
  <div>
    <ItonokoBreadcrumb :breadcrumbs="breadcrumbs" class="ml-4 mt-4" />
    <main class="container mx-auto px-4">
      <h1 class="text-2xl font-bold font-display my-6">特徴編集</h1>
      <CharacteristicTable />
    </main>
    <ExtendedFab @click="$router.push('/characteristic/add')">
      <IconAdd color="#29535E" width="24" height="24" />
      <span class="ml-1 font-bold">特徴追加</span>
    </ExtendedFab>
  </div>
</template>

<script setup lang="ts">
import IconAdd from "~icons/material-symbols/add";

const CharacteristicTable = resolveComponent("table/CharacteristicTable");
const ExtendedFab = resolveComponent("form/button/ExtendedFab");

const breadcrumbs = [
  {
    name: "特徴編集",
    to: "/characteristic/list",
  },
];
</script>
