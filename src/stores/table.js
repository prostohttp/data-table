import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { currencyInter } from "@/helpers/functions";
import data from "~/mock-data.json";

export const useTableStore = defineStore("table", () => {
  //Vars
  const initialItems = ref(data);
  const items = ref(data);
  const allSelected = ref(false);
  const currency = ref("USD");
  //Handlers
  const amount = computed(() => {
    return items.value.reduce((accumulator, item) => {
      return accumulator + +item.amount;
    }, 0);
  });
  const amountInter = computed(() => {
    return currencyInter(amount.value, "en", currency.value);
  });

  // Hooks
  watch(allSelected, () => {
    if (allSelected.value) {
      items.value = items.value.map((item) => ({ ...item, selected: true }));
    } else {
      items.value = items.value.map((item) => ({ ...item, selected: false }));
    }
  });
  // Returns
  return {
    currency,
    amountInter,
    initialItems,
    items,
    allSelected,
  };
});
