<template>
  <div class="flex flex-col items-stretch">
    <div
      class="border py-1.5 px-5 mr-1.5 mb-3"
      :class="[isDisplayedSearchMenu ? 'ml-1.5' : 'ml-auto']"
    >
      <div class="flex justify-end">
        <div
          class="flex items-center cursor-pointer"
          @click="isDisplayedSearchMenu = !isDisplayedSearchMenu"
        >
          <IconSearchRounded width="36" height="36" color="#1f2937" />
          <span class="text-lg">検索</span>
          <Transition name="spin" mode="out-in">
            <IconArrowDropDown
              width="36"
              height="36"
              color="#1f2937"
              v-if="!isDisplayedSearchMenu"
            />
            <IconArrowDropUp width="36" height="36" color="#1f2937" v-else />
          </Transition>
        </div>
      </div>
      <div
        v-if="isDisplayedSearchMenu"
        class="mx-auto w-full lg:w-5/7 xl:w-4/7 my-8"
      >
        <div class="grid grid-cols-3 gap-4 items-center">
          <label class="font-bold mr-3">建姫名</label>
          <input
            type="text"
            class="rounded col-span-2"
            placeholder="糸ノコ"
            v-model="inputName"
          />

          <label class="font-bold mr-2">レアリティ</label>
          <fieldset class="flex items-center col-span-2">
            <label
              v-for="rarity in rarities"
              class="flex gap-1 items-center text-lg mx-2"
            >
              <input
                type="checkbox"
                :value="rarity"
                class="rounded"
                v-model="checkedRarities"
              />
              <p>{{ rarity }}</p>
            </label>
          </fieldset>

          <label class="font-bold mr-2">種別</label>
          <fieldset class="flex items-center col-span-2">
            <label
              v-for="type in types"
              class="flex gap-1 items-center text-lg mx-2"
            >
              <input
                type="checkbox"
                :value="type"
                class="rounded"
                v-model="checkeTypes"
              />
              <p>{{ type }}</p>
            </label>
          </fieldset>
        </div>
      </div>
    </div>

    <div class="overflow-x-auto">
      <div class="p-1.5 w-full inline-block align-middle">
        <div class="overflow-hidden border rounded">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-[#848484]">
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
            <tbody class="divide-y divide-gray-200">
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
                  <IconArrowDropDown width="36" height="36" color="#1f2937" />
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

const { data: kenkis } = await useFetch("/api/getKenkis");
const rarities = ["R", "SR", "SSR"];
const types = ["遊種", "兵種", "騎種", "王種", "神種"];

const isDisplayedSearchMenu = ref<boolean>(false);
const inputName = ref<string>("");
const checkedRarities = ref<string[]>(rarities);
const checkeTypes = ref<string[]>(types);

const isFiltered = computed(() => checkedRarities.value.length !== 0);

const filteredKenkis = computed(() => {
  return kenkis.value.filter(
    (kenki) =>
      kenki.name.includes(inputName.value) &&
      checkedRarities.value.some((rarity) => rarity === kenki.rarity) &&
      checkeTypes.value.some((type) => type === kenki.type)
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
