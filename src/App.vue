<script setup>
import { RouterView } from "vue-router";
import LogoComp from "./components/LogoComp.vue";
import MenuComp from "./components/MenuComp.vue";
import EditModal from "./components/EditModal.vue";
import BenModal from "./components/BenModal.vue";
import { useModalStore } from "./stores/modal";
import modalComp from "./components/ModalComp.vue";

const modalStore = useModalStore();
function getComponent(type) {
  switch (type) {
    case "title":
      return EditModal;
    case "ben":
      return BenModal;
    default:
      return EditModal;
  }
}
</script>

<template>
  <div class="w-full h-full overflow-hidden">
    <LogoComp />
    <div class="w-full h-full flex">
      <MenuComp />
      <modalComp
        v-for="(modal, index) in modalStore.modals"
        :key="index + 123123213"
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
