import { defineStore } from "pinia";
import { computed, ref, shallowRef } from "vue";
import { useSearchStore } from "@/stores/search";

export const usePaginationStore = defineStore("pagination", () => {
  // Stores
  const searchStore = useSearchStore();
  // Const
  const page = ref(1);
  const perPage = ref(10);
  const step = shallowRef(5);
  // Computed
  const pageCount = computed(() => {
    return Math.ceil(
      searchStore.searchFilteredSortedItems.length / perPage.value
    );
  });
  const elementCount = computed(() => {
    return searchStore.searchFilteredSortedItems.length;
  });
  const first = computed(() => {
    if (page.value === 1) {
      return 1;
    } else {
      return (page.value - 1) * perPage.value;
    }
  });
  const last = computed(() => {
    if (perPage.value > elementCount.value) {
      return elementCount.value;
    } else if (page.value === 1) {
      return perPage.value;
    } else if (page.value * perPage.value <= elementCount.value) {
      return page.value * perPage.value;
    } else {
      return elementCount.value;
    }
  });
  const perPageList = computed(() => {
    const list = [];
    let i = 10;
    if (i <= elementCount.value) {
      for (i; i <= elementCount.value; i += step.value) {
        if (i >= elementCount.value) {
          list.push(elementCount.value);
        } else {
          list.push(i);
        }
      }
    } else {
      list.push(i);
    }
    return list;
  });
  const itemsPerPage = computed(() => {
    return first.value === 1
      ? searchStore.searchFilteredSortedItems.slice(first.value - 1, last.value)
      : searchStore.searchFilteredSortedItems.slice(first.value, last.value);
  });
  // Handlers
  const setPerPage = (value) => (perPage.value = value);
  const nextPage = () => {
    if (page.value < pageCount.value) {
      page.value = page.value + 1;
    }
  };
  const prevPage = () => {
    if (page.value > 1) {
      page.value = page.value - 1;
    }
  };

  // Hooks

  return {
    page,
    perPage,
    pageCount,
    setPerPage,
    perPageList,
    nextPage,
    prevPage,
    elementCount,
    first,
    last,
    itemsPerPage,
  };
});
