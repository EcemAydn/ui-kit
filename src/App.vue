<script setup>
import { RouterView } from "vue-router";
import LogoComp from "./components/LogoComp.vue";
// import MenuComp from "./components/MenuComp.vue";
import ContentComp from "./components/ContentComp.vue";
import AppointmentModal from "./components/AppointmentModal.vue";
import { useModalStore } from "./stores/modal";
import modalComp from "./components/ModalComp.vue";
import { useLoginStore } from "./stores/plandy";
import AppointmentModalDeneme from "./components/AppointmentModalDeneme.vue";

const loginStore = useLoginStore();

const modalStore = useModalStore();
function getComponent(type) {
  switch (type) {
    case "title":
      return ContentComp;
    case "appointment":
      return AppointmentModal;
    default:
      return AppointmentModalDeneme;
  }
}
loginStore.getUser();
</script>

<template>
  <div class="w-full h-full overflow-hidden bg-zinc-50 lg:bg-white">
    <LogoComp />
    <div class="w-full h-full flex">
      <!-- <MenuComp /> -->
      <modalComp
        v-for="(modal, index) in modalStore.modals"
        :key="index + 123123213"
        :title="modal.title"
      >
        <component
          :is="getComponent(modal.type)"
          :item="modal.item"
        ></component>
      </modalComp>
      <RouterView />
    </div>
  </div>
</template>
