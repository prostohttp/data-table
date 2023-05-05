import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useSortStore } from "@/stores/sort";
import { usePaginationStore } from "@/stores/pagination";

export const useSearchStore = defineStore("search", () => {
  // Stores
  const sortStore = useSortStore();
  const paginationStore = usePaginationStore();
  // Const
  const search = ref("");
  // Handlers
  const setSearch = (value) => {
    paginationStore.page = 1;
    search.value = value;
  };
  const searchFilteredSortedItems = computed(() => {
    return sortStore.sortedAndFilteredItems.filter((item) => {
      return (
        item["first name"].toLowerCase().includes(search.value) ||
        item["last name"].toLowerCase().includes(search.value) ||
        item["date login"].toLowerCase().includes(search.value) ||
        item["date"].toLowerCase().includes(search.value)
      );
    });
  });
  // Hooks

  return {
    search,
    setSearch,
    searchFilteredSortedItems,
  };
});
