import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { paidList, usersList } from "~/mock-ui";
import { useTableStore } from "@/stores/table";
import { usePaginationStore } from "@/stores/pagination";

export const useFilterStore = defineStore("filter", () => {
  // Stores
  const tableStore = useTableStore();
  const paginationStore = usePaginationStore();
  // Const
  const usersStatus = ref(usersList.all);
  const paidStatus = ref(paidList.all);
  const defaultItems = ref([]);

  // Handlers
  const setPaidStatus = (value) => {
    paidStatus.value = value;
    paginationStore.page = 1;
  };
  const setUsersStatus = (label) => {
    usersStatus.value = label;
  };
  const itemsFilteredByUserStatus = (items) => {
    if (usersStatus.value === usersList.all) {
      return items;
    } else if (usersStatus.value === usersList.active) {
      return items.filter((item) => item["user status"] === usersList.active);
    } else {
      return items.filter((item) => item["user status"] === usersList.inactive);
    }
  };
  const filteredItems = computed(() => {
    if (paidStatus.value === paidList.all) {
      return itemsFilteredByUserStatus(tableStore.items);
    }

    return itemsFilteredByUserStatus(
      tableStore.items.filter(
        (item) => item["payment status"] === paidStatus.value
      )
    );
  });
  // Hooks
  watch(filteredItems, (value) => {
    if (!value.length) {
      if (paidStatus.value === paidList.paid) {
        tableStore.triggerPaid = false;
      }
      if (paidStatus.value === paidList.unpaid) {
        tableStore.triggerUnpaid = false;
      }
      if (paidStatus.value === paidList.overdue) {
        tableStore.triggerOverdue = false;
      }
      if (paidStatus.value === paidList.all) {
        tableStore.triggerAll = false;
      }
    }
  });
  return {
    usersStatus,
    paidStatus,
    setUsersStatus,
    setPaidStatus,
    filteredItems,
    itemsFilteredByUserStatus,
    defaultItems,
  };
});
