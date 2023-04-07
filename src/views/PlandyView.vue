<script setup>
import { ref } from "vue";
import TableComp from "../components/TableComp.vue";
import ButtonComp from "../components/ButtonComp.vue";
import HeaderComp from "../components/HeaderComp.vue";
import TableFooterComp from "../components/TableFooterComp.vue";
import { useAppointmentStore } from "../stores/appointments.js";
import { useModalStore } from "../stores/modal.js";
import { Plus } from "lucide-vue-next";
import { ChevronLeft } from "lucide-vue-next";
import { ChevronRight } from "lucide-vue-next";
import { Edit } from "lucide-vue-next";
import AvatarComp from "../components/AvatarComp.vue";

const appointmentStore = useAppointmentStore();
const modalStore = useModalStore();

const headers = ref([
  { name: "MÜŞTERİ", value: "customer" },
  { name: "HİZMET", value: "service" },
  { name: "PERSONEL", value: "staff" },
  { name: "SÜRE", value: "duration" },
  { name: "TARİH", value: "start_at" },
  { name: "DURUM", value: "status" },
  { name: "", value: "actions" },
]);

function addUser() {
  modalStore.addModal({ type: "Appointments", title: "Create Appointment" });
}

function editAppointments(item) {
  modalStore.addModal({
    type: "Appointments",
    title: "Update Appointment",
    item: { ...item },
  });
}

appointmentStore.getAppointments();
</script>
<template>
  <div class="w-full overflow-y-auto pb-24">
    <HeaderComp title="All users">
      <template #actions>
        <div class="flex gap-2">
          <ButtonComp
            button-name="Yeni Randevu"
            color="secondary"
            @click="addUser"
          >
            <template #append>
              <Plus class="w-4 h-4" />
            </template>
          </ButtonComp>
          <ButtonComp button-name="Export" color="warn" />
        </div>
      </template>
    </HeaderComp>
    <TableComp
      selectable
      :headers="headers"
      :items="appointmentStore.appointments"
    >
      <template #customer="{ item }">
        <div class="flex items-center gap-3">
          <AvatarComp
            :image-link="item.customer.avatar_url"
            :avatar-text="`${item.customer.first_name} ${item.customer.last_name}`"
          />
          <div>
            <p class="font-bold">
              {{ item.customer.first_name }} {{ item.customer.last_name }}
            </p>
            {{ item.customer.email }}
          </div>
        </div>
      </template>
      <template #service="{ item }">
        <div class="flex items-center gap-2">
          <div>
            <p>
              {{ item.service.title }}
            </p>
          </div>
        </div>
      </template>
      <template #staff="{ item }">
        <div class="flex items-center gap-2">
          <div>
            <p>{{ item.staff.first_name }} {{ item.staff.last_name }}</p>
          </div>
        </div>
      </template>
      <template #duration="{ item }">
        <div class="flex items-center gap-2">
          <div>
            <p>{{ item.duration }}</p>
          </div>
        </div>
      </template>
      <template #start_at="{ item }">
        <div class="flex items-center gap-2">
          <div>
            <p>
              {{ item.start_at }}
            </p>
          </div>
        </div>
      </template>
      <template #status="{ item }">
        <div class="flex items-center gap-2">
          <div>
            <p>
              {{ item.status }}
            </p>
          </div>
        </div>
      </template>
      <!-- <template #actions>
        <div class="flex justify-end gap-2">
          <ButtonComp button-name="Edit" size="xsmall">
            <template #append>
              <Edit class="w-4 h-4" />
            </template>
          </ButtonComp>
        </div>
      </template> -->
      <template #actions="{ item }">
        <div class="flex justify-end gap-2">
          <ButtonComp button-name="Edit User" @click="editAppointments(item)">
            <template #append>
              <Edit class="w-4 h-4" />
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

<!--
  personal_token
:
"xPHm1fud8huZ6yFwPGiEvVE3iWHYkJDV"
token
:
"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2Rldi1hcGkucGxhbmR5LmNvL2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNjgwNjQ2NjA5LCJuYmYiOjE2ODA2NDY2MDksImp0aSI6IllYTFVGSVZXRk1UOVpTSmwiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.dH-d7XUDErSRBEXYDWJd3OpbB-1Px4divZywFzPPn54"
user
:
{id: 1, company: "Samet", email: "samet@ron.digital", avatar_url: null,…}
avatar_url
:
null
company
:
"Samet"
created_at
:
"2022-11-29T12:20:53.000000Z"
email
:
"samet@ron.digital"
email_verified_at
:
null
id
:
1
is_premium
:
true
is_premium_or_trial
:
true
is_trial
:
false
pricing_plan
:
{id: 1, product_id: 1, name: "PLANDY PREMIUM MONTHLY", description: "Plandy Aylık Ödeme Planı",…}
pricing_plan_id
:
1
setting
:
{timezone: "Europe/Istanbul", date_format: "YYYY-MM-DD", time_format: "h:mm a", first_day: 0,…}
subscription_period_end
:
"1680568676216"
subscription_status
:
"ACTIVE"
title
:
"PLANDY PREMIUM MONTHLY"
 -->
