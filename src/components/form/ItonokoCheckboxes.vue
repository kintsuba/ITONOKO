<template>
  <fieldset class="flex items-center col-span-2">
    <label
      v-for="value in values"
      class="flex gap-1 items-center mr-1.5 md:mr-3"
    >
      <input
        type="checkbox"
        :value="value"
        class="rounded text-primary-500 focus:ring-primary-500"
        v-model="modelValue"
        @update:modelValue="
          checkedValues = $event;
          $emit('update:modelValue', checkedValues);
        "
      />
      <p>{{ value }}</p>
    </label>
  </fieldset>
</template>

<script setup lang="ts">
const props = defineProps({
  valueName: String,
  values: Array<String>,
  modelValue: Array<String>,
});

const checkedValues = ref<string[]>();

const emit = defineEmits<{
  (e: "update:modelValue", checkedValues: string[]);
}>();
</script>
