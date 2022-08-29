<template>
  <button
    class="fixed bottom-4 right-4 px-6 h-14 bg-secondary-default rounded-2xl hover:bg-secondary-darker active:bg-secondary-dark shadow hover:shadow-md shadow transition ease-in duration-200 focus:outline-none flex items-center justify-center"
    @click="$router.push('/kenki/add')"
  >
    <IconAdd color="#29535E" width="24" height="24" />
    <span class="ml-1 font-bold">建姫を追加</span>
  </button>
</template>

<script setup lang="ts">
import IconAdd from "~icons/material-symbols/add";
</script>
