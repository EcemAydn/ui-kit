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

  return {
    getAppointments,
    appointments,
  };
});
