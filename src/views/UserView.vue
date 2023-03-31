<script setup>
import { ref } from "vue";
import TableComp from "../components/TableComp.vue";
import { useUserStore } from "../stores/user.js";

const userStore = useUserStore();

const headers = ref([
  { name: "NAME", value: "name" },
  { name: "POSITION", value: "position" },
  { name: "COUNTRY", value: "country" },
  { name: "STATUS", value: "status" },
  { name: "", value: "actions" },
]);
</script>
<template>
  <div class="w-full overflow-y-auto pb-24 bg-zinc-50">
    <TableComp selectable :headers="headers" :items="userStore.users">
      <template #name>

      </template>

      <template #actions>
        buttons
      </template>
    </TableComp>
  </div>
</template>
