<script setup>
import { ChevronLeft } from "lucide-vue-next";
import { ChevronRight } from "lucide-vue-next";
</script>
<template>
  <div
    class="px-2 flex items-center sticky justify-between gap-6 bg-white lg:mx-0 rounded-md -bottom-1 left-0"
  >
    <div class="flex items-center">
      <ChevronLeft></ChevronLeft>
      <ChevronRight></ChevronRight>
      <p class="text-xs md:text-sm">Showing 1-20 of 2290</p>
    </div>
    <slot name="action"></slot>
  </div>
</template>
