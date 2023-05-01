<script setup>
import AppTabTitle from "@/components/AppTableTitle.vue";
import { useTableStore } from "@/stores/table";
import { useFilterStore } from "@/stores/filter";
import { paidList } from "~/mock-ui";

// Stores
const tableStore = useTableStore();
const filterStore = useFilterStore();
// Const
// Handlers

// Hooks
</script>

<template>
  <div class="tabs border-b border-b-violet-3 flex justify-between mb-[20px]">
    <ul class="tab-title flex gap-[20px]">
      <app-tab-title
        v-for="(title, index) in paidList"
        :title="{ label: title.label, index }"
        @click="filterStore.setPaidStatus(index)"
        :class="{
          'text-dark border-b-2 border-dark':
            filterStore.paidStatus === title.label,
        }"
      >
        {{ title.label }}
      </app-tab-title>
    </ul>
    <div class="amount">
      Total payable amount:
      <strong class="font-bold text-violet text-[18px]">
        {{ tableStore.amountInter }}
      </strong>
      <span class="text-[18px] uppercase">
        {{ " " + tableStore.currency }}
      </span>
    </div>
  </div>
</template>
