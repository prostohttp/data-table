<script setup>
// Stores

// Const
const { activity } = defineProps({
  activity: {
    type: Object,
    required: true,
  },
});
// Handlers

// Hooks
</script>

<template>
  <div class="flex items-center gap-[20px] py-[12px]">
    <div class="basis-1/12"></div>
    <div class="basis-2/12">
      {{ activity.date }}
    </div>
    <div class="basis-4/12">{{ activity["user activity"] }}</div>
    <div class="basis-5/12 pr-[30px]">{{ activity["detail"] }}</div>
  </div>
</template>
