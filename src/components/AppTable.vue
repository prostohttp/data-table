<script setup>
import AppTableTabs from "@/components/AppTableTabs.vue";
import AppTableActions from "@/components/AppTableActions.vue";
import AppTableHead from "@/components/AppTableHead.vue";
import AppTableList from "@/components/AppTableList.vue";
import AppPagination from "@/components/AppPagination.vue";

// Stores
// Vars

// Handlers

// Hooks
</script>

<template>
  <div class="w-[1100px] m-auto rounded-[8px]">
    <h1 class="uppercase text-violet-1 mb-[20px] font-semibold">
      Table Heading
    </h1>
    <AppTableTabs />
    <div class="table bg-white rounded-[8px] w-full m-auto shadow-table">
      <AppTableActions />
      <AppTableHead />
      <AppTableList />
      <AppPagination />
    </div>
  </div>
</template>
