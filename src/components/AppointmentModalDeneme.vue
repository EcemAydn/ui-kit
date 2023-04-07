<script setup>
import InputComp from "./InputComp.vue";
import ButtonComp from "./ButtonComp.vue";
import { onMounted, ref } from "vue";
import { useAppointmentStore } from "../stores/appointments.js";
import { useModalStore } from "../stores/modal.js";

const appointmentStore = useAppointmentStore();
const user = ref({
  customer: "",
  service: "",
  staff: "",
  duration: "",
  start_at: "",
  status: "",
  payment: "",
});
const props = defineProps({
  item: {
    type: Object,
  },
});
const statusList = ref(["Approved", "Pending", "Canceled", "Completed"]);
const modalStore = useModalStore();
appointmentStore.getCustomers();
appointmentStore.getService();
appointmentStore.getStaffs();

onMounted(() => {
  if (props.item) {
    user.value.id = props.item.id;
    user.value.customer = props.item.customer.id;
    user.value.service = props.item.service.id;
    user.value.staff = props.item.staff.id;
    user.value.start_at = props.item.start_at;
    user.value.duration = props.item.duration;
    user.value.status = props.item.status;
    user.value.payment = props.item.payment;
  }
});

function saveButton() {
  if (props.item) {
    appointmentStore
      .editAppointments({
        id: user.value.id,
        customer_id: user.value.customer,
        service_id: user.value.service,
        staff_id: user.value.staff,
        payment: "Ticket",
        duration: user.value.duration,
        start_at: user.value.start_at,
        status: user.value.status,
      })
      .then(() => {
        modalStore.closeModal();
      })
      .catch(() => {
        console.log("arda");
      });
  } else {
    appointmentStore
      .createAppointment({
        customer_id: user.value.customer,
        service_id: user.value.service,
        staff_id: user.value.staff,
        payment: "Ticket",
        duration: user.value.duration,
        start_at: user.value.start_at,
        status: user.value.status,
      })
      .then(() => {
        modalStore.closeModal();
      })
      .catch(() => {
        console.log("arda turan");
      });
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
    <div class="w-full flex flex-col gap-2">
      <label>Müşteri adı</label>
      <select
        v-model="user.customer"
        class="border w-full rounded-md p-1 outline-none"
      >
        <option disabled value="">Please Select</option>
        <option
          v-for="musteri in appointmentStore.customers"
          :key="musteri.id"
          :value="musteri.id"
        >
          {{ musteri.first_name }}
          {{ musteri.last_name }}
        </option>
      </select>
    </div>
    <div class="w-full flex flex-col gap-2">
      <label>Hizmet</label>
      <select
        v-model="user.service"
        class="border w-full rounded-md p-1 outline-none"
      >
        <option disabled value="">Please Select</option>
        <option
          v-for="service in appointmentStore.services"
          :key="service.id"
          :value="service.id"
        >
          {{ service.title }}
        </option>
      </select>
    </div>
    <div class="w-full flex flex-col gap-2">
      <label>Personel</label>
      <select
        v-model="user.staff"
        class="border w-full rounded-md p-1 outline-none"
      >
        <option disabled value="">Please Select</option>
        <option
          v-for="staff in appointmentStore.staffs"
          :key="staff.id"
          :value="staff.id"
        >
          {{ staff.first_name }}
          {{ staff.last_name }}
        </option>
      </select>
    </div>
    <div class="w-full flex flex-col gap-2">
      <InputComp type="date" v-model="user.start_at" label="Tarih" />
    </div>
    <div class="w-full flex flex-col gap-2">
      <InputComp type="number" v-model="user.duration" label="Süre" />
    </div>
    <div class="w-full flex flex-col gap-2">
      <label>Durum</label>
      <select
        v-model="user.status"
        class="border w-full rounded-md p-1 outline-none"
      >
        <option disabled value="">Please Select</option>
        <option v-for="status in statusList" :key="status" :value="status">
          {{ status }}
        </option>
      </select>
    </div>
    <div class="w-full flex justify-end items-center gap-2">
      <ButtonComp buttonName="Cancel" color="warn" @click="closeModalButton" />
      <ButtonComp buttonName="Save" type="submit" />
    </div>
  </form>
</template>
