<script setup>
import { ref } from "vue";
import TableComp from "../components/TableComp.vue";
import ButtonComp from "../components/ButtonComp.vue";
import HeaderComp from "../components/HeaderComp.vue";
import TableFooterComp from "../components/TableFooterComp.vue";
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
  <div class="w-full overflow-y-auto pb-24">
    <HeaderComp title="All users">
      <template #actions>
        <div class="flex gap-2">
          <ButtonComp button-name="+ Add User" color="secondary" />
          <ButtonComp button-name="Export" color="warn" />
        </div>
      </template>
    </HeaderComp>
    <TableComp selectable :headers="headers" :items="userStore.users">
      <template #name="{ item }">
        <div class="flex items-center gap-2">
          <img
            :src="item.avatar"
            class="w-12 h-12 lg:w-10 lg:h-10 rounded-lg"
          />
          <div>
            <p class="font-bold">{{ item.name }}</p>
            {{ item.email }}
          </div>
        </div>
      </template>
      <template #actions>
        <div class="flex justify-center gap-2">
          <ButtonComp button-name="Edit User" />
          <ButtonComp button-name="Delete User" color="warn" />
        </div>
      </template>
    </TableComp>
    <TableFooterComp>
      <template #action>
        <div class="flex gap-2 py-2">
          <ButtonComp button-name="Previous" color="secondary" size="xsmall" />
          <ButtonComp button-name="Next" color="secondary" size="xsmall" />
        </div>
      </template>
    </TableFooterComp>
  </div>
</template>
