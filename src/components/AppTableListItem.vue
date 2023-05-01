<script setup>
import { ref, toRef } from "vue";
import { onClickOutside } from "@vueuse/core";
import AppMoreWindow from "@/components/AppMoreWindow.vue";
import AppStatusBadged from "@/components/AppStatusBadged.vue";
import IconMore from "~/icons/IconMore.vue";
import IconActiveCheckbox from "~/icons/IconActiveCheckbox.vue";
import IconInactiveCheckbox from "~/icons/IconInactiveCheckbox.vue";
import IconBottom from "~/icons/IconBottom.vue";
import IconUp from "~/icons/IconUp.vue";
import { currencyInter } from "@/helpers/functions";
import { useTableStore } from "@/stores/table";

// Stores
const tableStore = useTableStore();
// Const
const more = ref(null);
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
toRef(props, "item");
const isOpen = ref(false);
const isOpenDetails = ref(false);
// Handlers
onClickOutside(more, () => {
  if (isOpen.value) {
    isOpen.value = false;
  }
});
// Hooks
</script>

<template>
  <div
    class="bg-white flex px-[20px] h-[61px] items-center justify-between border-b border-b-border last-of-type:border-none"
    :class="{ 'active-item': item.selected }"
  >
    <div class="flex basis-1/12 gap-[20px] items-center">
      <IconActiveCheckbox
        v-if="item.selected"
        @click="item.selected = !item.selected"
      />
      <IconInactiveCheckbox v-else @click="item.selected = !item.selected" />
      <IconUp v-if="isOpenDetails" class="cursor-pointer" />
      <IconBottom v-else class="cursor-pointer" />
    </div>
    <div class="flex basis-3/12 flex-col">
      <strong class="font-medium">
        {{ item["first name"] }} {{ item["last name"] }}
      </strong>
      <router-link to="/" class="text-violet-1">
        {{ item.email }}
      </router-link>
    </div>
    <div class="flex flex-col gap-[5px] basis-3/12">
      <AppStatusBadged :label="item['user status']" />
      <span class="text-violet-1 text-[12px] font-medium">
        Last login: {{ item["date login"] }}
      </span>
    </div>
    <div class="flex flex-col gap-[5px] basis-2/12">
      <AppStatusBadged :label="item['payment status']" />
      <span class="text-[12px]">Paid on {{ item["date"] }}</span>
    </div>
    <div class="flex flex-col gap-[5px] basis-1/12 items-end">
      <strong class="font-medium">
        {{ currencyInter(item.amount, "en", tableStore.currency) }}
      </strong>
      <span class="text-[12px] uppercase text-violet-1">
        {{ tableStore.currency }}
      </span>
    </div>
    <div class="flex basis-2/12 gap-[20px] justify-end relative items-center">
      <router-link
        to="/"
        class="text-[12px] text-violet-1 capitalize hover:text-violet hover:rounded-[4px] hover:bg-light p-[5px]"
      >
        View more
      </router-link>
      <IconMore
        @click="isOpen = !isOpen"
        class="cursor-pointer hover:fill-dark"
      />
      <AppMoreWindow
        ref="more"
        v-if="isOpen"
        :is-open="isOpen"
        @close-handler="isOpen = !isOpen"
      >
        <ul>
          <li
            class="cursor-pointer p-[5px] hover:bg-light rounded-[4px] my-[5px]"
          >
            Edit
          </li>
          <li
            class="cursor-pointer p-[5px] hover:bg-light rounded-[4px] my-[5px]"
          >
            View Profile
          </li>
          <li
            class="cursor-pointer p-[5px] hover:bg-light text-green rounded-[4px] mt-[5px] mb-[10px]"
          >
            Activate Users
          </li>
          <li
            class="cursor-pointer p-[5px] hover:bg-light rounded-[4px] py-[5px] relative before:absolute before:-top-[5px] before:h-[1px] before:w-full before:bg-light mb-[5px] text-red"
          >
            Delete
          </li>
        </ul>
      </AppMoreWindow>
    </div>
  </div>
  <div class="sub-items">
    <slot />
  </div>
</template>
