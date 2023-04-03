import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const users = ref([
    {
      id: 1,
      avatar: "https://i.pravatar.cc",
      name: "Ecem Beyza Aydın",
      email: "ecemaydn15@gmail.com",
      position: "Frontend Developer",
      country: "Turkey",
      status: "Active",
    },
    {
      id: 2,
      avatar: "https://i.pravatar.cc",
      name: "Aydın Ecem",
      email: "AydinEcem@gmail.com",
      position: "Backend Developer",
      country: "Germany",
      status: "Active",
    },
    {
      id: 3,
      avatar: "https://i.pravatar.cc",
      name: "Ecem Beyza Aydın",
      email: "EcemBeyzaAydın@gmail.com",
      position: "Frontend Developer",
      country: "Turkey",
      status: "Active",
    },
    {
      id: 4,
      avatar: "https://i.pravatar.cc",
      name: "Aydın Ecem",
      email: "AydinEcem@gmail.com",
      position: "Backend Developer",
      country: "Germany",
      status: "Active",
    },
  ]);

  const products = ref([
    {
      id: 1,
      name: "Education Dashboard",
      detail: "Html templates",
      technology: "angular",
      productsId: "#194556",
      price: "$149",
    },
    {
      id: 2,
      name: "React UI Kit",
      detail: "Html templates",
      technology: "React JS",
      productsId: "#194556",
      price: "$150",
    },
    {
      id: 3,
      name: "Education Dashboard",
      detail: "Html templates",
      technology: "angular",
      productsId: "#194556",
      price: "$149",
    },
    {
      id: 4,
      name: "React UI Kit",
      detail: "Html templates",
      technology: "React JS",
      productsId: "#194556",
      price: "$100",
    },
  ]);

  function createUser(user) {
    users.value.push(user);
  }

  function editUser(user) {
    const findUser = users.value.findIndex((item) => item.id === user.id);
    users.value.splice(findUser, 1, user);
  }

  function deleteUser(id) {
    const findUser = users.value.findIndex((item) => item.id === id);
    users.value.splice(findUser, 1);
  }

  return { users, products, createUser, editUser, deleteUser };
});
