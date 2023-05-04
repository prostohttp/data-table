<script setup></script>

<template>
  <div
    class="absolute bg-white shadow-tooltip leading-[14px] z-[10] rounded-[4px] w-[140px] py-[10px] pl-[15px] pr-[10px] left-[25px] -top-[15px]"
  >
    <span
      class="w-0 h-0 border-solid border-t-[4px] border-r-[5px] border-b-[4px] border-l-0 border-t-transparent border-r-white border-b-transparent border-l-transparent -left-[5px] top-[17px] absolute"
    ></span>
    <slot />
  </div>
</template>
