import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import RegisterTransaction from "@/views/RegisterTransaction.vue";
import Details from "@/views/Details.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "RegisterTransaction",
    component: RegisterTransaction,
  },
  {
    path: "/details",
    name: "Details",
    component: Details,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
