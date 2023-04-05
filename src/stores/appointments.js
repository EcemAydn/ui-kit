import { ref } from "vue";
import { defineStore } from "pinia";
import api from "../utils/api.js";

export const useAppointmentStore = defineStore("Appointment", () => {
  const appointments = ref([]);

  function getAppointments() {
    return new Promise((resolve, reject) => {
      api
        .get("/appointments")
        .then((response) => {
          console.log(response.data);
          appointments.value = response.data.appointments;
          resolve();
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response.data.message);
          } else {
            reject(error);
          }
        });
    });
  }
  function createAppointment(item) {
    return new Promise((resolve, reject) => {
      api
        .post("/appointments/create", {
          customer_id: item.customer_id,
          service_id: item.service_id,
          staff_id: item.staff_id,
          payment: item.payment,
          duration: item.duration,
          start_at: item.start_at,
          status: item.status,
        })
        .then((response) => {
          console.log(response.data);
          appointments.value.push(response.data.appointments);
          resolve("Successful");
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response.data.message);
          } else {
            reject(error);
          }
        });
    });
  }

  return {
    getAppointments,
    appointments,
    createAppointment,
  };
});
