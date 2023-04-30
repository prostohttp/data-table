import { defineStore } from "pinia";
import { computed } from "vue";

export const useTableStore = defineStore("table", () => {
  //Vars
  //Handlers
  const amount = computed(() => {
    return 900;
  });

  return {
    amount,
  };
});
