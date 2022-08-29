<template>
  <div>
    <ItonokoBreadcrumb :breadcrumbs="breadcrumbs" class="ml-4 mt-4" />
    <main class="container mx-auto px-4">
      <h1 class="text-2xl font-bold font-display my-6">スキル追加</h1>

      <section class="grid grid-cols-1 justify-items-center">
        <div
          class="grid grid-cols-3 gap-4 w-full lg:w-5/7 xl:w-4/7 my-8 items-center"
        >
          <label class="font-bold mr-3">スキル名</label>
          <ItonokoInput
            placeholder="回避支援・壱"
            class="col-span-2"
            v-model="name"
          ></ItonokoInput>
          <label class="font-bold mr-3">ゲーム内説明</label>
          <ItonokoTextarea
            class="col-span-2"
            placeholder="味方全体の回避を強化"
            v-model="inGameDescription"
          />
          <label class="font-bold mr-3">スキル詳細</label>
          <ItonokoTextarea
            class="col-span-2"
            placeholder="「○○が〇%上昇する」などを記入。省略可"
            v-model="description"
          />
          <label class="font-bold mr-3">カテゴリ</label>
          <ItonokoSelect
            :values="skillCategories.map((sc) => sc.name)"
            class="col-span-2"
            v-model="category"
          />
        </div>
        <div class="flex gap-4 mt-4">
          <OutlinedButton @click="$router.go(-1)">キャンセル</OutlinedButton>
          <FilledButton :disabled="!creatable" @click="createSkill">
            登録
          </FilledButton>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";

const ItonokoInput = resolveComponent("form/ItonokoInput");
const ItonokoTextarea = resolveComponent("form/ItonokoTextarea");
const ItonokoSelect = resolveComponent("form/ItonokoSelect");
const FilledButton = resolveComponent("form/button/FilledButton");
const OutlinedButton = resolveComponent("form/button/OutlinedButton");

const breadcrumbs = [
  {
    name: "スキル追加",
    to: "/skill/add",
  },
];

const { data: skillCategories } = await useFetch("/api/skillCategories/get");

const name = ref<string>("");
const inGameDescription = ref<string>("");
const description = ref<string>("");
const category = ref<string>("");

const creatable = computed(
  () =>
    name.value !== "" && inGameDescription.value !== "" && category.value !== ""
);

const createSkill = async () => {
  const { data: skillCategories } = await useFetch("/api/skillCategories/get");

  const res = await useFetch("/api/skillCategories/set", {
    method: "POST",
    body: {
      id: uuidv4(),
      name: name.value,
      inGameDescription: inGameDescription.value,
      description: description.value ?? "",
      category: skillCategories.value.find((sc) => sc.name === category.value),
    },
  });

  if (!(res instanceof Error)) {
    const router = useRouter();
    router.push("/skill/list");
  } else {
    alert("エラー: " + res.error.value);
  }
};
</script>
