import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useFilterStore } from "@/stores/filter";
import { currencyInter } from "@/helpers/functions";
import data from "~/mock-data.json";
import { paidList } from "~/mock-ui";
import { usePaginationStore } from "@/stores/pagination";

export const useTableStore = defineStore("table", () => {
  // Stores
  const filterStore = useFilterStore();
  const paginationStore = usePaginationStore();
  //Vars
  const allSelected = ref(false);
  const items = ref(data);
  const defaultSortItems = ref(data);
  const currency = ref("USD");
  const triggerAll = ref(false);
  const triggerPaid = ref(false);
  const triggerUnpaid = ref(false);
  const triggerOverdue = ref(false);
  const isEmptyList = ref(false);
  //Handlers
  const amount = computed(() => {
    return items.value.reduce((accumulator, item) => {
      return (
        accumulator +
        (item["payment status"] === paidList.paid ? +item.amount : 0)
      );
    }, 0);
  });
  const amountInter = computed(() => {
    return currencyInter(amount.value, "en", currency.value);
  });
  const setItems = (newItems) => {
    items.value = newItems;
  };
  const deleteOneItem = (id) => {
    setItems(items.value.filter((item) => item.id !== id));
  };
  const deleteManyItems = () => {
    setItems(items.value.filter((item) => !item.selected));
  };
  const setUserStatus = (status) => {
    items.value = items.value.map((item) => {
      if (item.selected) {
        return {
          ...item,
          "user status": status,
        };
      }
      return item;
    });
  };
  const setPaymentStatus = (status) => {
    items.value = items.value.map((item) => {
      if (item.selected) {
        return {
          ...item,
          "payment status": status,
        };
      }
      return item;
    });
  };
  const checkIsEmptyList = computed(() => {
    isEmptyList.value = !paginationStore.itemsPerPage.length;
  });
  const setTrigger = (bool) => {
    if (filterStore.paidStatus === paidList.all) {
      triggerAll.value = bool;
      triggerPaid.value = bool;
      triggerUnpaid.value = bool;
      triggerOverdue.value = bool;
    } else if (filterStore.paidStatus === paidList.paid) {
      triggerPaid.value = bool;
    } else if (filterStore.paidStatus === paidList.unpaid) {
      triggerUnpaid.value = bool;
    } else if (filterStore.paidStatus === paidList.overdue) {
      triggerOverdue.value = bool;
    }
  };
  const setSelectedByPaidStatus = () => {
    setTrigger(true);
    items.value = items.value.map((item) => {
      if (item["payment status"] === filterStore.paidStatus) {
        if (
          paginationStore.itemsPerPage.some((search) => item.id === search.id)
        ) {
          return {
            ...item,
            selected: true,
          };
        } else {
          return {
            ...item,
            selected: false,
          };
        }
      } else if (filterStore.paidStatus === paidList.all) {
        if (
          paginationStore.itemsPerPage.some((search) => item.id === search.id)
        ) {
          return {
            ...item,
            selected: true,
          };
        } else {
          return {
            ...item,
            selected: false,
          };
        }
      } else {
        return {
          ...item,
          selected: false,
        };
      }
    });
  };
  const setUnselectedByPaidStatus = () => {
    setTrigger(false);
    items.value = items.value.map((item) => {
      if (item["payment status"] === filterStore.paidStatus) {
        if (
          paginationStore.itemsPerPage.some((search) => item.id === search.id)
        ) {
          return {
            ...item,
            selected: false,
          };
        } else {
          return {
            ...item,
            selected: false,
          };
        }
      } else if (filterStore.paidStatus === paidList.all) {
        if (
          paginationStore.itemsPerPage.some((search) => item.id === search.id)
        ) {
          return {
            ...item,
            selected: false,
          };
        } else {
          return {
            ...item,
            selected: false,
          };
        }
      } else {
        return {
          ...item,
          selected: false,
        };
      }
    });
  };
  const editItemData = (id, data) => {
    const element = items.value.find((elem) => elem.id === id);
    if (data.firstName) element["first name"] = data.firstName;
    if (data.lastName) element["last name"] = data.lastName;
    if (data.email) element["email"] = data.email;
    if (data.amount) element["amount"] = data.amount;
  };
  // Hooks

  return {
    currency,
    amountInter,
    items,
    defaultSortItems,
    setItems,
    deleteOneItem,
    deleteManyItems,
    setUserStatus,
    setPaymentStatus,
    setSelectedByPaidStatus,
    setUnselectedByPaidStatus,
    allSelected,
    triggerUnpaid,
    triggerPaid,
    triggerOverdue,
    triggerAll,
    isEmptyList,
    checkIsEmptyList,
    editItemData,
  };
});
