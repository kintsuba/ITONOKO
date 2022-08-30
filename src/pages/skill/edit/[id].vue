<template>
  <div>
    <ItonokoBreadcrumb :breadcrumbs="breadcrumbs" class="ml-4 mt-4" />
    <main class="container mx-auto px-4">
      <h1 class="text-2xl font-bold font-display my-6">スキル追加</h1>
      <SkillEditor :editingSkill="(editingSkill as Skill)" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { Skill } from "@/types/skill";
const SkillEditor = resolveComponent("SkillEditor");

const route = useRoute();
const id = route.params.id as string;
const { data: editingSkill } = await useFetch("/api/skills/get/id/" + id);

const breadcrumbs = [
  {
    name: "スキル追加",
    to: "/skill/add",
  },
];
</script>
