<template>
  <div class="flex flex-col items-stretch">
    <div
      class="border border-primary-500 py-1.5 px-3 mr-1.5 mb-3"
      :class="[isDisplayedSearchMenu ? 'ml-1.5' : 'ml-auto']"
    >
      <div class="flex justify-end">
        <div
          class="flex items-center cursor-pointer"
          @click="isDisplayedSearchMenu = !isDisplayedSearchMenu"
        >
          <IconSearchRounded width="36" height="36" color="#59B4CE" />
          <span class="text-primary-500">検索</span>
          <Transition name="spin" mode="out-in">
            <IconArrowDropDown
              width="36"
              height="36"
              color="#59B4CE"
              v-if="!isDisplayedSearchMenu"
            />
            <IconArrowDropUp width="36" height="36" color="#59B4CE" v-else />
          </Transition>
        </div>
      </div>
      <div
        v-if="isDisplayedSearchMenu"
        class="mx-auto w-full lg:w-5/7 xl:w-4/7 my-8"
      >
        <div class="grid md:grid-cols-3 gap-4 items-center">
          <label class="font-bold mr-3">建姫名</label>
          <ItonokoInput :placeholder="`糸ノコ`" v-model="inputName" />

          <label class="font-bold mr-2">レアリティ</label>

          <ItonokoCheckboxes
            :values="rarities"
            :valueName="`レアリティ`"
            v-model="checkedRarities"
          />

          <label class="font-bold mr-2">種別</label>
          <ItonokoCheckboxes
            :values="types"
            :valueName="`種別`"
            v-model="checkedTypes"
          />
        </div>
      </div>
    </div>

    <div class="overflow-x-auto">
      <div class="p-1.5 w-full inline-block align-middle">
        <div class="overflow-hidden border-primary-500 border rounded">
          <table class="min-w-full divide-y divide-primary-500">
            <thead class="bg-primary-500">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-sm font-bold text-center text-gray-50"
                >
                  建姫名
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-sm font-bold text-center text-gray-50"
                >
                  レアリティ
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-sm font-bold text-center text-gray-50"
                >
                  種別
                </th>

                <th
                  scope="col"
                  class="hidden lg:block px-6 py-3 text-sm font-bold text-center text-gray-50"
                >
                  スキル
                </th>

                <th scope="col"></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-blue-200">
              <tr
                v-for="kenki in isFiltered ? filteredKenkis : kenkis"
                :key="kenki.name"
              >
                <td
                  class="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap"
                >
                  {{ kenki.name }}
                </td>
                <td
                  class="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap"
                >
                  {{ kenki.rarity }}
                </td>
                <td
                  class="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap"
                >
                  {{ kenki.type }}
                </td>
                <td
                  class="hidden lg:block px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap"
                >
                  <div class="grid grid-cols-4 gap-1">
                    <span v-for="skill in kenki.skills" :key="skill">{{
                      skill
                    }}</span>
                  </div>
                </td>

                <td
                  class="pr-2 text-sm text-center text-gray-800 w-1 cursor-pointer"
                >
                  <IconArrowDropDown width="36" height="36" color="#59B4CE" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconArrowDropDown from "~icons/material-symbols/arrow-drop-down";
import IconArrowDropUp from "~icons/material-symbols/arrow-drop-up";
import IconSearchRounded from "~icons/material-symbols/search-rounded";

import ItonokoCheckboxes from "@/components/form/ItonokoCheckboxes.vue";
import ItonokoInput from "@/components/form/ItonokoInput.vue";

const { data: kenkis } = await useFetch("/api/kenkis/get");
const rarities = ["R", "SR", "SSR"];
const types = ["遊種", "兵種", "騎種", "王種", "神種"];

const isDisplayedSearchMenu = ref<boolean>(false);
const inputName = ref<string>("");
const checkedRarities = ref<string[]>(rarities);
const checkedTypes = ref<string[]>(types);

const isFiltered = computed(() => checkedRarities.value.length !== 0);

const filteredKenkis = computed(() => {
  return kenkis.value?.filter(
    (kenki) =>
      kenki.name.includes(inputName.value) &&
      checkedRarities.value.some((rarity) => rarity === kenki.rarity) &&
      checkedTypes.value.some((type) => type === kenki.type)
  );
});
</script>

<style scoped>
.spin-enter-active {
  transition: transform 0.25s ease;
}
.spin-enter-from {
  transform: rotateZ(180deg);
}
.spin-leave-to {
  transform: rotateZ(0deg);
}
</style>
