<template>
  <div>
    <ItonokoBreadcrumb :breadcrumbs="breadcrumbs" class="ml-4 mt-4" />
    <main class="container mx-auto px-4">
      <h1 class="text-2xl font-bold font-display my-6">建姫追加</h1>

      <section class="grid grid-cols-1 justify-items-center">
        <div
          class="grid grid-cols-3 gap-4 w-full lg:w-5/7 xl:w-4/7 my-8 items-center"
        >
          <label class="font-bold mr-3">建姫名</label>

          <ItonokoInput placeholder="糸ノコ" class="col-span-2"></ItonokoInput>

          <label class="font-bold mr-3">レアリティ</label>
          <ItonokoSelect
            :title="`rarity`"
            :values="rarities"
            v-model="selectedRarity"
            class="col-span-2"
          />

          <label class="font-bold mr-3">種別</label>
          <ItonokoSelect
            :title="`type`"
            :values="types"
            v-model="selectedType"
            class="col-span-2"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import ItonokoSelect from "@/components/form/ItonokoSelect.vue";
import ItonokoInput from "@/components/form/ItonokoInput.vue";

const breadcrumbs = [
  {
    name: "建機追加",
    to: "/KenkiAdd",
  },
];

const rarities = ["R", "SR", "SSR"];
const types = ["遊種", "兵種", "騎種", "王種", "神種"];

const selectedRarity = ref<string>(rarities[0]);
const selectedType = ref<string>(types[0]);
</script>
