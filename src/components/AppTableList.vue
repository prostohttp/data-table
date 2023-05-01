<script setup>
import { ref } from "vue";
import { useTableStore } from "@/stores/table";
import AppTableListItem from "@/components/AppTableListItem.vue";

// Stores
const tableStore = useTableStore();
// Const
// Handlers
// Hooks
</script>

<template>
  <div class="flex flex-col">
    <AppTableListItem v-for="item in tableStore.items" :item="item">
    </AppTableListItem>
  </div>
</template>
