<script setup>
import IconInfo from "~/icons/IconInfo.vue";
import AppTooltip from "@/components/AppTooltip.vue";
</script>

<template>
  <div
    class="bg-light h-[45px] flex gap-[20px] items-center border-b border-b-border"
  >
    <span class="basis-1/12"></span>
    <span class="basis-2/12 text-[12px] font-semibold uppercase text-violet-1">
      Date
    </span>
    <span class="basis-4/12 text-[12px] font-semibold uppercase text-violet-1">
      User Activity
    </span>
    <span
      class="basis-5/12 flex gap-[5px] items-center text-[12px] font-semibold uppercase text-violet-1"
    >
      <span class="leading-[15px]">Detail</span>
      <span class="relative">
        <IconInfo class="peer" />
        <AppTooltip class="hidden peer-hover:flex">
          <span class="text-[12px] lowercase text-dark font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            eget.
          </span>
        </AppTooltip>
      </span>
    </span>
  </div>
</template>
