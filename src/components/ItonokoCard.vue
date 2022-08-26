<template>
  <nuxt-link
    :to="to"
    class="block p-6 max-w-sm bg-primary-100 rounded-lg border border-gray-200 shadow hover:bg-secondary-default"
  >
    <h5 class="mb-2 text-xl font-bold">
      {{ title }}
    </h5>
    <p class="font-normal">
      {{ description }}
    </p>
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  to: String,
  title: String,
  description: String,
});
</script>
