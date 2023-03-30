<script setup>
import { RouterView } from "vue-router";
import LogoComp from './components/LogoComp.vue';
import MenuComp from './components/MenuComp.vue';
</script>

<template>
  <div class="w-full h-full overflow-hidden">
    <LogoComp />
    <div class="w-full h-full flex">
      <MenuComp />
      <RouterView />
    </div>
  </div>
</template>
