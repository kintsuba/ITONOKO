<template>
  <div>
    <ItonokoBreadcrumb :breadcrumbs="breadcrumbs" class="ml-4 mt-4" />
    <main class="container mx-auto px-4">
      <h1 class="text-2xl font-bold font-display my-6">属性編集</h1>
      <AttributeTable />
    </main>
    <ExtendedFab @click="$router.push('/attribute/add')">
      <IconAdd color="#29535E" width="24" height="24" />
      <span class="ml-1 font-bold">属性追加</span>
    </ExtendedFab>
  </div>
</template>

<script setup lang="ts">
import IconAdd from "~icons/material-symbols/add";

const AttributeTable = resolveComponent("table/AttributeTable");
const ExtendedFab = resolveComponent("form/button/ExtendedFab");

const breadcrumbs = [
  {
    name: "属性編集",
    to: "/attribute/list",
  },
];
</script>
