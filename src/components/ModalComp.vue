<script setup>
import { useModalStore } from "../stores/modal";
import { XCircle } from "lucide-vue-next";

import { cva } from "class-variance-authority";

const modal = cva(
  [
    "w-full h-auto sm:max-w-lg md:max-w-xl p-2 md:p-4 flex flex-col items-center bg-white relative border border-black/20",
  ],
  {
    variants: {
      radius: {
        none: "rounded-none",
        small: "rounded-sm",
        normal: "rounded-md",
        large: "rounded-lg",
        full: "rounded-full",
      },
    },
  }
);

defineProps({
  radius: {
    type: String,
    default: "large",
  },
  title: {
    type: String,
  },
  validator(value) {
    return ["none", "small", "normal", "large", "full"].includes(
      value.toLocaleLowerCase()
    );
  },
});

const modalStore = useModalStore();

function closeModalButton() {
  modalStore.closeModal();
}
</script>
<template>
  <div
    @click="closeModalButton"
    class="w-full h-full fixed flex flex-col items-center justify-center z-50 inset-0 bg-black/30"
  >
    <div @click.stop :class="modal({ radius })">
      <div class="flex justify-between w-full">
        <div class="text-lg font-bold">{{ title }}</div>

        <button @click="closeModalButton">
          <XCircle fill="white" />
        </button>
      </div>

      <div class="w-full h-auto">
        <slot> </slot>
      </div>

      <div class="flex justify-end">
        <slot name="actions"> </slot>
      </div>
    </div>
  </div>
</template>
