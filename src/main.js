import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueTree from "@ssthouse/vue-tree-chart";
Vue.component("vue-tree", VueTree);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
