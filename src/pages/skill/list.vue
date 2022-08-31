<template>
  <div>
    <ItonokoBreadcrumb :breadcrumbs="breadcrumbs" class="ml-4 mt-4" />
    <main class="container mx-auto px-4">
      <h1 class="text-2xl font-bold font-display my-6">スキル編集</h1>
      <SkillTable />
    </main>
    <ExtendedFab @click="$router.push('/skill/add')">
      <IconAdd color="#29535E" width="24" height="24" />
      <span class="ml-1 font-bold">スキル追加</span>
    </ExtendedFab>
  </div>
</template>

<script setup lang="ts">
import IconAdd from "~icons/material-symbols/add";

const SkillTable = resolveComponent("table/SkillTable");
const ExtendedFab = resolveComponent("form/button/ExtendedFab");

const breadcrumbs = [
  {
    name: "スキル編集",
    to: "/skill/list",
  },
];
</script>
