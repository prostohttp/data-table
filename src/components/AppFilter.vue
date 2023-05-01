<script setup>
import { toRef } from "vue";
import { useFilterStore } from "@/stores/filter";
import { sortedByList, usersList } from "~/mock-ui";
import IconFilter from "~/icons/IconFilter.vue";
import IconActiveLabel from "~/icons/IconActiveLabel.vue";
import IconInactiveLabel from "~/icons/IconInactiveLabel.vue";

// Stores
const filterStore = useFilterStore();
// Const
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
    default: false,
  },
});
toRef(props, "isOpen");
const emit = defineEmits(["open-filter"]);
// Handlers
// Hooks
</script>

<template>
  <div class="relative">
    <div
      @click="emit('open-filter')"
      class="flex gap-[10px] items-center h-[40px] p-[10px] text-[16px] border rounded-[6px] cursor-pointer hover:border-violet is-transitioned"
      :class="{
        'shadow-dropdown border-violet': isOpen,
        'border-violet-3': !isOpen,
      }"
    >
      <IconFilter />
      <span>Filter</span>
    </div>
    <div
      v-if="isOpen"
      class="filter-dropdown shadow-filter absolute w-[224px] px-[10px] pt-[20px] pb-[10px] bg-white border border-violet-3 rounded-[6px] z-[10] top-[45px]"
    >
      <div class="border-b border-b-[#F2F0F9]">
        <h3 class="text-[12px] text-violet-1 uppercase mb-[5px] px-[10px]">
          Sort by:
        </h3>
        <button
          v-for="sort in sortedByList"
          class="flex justify-between py-[5px] my-[5px] w-full hover:bg-light px-[10px] rounded-[4px] items-center"
          @click="filterStore.setSortedByStatus(sort.label)"
        >
          <span>{{ sort.label }}</span>
          <IconActiveLabel v-if="filterStore.sortedByStatus === sort.label" />
          <IconInactiveLabel v-else />
        </button>
      </div>
      <div>
        <h3
          class="text-[12px] text-violet-1 uppercase mt-[10px] mb-[5px] px-[10px]"
        >
          Users:
        </h3>
        <button
          v-for="user in usersList"
          class="flex justify-between py-[5px] my-[5px] w-full hover:bg-light px-[10px] rounded-[4px] items-center"
          @click="filterStore.setUsersStatus(user.label)"
        >
          <span>{{ user.label }}</span>
          <IconActiveLabel v-if="filterStore.usersStatus === user.label" />
          <IconInactiveLabel v-else />
        </button>
      </div>
    </div>
  </div>
</template>
