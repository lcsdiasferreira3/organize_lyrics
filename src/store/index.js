import Vue from "vue";
import Vuex from "vuex";
import musixmatch from "./modules/musixmatch";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    musixmatch,
  },
});
