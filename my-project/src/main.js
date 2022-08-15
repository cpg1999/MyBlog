import Vue from "vue";
import App from "./App.vue";

import elementui from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

import router from "@/router";
import * as echarts from "echarts";
import * as API from "@/api";

Vue.use(elementui);
Vue.prototype.$echarts = echarts;
Vue.prototype.$API = API;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
