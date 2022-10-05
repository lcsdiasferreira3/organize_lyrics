import Vue from "vue";
import axios from "axios";

const axiosMethods = {
  init() {
    Vue.prototype.$http = axios;
  },

  get(api) {
    return Vue.prototype.$http.get(api);
  },
};

export default axiosMethods;
