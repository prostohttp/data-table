<script setup>
// Stores

// Const
import { paidList, usersList } from "~/mock-ui";

const { label } = defineProps({
  label: {
    type: String,
    default: "active",
    validator(value) {
      return ["Active", "Inactive", "Paid", "Overdue", "Unpaid"].includes(
        value
      );
    },
  },
});
// Handlers

// Hooks
</script>

<template>
  <div v-if="label === usersList.active" class="label text-blue bg-[#E6E6F2]">
    <span class="label__circle bg-blue"></span>
    <span>Active</span>
  </div>
  <div v-if="label === usersList.inactive" class="label text-violet-1 bg-light">
    <span class="label__circle bg-violet-1"></span>
    <span>Inactive</span>
  </div>
  <div v-if="label === paidList.paid" class="label text-green bg-[#CDFFCD]">
    <span class="label__circle bg-green"></span>
    <span>Paid</span>
  </div>
  <div v-if="label === paidList.overdue" class="label text-red bg-[#FFE0E0]">
    <span class="label__circle bg-red"></span>
    <span>Overdue</span>
  </div>
  <div
    v-if="label === paidList.unpaid"
    class="label text-[#965E00] bg-[#FFECCC]"
  >
    <span class="label__circle bg-[#CE8500]"></span>
    <span>Unpaid</span>
  </div>
</template>
