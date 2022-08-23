<template>
  <div class="flex flex-col">
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
              <tr v-for="kenki in kenkis" :key="kenki.name">
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

const { data: kenkis } = await useFetch("/api/firebase");
</script>
