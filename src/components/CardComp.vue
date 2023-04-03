<script setup>
defineProps({
  title: {
    type: [String, Number],
    default: "",
  },
});
</script>
<template>
  <div
    class="w-fit h-fit rounded-lg shadow-md p-6 m-4 bg-white flex flex-col gap-4"
  >
    <slot name="image"></slot>
    <p class="font-bold text-xl">{{ title }}</p>
    <slot name="info"></slot>
  </div>
</template>
