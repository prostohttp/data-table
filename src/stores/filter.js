import { defineStore } from "pinia";
import { ref } from "vue";
import { paidList, sortedByList, usersList } from "~/mock-ui";
export const useFilterStore = defineStore("filter", () => {
  // Stores

  // Const
  const sortedByStatus = ref(sortedByList[0].label);
  const usersStatus = ref(usersList[0].label);
  const paidStatus = ref(paidList[0].label);
  // Handlers
  const setPaidStatus = (index) => {
    paidStatus.value = paidList[index].label;
  };
  const setSortedByStatus = (label) => {
    sortedByStatus.value = label;
  };
  const setUsersStatus = (label) => {
    usersStatus.value = label;
  };
  // Hooks

  return {
    sortedByStatus,
    usersStatus,
    paidStatus,
    setUsersStatus,
    setSortedByStatus,
    setPaidStatus,
  };
});
