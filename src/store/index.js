import Vue from "vue";
import Vuex from "vuex";
import vagalume from "./modules/vagalume";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    vagalume,
  },
});
