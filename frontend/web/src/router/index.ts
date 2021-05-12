import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Appointment from "../views/Appointment.vue";
import Estimate from "../views/Estimate.vue";
import EstimateRes from "../views/EstimateRes.vue";
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
    name: "estimate",
    path: "/estimate",
    component: Estimate,
  },
  {
    name: "estimateres",
    path: "/estimateres",
    // redirect: "/estimateres/all",
    component: EstimateRes,
    // children: [
    //   {
    //     name: "estimateres-filter",
    //     path: ":id",
    //   },
    // ],
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
