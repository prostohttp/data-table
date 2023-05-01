<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useTableStore } from "@/stores/table";
import IconActiveCheckbox from "~/icons/IconActiveCheckbox.vue";
import IconInactiveCheckbox from "~/icons/IconInactiveCheckbox.vue";
import IconMore from "~/icons/IconMore.vue";
import AppMoreWindow from "@/components/AppMoreWindow.vue";

// Stores
const tableStore = useTableStore();

// Const
const more = ref(null);
const isOpen = ref(false);
// Handlers
const closeWindow = () => {
  isOpen.value = !isOpen.value;
};
onClickOutside(more, () => {
  if (isOpen.value) {
    isOpen.value = false;
  }
});
// Hooks
</script>

<template>
  <div
    class="h-[45px] bg-violet-bg flex items-center px-[20px] justify-between uppercase text-violet-1 text-[12px] font-semibold"
  >
    <div class="basis-1/12">
      <span
        @click="tableStore.allSelected = !tableStore.allSelected"
        class="cursor-pointer inline-block"
      >
        <IconActiveCheckbox v-if="tableStore.allSelected" />
        <IconInactiveCheckbox v-else />
      </span>
    </div>
    <div class="basis-3/12">
      <span class="cursor-pointer">Name</span>
    </div>
    <div class="basis-3/12">
      <span class="cursor-pointer">User Status</span>
    </div>
    <div class="basis-2/12">
      <span class="cursor-pointer">Payment Status</span>
    </div>
    <div class="basis-1/12 flex justify-end">
      <span class="cursor-pointer">Amount</span>
    </div>
    <div class="basis-2/12 flex justify-end relative">
      <IconMore
        @click="isOpen = !isOpen"
        class="cursor-pointer hover:fill-dark"
      />
      <AppMoreWindow
        ref="more"
        v-if="isOpen"
        :is-open="isOpen"
        @close-handler="closeWindow"
      >
        <ul>
          <li
            class="cursor-pointer p-[5px] hover:bg-light rounded-[4px] my-[5px] text-green"
          >
            Activate Users
          </li>
          <li
            class="cursor-pointer p-[5px] text-violet-1 hover:bg-light rounded-[4px] mt-[5px] mb-[5px]"
          >
            Deactivate Users
          </li>
          <li
            class="cursor-pointer p-[5px] hover:bg-light rounded-[4px] text-green"
          >
            Paid
          </li>
          <li
            class="cursor-pointer p-[5px] hover:bg-light rounded-[4px] mt-[5px] mb-[5px] text-[#965E00]"
          >
            Unpaid
          </li>
          <li
            class="cursor-pointer p-[5px] hover:bg-light text-red rounded-[4px] mt-[5px] mb-[10px]"
          >
            Overdue
          </li>
          <li
            class="cursor-pointer p-[5px] bg-red rounded-[4px] py-[5px] relative before:absolute before:-top-[5px] before:h-[1px] before:w-full before:bg-light mb-[5px] text-white"
          >
            Delete
          </li>
        </ul>
      </AppMoreWindow>
    </div>
  </div>
</template>
