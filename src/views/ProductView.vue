<script setup>
import { ref } from "vue";
import TableComp from "../components/TableComp.vue";
import ButtonComp from "../components/ButtonComp.vue";
import CardComp from "../components/CardComp.vue";
import AccountsComp from "../components/AccountsComp.vue";
import { useUserStore } from "../stores/user.js";

const userStore = useUserStore();

const headers = ref([
  { name: "PRODUCT NAME", value: "name" },
  { name: "TECHNOLOGY", value: "technology" },
  { name: "ID", value: "productsId" },
  { name: "PRICE", value: "price" },
  { name: "", value: "actions" },
]);
</script>
<template>
  <div class="w-full overflow-y-auto pb-24 bg-zinc-50">
    <TableComp selectable :headers="headers" :items="userStore.products">
      <template #name="{ item }"> {{ item.detail }} </template>
      <template #actions>
        <div class="flex justify-center gap-2">
          <ButtonComp button-name="Edit Item" />
          <ButtonComp button-name="Delete Item" color="warn" />
        </div>
      </template>
    </TableComp>
    <div>
      <CardComp title="Other Accounts">
        <!-- <template #image>
          <img
            src="https://i.pravatar.cc"
            alt="Photo"
            class="w-24 h-24 rounded-md"
          />
        </template> -->
        <template #info>
          <AccountsComp accountsTitle="Bonnie Green" location="New York, USA" />
        </template>
      </CardComp>
    </div>
  </div>
</template>
