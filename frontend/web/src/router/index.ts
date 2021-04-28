import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Appointment from "../views/Appointment.vue";
import Support from "../views/Support.vue";

Vue.use(VueRouter);

const routes = [
  // config
  {
    name: "index",
    path: "/",
    component: Home,
  },
  {
    name: "appointment",
    path: "/appointment",
    component: Appointment,
  },
  {
    name: "support",
    path: "/support",
    component: Support,
  },
];

export default new VueRouter({
  routes,
});
