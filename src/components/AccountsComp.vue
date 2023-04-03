<script setup>
import ButtonComp from "../components/ButtonComp.vue";

defineProps({
  accountsTitle: {
    type: String,
  },
  location: {
    type: String,
  },
});
</script>
<template>
  <div class="flex gap-2">
    <img
      src="https://i.pravatar.cc"
      alt="Photo"
      class="w-8 h-8 rounded-full mt-1"
    />
    <div>
      <h3>{{ accountsTitle }}</h3>
      <p class="text-blue-500">{{ location }}</p>
      <p class="text-sm text-gray-500">Last seen: 1 hour ago</p>
    </div>
  </div>
  <ButtonComp button-name="Edit Item" color="none" />
</template>
