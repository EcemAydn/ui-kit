<script setup>
import { ref } from "vue";
import TableComp from "../components/TableComp.vue";
import { useUserStore } from "../stores/user.js";

const userStore = useUserStore();

const arda = ref([
  { name: "PRODUCT NAME", value: "name" },
  { name: "TECHNOLOGY", value: "name" },
  { name: "ID", value: "name" },
  { name: "PRICE", value: "name" },
  { name: "", value: "name" },
]);
</script>
<template>
  <div class="w-full overflow-y-auto pb-24 bg-zinc-50">
    <TableComp :headers="arda" :items="userStore.product" />
  </div>
</template>
