<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import AppSearch from "@/components/AppSearch.vue";
import AppFilter from "@/components/AppFilter.vue";
import AppButton from "@/components/AppButton.vue";
import { useTableStore } from "@/stores/table";
import { paidList } from "~/mock-ui";

// Stores
const tableStore = useTableStore();
// Const
const isOpenFilter = ref(false);
const filter = ref(null);
// Handlers
onClickOutside(filter, () => {
  if (isOpenFilter.value) {
    isOpenFilter.value = false;
  }
});
// Hooks
</script>

<template>
  <div
    class="table-head flex justify-between py-[15px] px-[20px] border-b border-b-border"
  >
    <div class="head-left basis-6/12 flex gap-[20px]">
      <div class="filter">
        <AppFilter
          ref="filter"
          :is-open="isOpenFilter"
          @open-filter="isOpenFilter = !isOpenFilter"
        />
      </div>
      <div class="search w-full">
        <AppSearch
          class="bg-violet-bg h-[40px] rounded-[6px] py-[13px] pl-[40px] flex items-center text-[12px] placeholder-violet-1 text-dark max-w-[392px] w-full outline-none border border-transparent hover:border-violet focus:border-violet is-transitioned"
          placeholder="Search Users by Name, Email or Date"
        />
      </div>
    </div>
    <div class="head-right basis-6/12 flex justify-end">
      <div class="buttons">
        <AppButton
          class="text-[16px] font-semibold text-white bg-violet rounded-[6px] h-[40px] uppercase flex items-center text-center p-[10px] hover:bg-dark"
          @click="tableStore.setPaymentStatus(paidList.paid)"
        >
          Pay Dues
        </AppButton>
      </div>
    </div>
  </div>
</template>
