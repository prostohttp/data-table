<script>
export default {
  inheritAttrs: false,
};
</script>

<script setup>
import { onMounted, ref } from "vue";
import { useSearchStore } from "@/stores/search";
// Stores

// Const
const search = ref(null);
const searchStore = useSearchStore();
// Handlers

// Hooks
onMounted(() => {
  search.value.focus();
});
</script>

<template>
  <div
    class="before:bg-iconSearch before:absolute before:left-[10px] before:w-[20px] before:h-[20px] before:top-[10px] relative"
  >
    <input
      ref="search"
      v-bind="$attrs"
      @change="searchStore.setSearch($event.target.value)"
      v-model.lazy.trim="searchStore.search"
    />
  </div>
</template>
