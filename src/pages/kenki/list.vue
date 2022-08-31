<template>
  <div>
    <ItonokoBreadcrumb :breadcrumbs="breadcrumbs" class="ml-4 mt-4" />
    <main class="container mx-auto px-4">
      <h1 class="text-2xl font-bold font-display my-6">建姫編集</h1>

      <KenkiTable />
      <ExtendedFab @click="$router.push('/kenki/add')">
        <IconAdd color="#29535E" width="24" height="24" />
        <span class="ml-1 font-bold">建機追加</span>
      </ExtendedFab>
    </main>
  </div>
</template>

<script setup lang="ts">
import IconAdd from "~icons/material-symbols/add";

const KenkiTable = resolveComponent("table/KenkiTable");
const ExtendedFab = resolveComponent("form/button/ExtendedFab");

const breadcrumbs = [
  {
    name: "建機編集",
    to: "/kenki/list",
  },
];
</script>
