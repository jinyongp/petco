import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Hospital from "../views/Hospital.vue";

Vue.use(VueRouter);

const routes = [
  // config
  {
    name: "index",
    path: "/",
    component: Home,
  },
  {
    name: "hospital",
    path: "/hospital",
    component: Hospital,
  },
];

export default new VueRouter({
  routes,
});
