<script setup>
import { useTableStore } from "@/stores/table";
import AppTableListItem from "@/components/AppTableListItem.vue";
import AppTableSubList from "@/components/AppTableSubList.vue";
import { useSearchStore } from "@/stores/search";
import { usePaginationStore } from "@/stores/pagination";

// Stores
const tableStore = useTableStore();
const searchStore = useSearchStore();
const paginationStore = usePaginationStore();
// Const
// Handlers
const deleteItem = (id) => {
  const deleteItem = confirm("Delete item?");
  if (deleteItem) {
    tableStore.deleteOneItem(id);
  }
};
// Hooks
</script>

<template>
  <div class="flex flex-col">
    <template v-if="paginationStore.itemsPerPage.length">
      <AppTableListItem
        v-for="item in paginationStore.itemsPerPage"
        :item="item"
        :key="item.id"
        @delete-item="deleteItem"
      >
        <AppTableSubList :item="item" />
      </AppTableListItem>
    </template>
    <div
      v-else
      class="text-violet-1 uppercase text-[16px] py-[40px] text-center font-semibold"
    >
      Empty
    </div>
  </div>
</template>
