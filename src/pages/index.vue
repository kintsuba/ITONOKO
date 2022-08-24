<template>
  <main class="container mx-auto px-4">
    <h1 class="text-2xl font-bold font-display my-6">建姫編集</h1>

    <KenkiTable />
    <ItonokoFab />
  </main>
</template>

<script setup lang="ts">
import KenkiTable from "@/components/KenkiTable.vue";
import ItonokoFab from "@/components/ItonokoFab.vue";
</script>
