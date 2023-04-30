<script setup>
// Stores

// Const
const { title } = defineProps({
  title: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["click-handler"]);
// Handlers

// Hooks
</script>

<template>
  <li
    @click="emit('click-handler', title.index)"
    class="text-violet-1 font-medium pb-[10px] px-[10px] cursor-pointer"
  >
    {{ title.label }}
  </li>
</template>
