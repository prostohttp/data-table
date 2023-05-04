<script setup>
import AppTableSubHead from "@/components/AppTableSubHead.vue";
import AppTableSubItem from "@/components/AppTableSubItem.vue";

// Stores

// Const
const { item } = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

// Handlers

// Hooks
</script>

<template>
  <AppTableSubHead />
  <div class="bg-violet-bg">
    <div
      v-if="item.activity && item.activity.length"
      class="divide-y divide-border"
    >
      <AppTableSubItem v-for="activity in item.activity" :activity="activity" />
    </div>
    <div
      v-else
      class="text-violet-1 uppercase text-[16px] py-[40px] text-center font-semibold"
    >
      No records found
    </div>
  </div>
</template>
