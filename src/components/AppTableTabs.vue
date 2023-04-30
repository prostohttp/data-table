<script setup>
import AppTabTitle from "@/components/AppTableTitle.vue";
import { ref } from "vue";
import { useTableStore } from "@/stores/table";

// Stores
const tableStore = useTableStore();
// Const
const { titles } = defineProps({
  titles: {
    type: Array,
    required: true,
  },
});
const activeTab = ref(0);
// Handlers
const clickHandler = (index) => {
  activeTab.value = index;
};
// Hooks
</script>

<template>
  <div class="tabs border-b border-b-violet-3 flex justify-between mb-[20px]">
    <ul class="tab-title flex gap-[20px]">
      <app-tab-title
        v-for="(title, index) in titles"
        :key="title.id"
        :title="{ label: title.label, index }"
        @click-handler="clickHandler"
        :class="{ 'text-dark border-b-2 border-dark': activeTab === index }"
      >
        {{ title.label }}
      </app-tab-title>
    </ul>
    <div class="amount">
      Total payable amount:
      <strong class="font-bold text-violet text-[18px]">
        ${{ tableStore.amount }}
      </strong>
      <span class="text-[18px]"> USD</span>
    </div>
  </div>
</template>
