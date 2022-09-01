<template>
  <section class="grid grid-cols-1 justify-items-center">
    <div
      class="grid grid-cols-3 gap-4 w-full lg:w-5/7 xl:w-4/7 my-8 items-center"
    >
      <label class="font-bold mr-3">属性名</label>
      <ItonokoInput
        placeholder="回避支援・壱"
        class="col-span-2"
        v-model="name"
      ></ItonokoInput>
    </div>
    <div class="flex gap-4 mt-4">
      <OutlinedButton @click="$router.go(-1)">キャンセル</OutlinedButton>
      <FilledButton :disabled="!creatable" @click="createAttribute">
        登録
      </FilledButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { Attribute } from "@/types/attribute";

const ItonokoInput = resolveComponent("form/ItonokoInput");
const ItonokoTextarea = resolveComponent("form/ItonokoTextarea");
const ItonokoSelect = resolveComponent("form/ItonokoSelect");
const FilledButton = resolveComponent("form/button/FilledButton");
const OutlinedButton = resolveComponent("form/button/OutlinedButton");

const props = defineProps<{
  editingAttribute?: Attribute;
}>();

const name = ref<string>(
  props.editingAttribute ? props.editingAttribute.name : ""
);

const creatable = computed(() => name.value !== "");

const createAttribute = async () => {
  const res = await useFetch("/api/attributes/set", {
    method: "POST",
    body: {
      id: props.editingAttribute ? props.editingAttribute.id : uuidv4(),
      name: name.value,
    },
    initialCache: false,
  });

  if (!(res instanceof Error)) {
    const router = useRouter();
    router.push("/attribute/list");
  } else {
    alert("エラー: " + res.error.value);
  }
};
</script>
