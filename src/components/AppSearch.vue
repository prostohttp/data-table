<script>
export default {
  inheritAttrs: false,
};
</script>

<script setup>
import { useSearchStore } from "@/stores/search";
// Stores

// Const

const searchStore = useSearchStore();
// Handlers

// Hooks
</script>

<template>
  <div
    class="before:bg-iconSearch before:absolute before:left-[10px] before:w-[20px] before:h-[20px] before:top-[10px] relative"
  >
    <input
      v-bind="$attrs"
      @change="searchStore.setSearch($event.target.value)"
      v-model.lazy.trim="searchStore.search"
    />
  </div>
</template>
