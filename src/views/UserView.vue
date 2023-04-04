<script setup>
import { ref } from "vue";
import TableComp from "../components/TableComp.vue";
import ButtonComp from "../components/ButtonComp.vue";
import HeaderComp from "../components/HeaderComp.vue";
import TableFooterComp from "../components/TableFooterComp.vue";
import { useUserStore } from "../stores/user.js";
import { Edit } from "lucide-vue-next";
import { Trash2 } from "lucide-vue-next";
import { Plus } from "lucide-vue-next";
import { ChevronLeft } from "lucide-vue-next";
import { ChevronRight } from "lucide-vue-next";
import AvatarComp from "../components/AvatarComp.vue";

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
          <ButtonComp button-name="Add User" color="secondary">
            <template #append>
              <Plus class="w-4 h-4" />
            </template>
          </ButtonComp>
          <ButtonComp button-name="Export" color="warn" />
        </div>
      </template>
    </HeaderComp>
    <TableComp selectable :headers="headers" :items="userStore.users">
      <template #name="{ item }">
        <div class="flex items-center gap-2">
          <AvatarComp :image-link="item.avatar" :avatar-text="item.name" />
          <div>
            <p class="font-bold">{{ item.name }}</p>
            {{ item.email }}
          </div>
        </div>
      </template>
      <template #actions>
        <div class="flex justify-center gap-2">
          <ButtonComp button-name="Edit User">
            <template #append>
              <Edit class="w-4 h-4" />
            </template>
          </ButtonComp>
          <ButtonComp button-name="Delete User" color="warn">
            <template #append>
              <Trash2 class="w-4 h-4" />
            </template>
          </ButtonComp>
        </div>
      </template>
    </TableComp>
    <TableFooterComp>
      <template #action>
        <div class="flex gap-2 py-2">
          <ButtonComp button-name="Previous" color="none" size="xsmall">
            <template #append>
              <ChevronLeft class="w-4 h-4" />
            </template>
          </ButtonComp>
          <ButtonComp button-name="Next" color="none" size="xsmall">
            <template #prepend>
              <ChevronRight class="w-4 h-4" />
            </template>
          </ButtonComp>
        </div>
      </template>
    </TableFooterComp>
  </div>
</template>
