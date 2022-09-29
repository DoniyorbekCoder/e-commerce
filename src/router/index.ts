import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Statistics/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // {
    //   path: "/401",
    //   name: "unauthentication",
    //   component: () => import("@/views/errorViews/unAuthentication.vue"),
    // },
    // {
    //   path: "/404",
    //   name: "page_not_found",
    //   component: () => import("@/views/errorViews/pageNotFound.vue"),
    // },
    // {
    //   path: "/500",
    //   name: "server_error",
    //   component: () => import("@/views/errorViews/serverError.vue"),
    // },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/index.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("@/views/Products/index.vue"),
    },

    {
      path: "/warehouse",
      name: "warehouse",
      component: () => import("@/views/Warehouse/index.vue"),
    },
    {
      path: "/users",
      name: "users",
      component: () => import("@/views/Users/index.vue"),
    },
    {
      path: "/contracts",
      name: "contracts",
      component: () => import("@/views/Contracts/index.vue"),
    },
    {
      path: "/transactions",
      name: "transactions",
      component: () => import("@/views/Transactions/index.vue"),
    },
    {
      path: "/reports",
      name: "reports",
      component: () => import("@/views/Reports/index.vue"),
    },
  ],
});

export default router;
