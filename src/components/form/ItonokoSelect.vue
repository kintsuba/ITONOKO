<template>
  <select
    :title="title"
    class="bg-primary-100 px-3 py-2 rounded border-primary-500 focus:border-primary-600 focus:ring-primary-600 focus-visible:outline-none"
    v-model="modelValue"
    @update:modelValue="
      SelectedValue = $event;
      $emit('update:modelValue', SelectedValue);
    "
  >
    <option v-for="value in values" key="value" class="">
      {{ value }}
    </option>
  </select>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  values: Array<String>,
  modelValue: String,
  placeholder: String,
});

const SelectedValue = ref<string>();

const emit = defineEmits<{
  (e: "update:modelValue", SelectedValue: string);
}>();
</script>
