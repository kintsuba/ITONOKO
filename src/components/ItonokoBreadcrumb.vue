<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <nuxt-link
          to="/"
          class="inline-flex items-center text-sm font-medium hover:text-gray-900"
        >
          <IconHome color="#29535E" width="18" height="18" />

          Home
        </nuxt-link>
      </li>
      <li v-for="breadcrumb in breadcrumbs" :key="breadcrumb.to">
        <div class="flex items-center">
          <IconChevronRightRounded color="#29535E" width="18" height="18" />
          <nuxt-link
            :to="breadcrumb.to"
            class="ml-1 text-sm font-bold hover:text-gray-900 md:ml-2"
            >{{ breadcrumb.name }}</nuxt-link
          >
        </div>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
export type Breadcrumb = {
  name: string;
  to: string;
};
</script>

<script setup lang="ts">
import IconHome from "~icons/material-symbols/home";
import IconChevronRightRounded from "~icons/material-symbols/chevron-right-rounded";

const props = defineProps<{
  breadcrumbs: Breadcrumb[];
}>();
</script>
