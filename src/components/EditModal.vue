<script setup>
import InputComp from "../components/InputComp.vue";
import ButtonComp from "../components/ButtonComp.vue";
import { onMounted, ref } from "vue";
import { useUserStore } from "../stores/user.js";
import { useModalStore } from "../stores/modal.js";

const userStore = useUserStore();
const user = ref({
  id: "",
  name: "",
  position: "",
  country: "",
  status: "",
});
const modalStore = useModalStore();
const props = defineProps({
  item: {
    type: Object,
  },
});
// const statusUser = ref({
//     active: "Active",
//     offline: "Offline",
// })

onMounted(() => {
  if (props.item) {
    user.value = props.item;
  }
});

function saveButton() {
  if (props.item) {
    userStore.editUser(user.value);
    modalStore.closeModal();
  } else {
    userStore.createUser({
      id: user.value.id,
      name: user.value.name,
      position: user.value.position,
      country: user.value.country,
      status: user.value.status,
    });
    modalStore.closeModal();
  }
}

function closeModalButton() {
  modalStore.closeModal();
}
</script>
<template>
  <form
    @submit.prevent="saveButton"
    class="flex flex-col items-center p-10 gap-4 w-full"
  >
    <h1 class="text-xl">{{ item ? "Edit" : "Create" }} User</h1>
    <div class="w-full flex flex-col gap-2">
      <inputComp v-model="user.name" label="Name" />
    </div>
    <div class="w-full flex flex-col gap-2">
      <InputComp v-model="user.position" label="Position" />
    </div>
    <div class="w-full flex flex-col gap-2">
      <InputComp v-model="user.country" label="Country" />
    </div>
    <div class="w-full">
      <label for="user">Status</label>
      <div class="w-full flex gap-2 items-center">
        <select
          v-model="user.status"
          class="border w-full rounded-md p-1 outline-none"
        >
          <option>Active</option>
          <option>Offline</option>
        </select>
      </div>
    </div>
    <div class="w-full flex justify-end items-center gap-2">
      <ButtonComp buttonName="Cancel" color="warn" @click="closeModalButton" />
      <ButtonComp buttonName="Save" type="submit" />
    </div>
  </form>
</template>
