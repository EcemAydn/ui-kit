<script setup>
import InputComp from "./InputComp.vue";
import ButtonComp from "./ButtonComp.vue";
import { ref } from "vue";
import { useAppointmentStore } from "../stores/appointments.js";
import { useModalStore } from "../stores/modal.js";
import SelectComp from "./SelectComp.vue";

const appointmentStore = useAppointmentStore();
const user = ref({
  customer_id: "",
  service_id: "",
  staff_id: "",
  duration: "",
  start_at: "",
  status: "",
  payment: "",
});
const modalStore = useModalStore();
const arda = ref([{ label: "ecem" }, { label: "ardaturan" }]);

function saveButton() {
  appointmentStore.createAppointment({
    customer_id: user.value.customer_id,
    service_id: user.value.service_id,
    staff_id: user.value.staff_id,
    payment: "Ticket",
    duration: user.value.duration,
    start_at: user.value.start_at,
    status: user.value.status,
  });
  modalStore.closeModal();
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
    <div class="w-full flex flex-col gap-2">
      <inputComp v-model="user.customer_id" label="Müşteri" />
    </div>
    <div class="w-full flex flex-col gap-2">
      <InputComp v-model="user.service_id" label="Hizmet" />
    </div>
    <div class="w-full flex flex-col gap-2">
      <InputComp v-model="user.staff_id" label="Personel" />
    </div>
    <div class="w-full flex flex-col gap-2">
      <InputComp v-model="user.start_at" label="Tarih" />
    </div>
    <div class="w-full flex flex-col gap-2">
      <InputComp v-model="user.duration" label="Süre" />
    </div>
    <div class="w-full flex flex-col gap-2">
      <SelectComp
        v-model:select="arda.label"
        :select-items="arda"
        label="Durum"
        v-model="arda"
      />
    </div>

    <div class="w-full flex justify-end items-center gap-2">
      <ButtonComp buttonName="Cancel" color="warn" @click="closeModalButton" />
      <ButtonComp buttonName="Save" type="submit" />
    </div>
  </form>
</template>
