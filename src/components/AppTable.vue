<script setup>
import AppSearch from "@/components/AppSearch.vue";
import { useTableStore } from "@/stores/table";
import AppTableTabs from "@/components/AppTableTabs.vue";

// Stores
const tableStore = useTableStore();
// Vars
const titles = [
  { label: "All", id: "all" },
  { label: "Paid", id: "paid" },
  { label: "Unpaid", id: "unpaid" },
  { label: "Overdue", id: "overdue" },
];

// Handlers
// Hooks
</script>

<template>
  <div class="w-[1100px] m-auto">
    <h1 class="uppercase text-violet-1 mb-[20px] font-semibold">
      Table Heading
    </h1>
    <AppTableTabs :titles="titles" />
    <div class="table bg-white rounded-[8px] w-full m-auto shadow-table"></div>
  </div>
</template>
