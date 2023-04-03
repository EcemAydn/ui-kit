<script setup>
import { ref } from "vue";
import TableComp from "../components/TableComp.vue";
import ButtonComp from "../components/ButtonComp.vue";
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
      <template #name="{ item }">
        <!-- <img
          :src="item.avatar"
          class="w-12 h-12 rounded-full absolute left-0 top-4"
        /> -->
        <div>
          {{ item.email }}
        </div>
      </template>
      <template #actions>
        <div class="flex justify-center gap-2">
          <ButtonComp button-name="Edit" />
          <ButtonComp button-name="Delete" color="warn" />
        </div>
      </template>
    </TableComp>
  </div>
</template>
