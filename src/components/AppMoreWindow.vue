<script setup>
import IconClose from "~/icons/IconClose.vue";
// Stores

// Const

// const { isOpen } = defineProps({
//   isOpen: {
//     type: Boolean,
//     required: true,
//   },
// });
const emit = defineEmits(["close-handler"]);
// Handlers

// Hooks
</script>

<template>
  <div
    class="filter-dropdown shadow-filter absolute w-[154px] px-[10px] p-[5px] bg-white border border-violet-3 rounded-[6px] z-[10] top-[0]"
  >
    <div
      class="inline-flex items-center justify-center w-[20px] h-[20px] bg-white rounded-full absolute -top-[10px] -right-[10px] drop-shadow-close cursor-pointer"
      @click="emit('close-handler')"
    >
      <IconClose />
    </div>
    <slot />
  </div>
</template>
