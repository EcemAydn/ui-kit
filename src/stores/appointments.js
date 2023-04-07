import { ref } from "vue";
import { defineStore } from "pinia";
import api from "../utils/api.js";

export const useAppointmentStore = defineStore("Appointment", () => {
  const appointments = ref([]);
  const services = ref([]);
  const staffs = ref([]);
  const customers = ref([]);

  function getAppointments() {
    return new Promise((resolve, reject) => {
      api
        .get("/appointments")
        .then((response) => {
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

  function editAppointments(item) {
    return new Promise((resolve, reject) => {
      api
        .put(`/appointments/update/${item.id}`, {
          customer_id: item.customer_id,
          service_id: item.service_id,
          staff_id: item.staff_id,
          payment: item.payment,
          duration: item.duration,
          start_at: item.start_at,
          status: item.status,
        })
        .then((response) => {
          const findItem = appointments.value.findIndex(
            (item2) => item2.id === item.id
          );
          appointments.value.splice(findItem, 1, response.data.appointment);
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

  function getService() {
    return new Promise((resolve, reject) => {
      api
        .get("/services")
        .then((response) => {
          services.value = response.data.services;
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

  function getStaffs() {
    return new Promise((resolve, reject) => {
      api
        .get("/staffs")
        .then((response) => {
          staffs.value = response.data.staffs;
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

  function getCustomers() {
    return new Promise((resolve, reject) => {
      api
        .get("/customers")
        .then((response) => {
          customers.value = response.data.customers;
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
          appointments.value.unshift(response.data.appointment);
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
    editAppointments,
    appointments,
    services,
    staffs,
    customers,
    createAppointment,
    getService,
    getStaffs,
    getCustomers,
  };
});
