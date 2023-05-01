<script>
export default {
  inheritAttrs: false,
};
</script>
<script setup></script>

<template>
  <div>
    <button v-bind="$attrs">
      <slot />
    </button>
  </div>
</template>
