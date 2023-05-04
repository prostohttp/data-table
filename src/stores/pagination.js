import { defineStore } from "pinia";
import { ref } from "vue";

export const usePaginationStore = defineStore("pagination", () => {
  // Stores

  // Const
  const page = ref(1);
  // Handlers

  // Hooks

  return {
    page,
  };
});
