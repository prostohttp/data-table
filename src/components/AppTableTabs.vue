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
        v-for="value in Object.values(paidList)"
        :title="value"
        @click="filterStore.setPaidStatus(value)"
        :class="{
          'text-dark border-b-2 border-dark': filterStore.paidStatus === value,
        }"
      >
        {{ value }}
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
