<script setup>
import { ref } from "vue";
import TableComp from "../components/TableComp.vue";
import ButtonComp from "../components/ButtonComp.vue";
import HeaderComp from "../components/HeaderComp.vue";
import TableFooterComp from "../components/TableFooterComp.vue";
import { useAppointmentStore } from "../stores/appointments.js";
import { Plus } from "lucide-vue-next";
import { ChevronLeft } from "lucide-vue-next";
import { ChevronRight } from "lucide-vue-next";
import AvatarComp from "../components/AvatarComp.vue";

const appointmentStore = useAppointmentStore();

const headers = ref([
  { name: "İSİM SOYİSİM", value: "first_name" },
  { name: "TELEFON", value: "phone" },
  { name: "E-POSTA", value: "email" },
  { name: "YAŞ", value: "birth_date" },
  { name: "ZİYARET SAYISI", value: "appointment_count" },
  { name: "SON ZİYARET", value: "appointmentSortedByDate" },
]);

appointmentStore.getCustomers();
</script>
<template>
  <div class="w-full overflow-y-auto pb-24">
    <HeaderComp title="All users">
      <template #actions>
        <div class="flex gap-2">
          <ButtonComp button-name="Yeni Hizmet" color="secondary">
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
      :items="appointmentStore.customers"
    >
      <template #first_name="{ item }">
        <div class="flex items-center gap-3">
          <AvatarComp
            :image-link="item.avatar_url"
            :avatar-text="item.first_name"
          />
          <div>
            <p class="font-bold">
              {{ item.first_name }}
              {{ item.last_name }}
            </p>
          </div>
        </div>
      </template>
      <template #phone="{ item }">
        <div class="flex items-center gap-2">
          <div>
            <p>
              {{ item.phone }}
            </p>
          </div>
        </div>
      </template>
      <template #email="{ item }">
        <div class="flex items-center gap-2">
          <div>
            <p>
              {{ item.email }}
            </p>
          </div>
        </div>
      </template>
      <template #birth_date="{ item }">
        <div class="flex items-center gap-2">
          <div>
            <p>
              {{ item.birth_date }}
            </p>
          </div>
        </div>
      </template>
      <template #appointment_count="{ item }">
        <div class="flex items-center gap-2">
          <div>
            <p>
              {{ item.appointment_count }}
            </p>
          </div>
        </div>
      </template>
      <template #appointmentSortedByDate="{ item }">
        <div class="flex items-center gap-2">
          <div>
            <p>
              {{ item.appointmentSortedByDate[0] }}
            </p>
          </div>
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
