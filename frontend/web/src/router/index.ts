import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Appointment from "../views/Appointment.vue";
import Support from "../views/Support.vue";
import MyPage from "../views/MyPage.vue";

Vue.use(VueRouter);

const routes = [
  // config
  {
    name: "index",
    path: "/",
    component: Home,
  },
  {
    name: "home",
    path: "/home",
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
  {
    name: "mypage",
    path: "/myapage",
    component: MyPage,
  },
];

export default new VueRouter({
  routes,
});
