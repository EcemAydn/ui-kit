<script setup>
import { ChevronLeft } from "lucide-vue-next";
import { ChevronRight } from "lucide-vue-next";
</script>
<template>
  <div
    class="px-2 flex items-center justify-between gap-6 bg-white mx-4 lg:mx-0 rounded-md"
  >
    <div class="flex items-center">
      <ChevronLeft></ChevronLeft>
      <ChevronRight></ChevronRight>
      <p class="text-xs md:text-sm">Showing 1-20 of 2290</p>
    </div>
    <slot name="action"></slot>
  </div>
</template>
