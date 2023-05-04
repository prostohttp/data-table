import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useFilterStore } from "@/stores/filter";
import { sortedByList } from "~/mock-ui";

export const useSortStore = defineStore("sort", () => {
  //Stores
  const filterStore = useFilterStore();
  //Vars
  const sortedByStatus = ref(sortedByList.default);
  //Handlers
  const setSortedByStatus = (label) => {
    sortedByStatus.value = label;
  };
  const sortedAndFilteredItems = computed(() => {
    if (sortedByStatus.value === sortedByList.default) {
      return filterStore.filteredItems;
    } else if (sortedByStatus.value === sortedByList.firstName) {
      return [...filterStore.filteredItems].sort((a, b) =>
        a["first name"].localeCompare(b["first name"])
      );
    } else if (sortedByStatus.value === sortedByList.lastName) {
      return [...filterStore.filteredItems].sort((a, b) =>
        a["last name"].localeCompare(b["last name"])
      );
    } else if (sortedByStatus.value === sortedByList.dueDate) {
      return [...filterStore.filteredItems].sort(
        (a, b) => new Date(b["date"]).getTime() - new Date(a["date"]).getTime()
      );
    } else if (sortedByStatus.value === sortedByList.lastLogin) {
      return [...filterStore.filteredItems].sort(
        (a, b) =>
          new Date(b["date login"]).getTime() -
          new Date(a["date login"]).getTime()
      );
    }
  });
  // Hooks
  return {
    sortedByStatus,
    setSortedByStatus,
    sortedAndFilteredItems,
  };
});
