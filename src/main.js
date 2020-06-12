import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import MyHelper from "./helpers";

Vue.config.productionTip = false;

Vue.use(MyHelper);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
