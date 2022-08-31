<template>
  <div class="flex flex-col items-stretch">
    <div
      class="border border-primary-500 py-1.5 px-3 mr-1.5 mb-3 rounded"
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
          <label class="font-bold mr-3">スキル名</label>
          <ItonokoInput placeholder="共振術・壱" v-model="inputName" />
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
                  スキル名
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-sm font-bold text-center text-gray-50"
                >
                  ゲーム内説明
                </th>
                <th
                  scope="col"
                  class="hidden lg:block px-6 py-3 text-sm font-bold text-center text-gray-50"
                >
                  スキル詳細
                </th>

                <th scope="col"></th>
              </tr>
            </thead>
            <transition-group
              tag="tbody"
              class="divide-y divide-blue-200"
              enter-active-class="animate-animated animate-fadeIn"
              leave-active-class="absolute"
              move-class="transition-all"
            >
              <tr
                v-for="skill in isFiltered ? filteredSkills : skills"
                :key="skill.name"
              >
                <td
                  class="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap"
                >
                  {{ skill.name }}
                </td>
                <td class="px-6 py-4 text-sm text-center text-gray-800">
                  {{ skill.inGameDescription }}
                </td>
                <td
                  class="hidden lg:block px-6 py-4 text-sm text-center text-gray-800"
                >
                  {{ skill.description }}
                </td>

                <td class="pr-2 text-sm text-center text-gray-800 w-1">
                  <OutlinedButton
                    class="flex gap-1 justify-center md:w-25"
                    @click="$router.push('/skill/edit/' + skill.id)"
                  >
                    <IconEdit width="18" height="18" color="currentColor" />
                    <span class="hidden md:block">編集</span>
                  </OutlinedButton>
                </td>
              </tr>
            </transition-group>
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
import IconEdit from "~icons/material-symbols/edit";

const ItonokoInput = resolveComponent("form/ItonokoInput");
const OutlinedButton = resolveComponent("form/button/OutlinedButton");

const { data: skills } = await useFetch("/api/skills/get", {
  initialCache: false,
});

const isDisplayedSearchMenu = ref<boolean>(false);
const inputName = ref<string>("");

const isFiltered = computed(() => inputName.value !== "");
const filteredSkills = computed(() => {
  return skills.value.filter((skill) => skill.name.includes(inputName.value));
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
