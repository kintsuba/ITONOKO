<template>
  <section class="grid grid-cols-1 justify-items-center">
    <div
      class="grid grid-cols-3 gap-4 w-full lg:w-5/7 xl:w-4/7 my-8 items-center"
    >
      <label class="font-bold mr-3">デフォルト名</label>
      <ItonokoInput
        placeholder="ここにはRank1のときの名称を入力してください"
        class="col-span-2"
        v-model="name"
      ></ItonokoInput>
    </div>
    <transition-group
      enter-active-class="animate-animated animate-fadeInDown"
      leave-active-class="animate-animated animate-fadeOut"
      move-class="animate-animated"
    >
      <div
        class="grid grid-cols-3 gap-4 w-full lg:w-5/7 xl:w-4/7 my-8 items-center"
        v-for="(rankDetail, index) in rankDetails"
        :key="rankDetail.id"
      >
        <h3 class="font-bold mr-3 col-span-3 text-center">
          Rank{{ index + 1 }}
        </h3>
        <label class="font-bold mr-3 col-span-1">特徴名</label>
        <ItonokoInput
          placeholder="省略した場合はデフォルト名が入力されます"
          class="col-span-2"
          v-model="rankDetail.name"
        />
        <label class="font-bold mr-3">ゲーム内説明</label>
        <ItonokoTextarea
          class="col-span-2"
          placeholder="命中+10"
          v-model="rankDetail.inGameDescription"
        />
        <label class="font-bold mr-3">備考</label>
        <ItonokoTextarea
          class="col-span-2"
          placeholder="（省略可）"
          v-model="rankDetail.note"
        />
      </div>
    </transition-group>

    <div class="flex gap-4 mt-4">
      <OutlinedButton
        @click="reduceRank"
        class="flex gap-1 items-center !hover:bg-red-400 !hover:text-white"
      >
        <IconRemoveRounded width="24" height="24" color="currentcolor" />
        <span class="text-sm"> 最大Rankを減らす </span>
      </OutlinedButton>
      <OutlinedButton @click="increaseRank" class="flex gap-1 items-center">
        <IconAddRounded width="24" height="24" color="currentcolor" />
        <span class="text-sm">最大Rankを増やす</span>
      </OutlinedButton>
    </div>

    <div class="flex gap-4 my-15">
      <OutlinedButton
        @click="$router.go(-1)"
        class="!hover:bg-red-400 !hover:text-white"
        >キャンセル</OutlinedButton
      >
      <FilledButton :disabled="!creatable" @click="createSkill">
        登録
      </FilledButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Characteristic, RankDetail } from "@/types/characteristic";
import { v4 as uuidv4 } from "uuid";
import IconAddRounded from "~icons/material-symbols/add-rounded";
import IconRemoveRounded from "~icons/material-symbols/remove-rounded";

const ItonokoInput = resolveComponent("form/ItonokoInput");
const ItonokoTextarea = resolveComponent("form/ItonokoTextarea");
const FilledButton = resolveComponent("form/button/FilledButton");
const OutlinedButton = resolveComponent("form/button/OutlinedButton");

const props = defineProps<{
  editingCharacteristic?: Characteristic;
}>();

const name = ref<string>(
  props.editingCharacteristic ? props.editingCharacteristic.name : ""
);
const rankDetails = ref<RankDetail[]>(
  props.editingCharacteristic
    ? props.editingCharacteristic.rankDetails
    : [
        {
          id: uuidv4(),
          name: "",
          inGameDescription: "",
          note: "",
        },
        {
          id: uuidv4(),
          name: "",
          inGameDescription: "",
          note: "",
        },
        {
          id: uuidv4(),
          name: "",
          inGameDescription: "",
          note: "",
        },
      ]
);

const creatable = computed(() => true);

const increaseRank = () => {
  rankDetails.value.push({
    id: uuidv4(),
    name: "",
    inGameDescription: "",
    note: "",
  });
};

const reduceRank = () => {
  rankDetails.value.pop();
};

const createSkill = async () => {
  rankDetails.value.forEach((rd) => {
    if (rd.name === "") rd.name = name.value;
  });

  const res = await useFetch("/api/characteristics/set", {
    method: "POST",
    body: {
      id: props.editingCharacteristic
        ? props.editingCharacteristic.id
        : uuidv4(),
      name: name.value,
      maxRank: rankDetails.value.length,
      rankDetails: rankDetails.value,
    },
  });

  if (!(res instanceof Error)) {
    const router = useRouter();
    router.push("/characteristic/list");
  } else {
    alert("エラー: " + res.error.value);
  }
};
</script>
