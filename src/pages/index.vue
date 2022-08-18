<template>
  <main>
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="p-1.5 w-full inline-block align-middle">
          <div class="overflow-hidden border rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                  >
                    建姫名
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                  >
                    レアリティ
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                  >
                    種別
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="kenki in kenkis" :key="kenki.name">
                  <td
                    class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
                  >
                    {{ kenki.name }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {{ kenki.rarity }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {{ kenki.type }}
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
const kenkis = [
  {
    name: "糸ノコ",
    rarity: "R",
    type: "遊種",
  },
  {
    name: "ペンチ",
    rarity: "R",
    type: "遊種",
  },
  {
    name: "金鎚",
    rarity: "R",
    type: "遊種",
  },
];
</script>
