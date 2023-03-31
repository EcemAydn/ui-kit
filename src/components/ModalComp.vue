<script setup>
import { useModalStore } from "../stores/modal";

// import ButtonComp from "../components/ButtonComp.vue";

const modalStore = useModalStore();

function closeModalButton() {
  modalStore.closeModal();
}
</script>
<template>
  <div
    @click="closeModalButton"
    class="w-full h-full fixed flex flex-col items-center justify-center z-50 left-0 right-0 top-0 bottom-0 bg-black/30"
  >
    <div
      @click.stop
      class="w-fit md:px-4 flex flex-col items-center bg-white rounded-md relative"
    >
      <button
        class="w-fit absolute -right-3 -top-3 font-bold bg-white border p-1 px-3 rounded-full"
        @click="closeModalButton"
      >
        x
      </button>
      <!-- <ButtonComp button-name="x" color="warn" size="xsmall" class="absolute -right-3 -top-3 font-bold border-none" radius="large" @click="closeModalButton"/> -->
      <slot> </slot>
    </div>
  </div>
</template>
