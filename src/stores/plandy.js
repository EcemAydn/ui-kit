import { defineStore } from "pinia";
import api from "../utils/api.js";

export const useLoginStore = defineStore("User", () => {
  function getUser() {
    if (localStorage.getItem("token")) {
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;
    }
  }

  function addUser(item) {
    return new Promise((resolve, reject) => {
      api
        .post("/auth/login", {
          email: item.email,
          password: item.password,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          api.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${response.data.token}`;

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
  return { getUser, addUser };
});
