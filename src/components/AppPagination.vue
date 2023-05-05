<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { usePaginationStore } from "@/stores/pagination";
import IconPaginationArrowDown from "~/icons/IconPaginationArrowDown.vue";
import IconPaginationNext from "~/icons/IconPaginationNext.vue";
import IconPaginationPrev from "~/icons/IconPaginationPrev.vue";

// Stores
const paginationStore = usePaginationStore();
// Const
const isOpen = ref(false);
const pageDropdown = ref(null);
// Handlers
const changePerPage = (count) => {
  paginationStore.page = 1;
  paginationStore.setPerPage(count);
  isOpen.value = false;
};
onClickOutside(pageDropdown, () => {
  if (isOpen.value) {
    isOpen.value = false;
  }
});
// Hooks
</script>

<template>
  <div
    class="bg-violet-bg h-[45px] flex justify-end gap-[50px] px-[18px] items-center rounded-br-[8px] rounded-bl-[8px] text-[12px] font-semibold text-violet-1"
  >
    <template v-if="paginationStore.elementCount">
      <div
        class="relative flex gap-[5px] items-center justify-end cursor-pointer"
      >
        <span>Rows per page: </span>
        <div
          class="flex gap-[10px] items-center w-[30px] justify-between"
          @click="isOpen = !isOpen"
        >
          <span>
            {{ paginationStore.perPage }}
          </span>
          <IconPaginationArrowDown />
        </div>
        <ul
          ref="pageDropdown"
          v-show="isOpen"
          class="absolute bg-white rounded-[5px] bottom-[25px] py-[5px] px-[10px] right-0 w-[50px]"
        >
          <li
            v-for="count in paginationStore.perPageList"
            class="hover:underline hover:underline-[3px] py-[5px]"
            @click="changePerPage(count)"
          >
            {{ count }}
          </li>
        </ul>
      </div>
      <div class="w-[100px] flex justify-end">
        {{ paginationStore.first }}-{{ paginationStore.last }} of
        {{ paginationStore.elementCount }}
      </div>
      <div class="flex gap-[40px] items-center justify-end">
        <button
          class="flex justify-center items-center p-[5px]"
          @click="paginationStore.prevPage"
        >
          <IconPaginationPrev />
        </button>
        <button
          class="flex justify-center items-center p-[5px]"
          @click="paginationStore.nextPage"
        >
          <IconPaginationNext />
        </button>
      </div>
    </template>
  </div>
</template>
