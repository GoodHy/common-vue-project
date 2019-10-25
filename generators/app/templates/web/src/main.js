import "babel-polyfill";
import "normalize.css/normalize.css";
import "./style/init.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./route/router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
