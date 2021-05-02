import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueApollo from "vue-apollo";
import apolloClient from "./apollo";
// import { createProvider } from './vue-apollo'

Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  router,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
