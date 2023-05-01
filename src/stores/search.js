import { defineStore } from "pinia";
import { ref } from "vue";
export const useSearchStore = defineStore("search", () => {
  // Stores

  // Const
  const search = ref("");
  // Handlers
  const setSearch = (value) => {
    search.value = value;
  };
  // Hooks

  return {
    search,
    setSearch,
  };
});
