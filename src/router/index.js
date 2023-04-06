import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/user",
      name: "user",
      component: () => import("../views/UserView.vue"),
    },
    {
      path: "/product",
      name: "product",
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/plandy",
      name: "plandy",
      component: () => import("../views/PlandyView.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../views/ServicesView.vue"),
    },
    {
      path: "/staffs",
      name: "staffs",
      component: () => import("../views/StaffsView.vue"),
    },
    {
      path: "/customers",
      name: "customers",
      component: () => import("../views/CustomerView.vue"),
    },
  ],
});

export default router;
