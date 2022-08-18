<template>
  <main class="container mx-auto px-4">
    <h1 class="text-2xl font-bold font-display my-6">建姫一覧</h1>
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
                    class="hidden xl:block px-6 py-3 text-sm font-bold text-center text-gray-50"
                  >
                    種別
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-sm font-bold text-center text-gray-50"
                  >
                    属性
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-sm font-bold text-center text-gray-50"
                  >
                    スキル
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-sm font-bold text-center text-gray-50"
                  >
                    特徴
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
                    class="hidden xl:block px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap"
                  >
                    {{ kenki.type }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap"
                  >
                    <div class="grid grid-cols-4 gap-1">
                      <span
                        v-for="attribute in kenki.attributes"
                        :key="attribute"
                        >{{ attribute }}</span
                      >
                    </div>
                  </td>
                  <td
                    class="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap"
                  >
                    <div class="grid grid-cols-4 gap-1">
                      <span v-for="skill in kenki.skills" :key="skill">{{
                        skill
                      }}</span>
                    </div>
                  </td>
                  <td
                    class="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap"
                  >
                    <div class="grid grid-cols-2 gap-1">
                      <span
                        v-for="characteristic in kenki.characteristics"
                        :key="characteristic"
                      >
                        {{ characteristic }}
                      </span>
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
  </main>
</template>

<script setup lang="ts">
import IconArrowDropDown from "~icons/material-symbols/arrow-drop-down";

const kenkis = [
  {
    name: "糸ノコ",
    rarity: "R",
    type: "遊種",
    attributes: ["切断"],
    skills: ["回避支援・壱", "共振術・壱", "見切り・壱", "生産匠・壱"],
    characteristics: ["お嬢様", "おしとやか"],
  },
  {
    name: "ペンチ",
    rarity: "R",
    type: "遊種",
    attributes: ["切断"],
    skills: ["回避支援・壱", "共振術・壱", "見切り・壱", "生産匠・壱"],
    characteristics: ["お嬢様", "おしとやか"],
  },
  {
    name: "金鎚",
    rarity: "R",
    type: "遊種",
    attributes: ["切断"],
    skills: ["回避支援・壱", "共振術・壱", "見切り・壱", "生産匠・壱"],
    characteristics: ["お嬢様", "おしとやか"],
  },
];
</script>
