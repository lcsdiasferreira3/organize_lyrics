import apiWithAxios from "../../service/apiWithAxios";

export default {
  state: {
    data: null,
    dataTrack: null,
  },
  mutations: {
    dataR(state, data) {
      state.data = data;
    },
    dataT(state, data) {
      state.dataTrack = data;
    },
  },
  actions: {
    getTrack({ commit }, { track }) {
      return new Promise((resolve, reject) => {
        // commit("loading", true);
        apiWithAxios
          .getTrack(track)
          .then((result) => {
            resolve(result);
            commit("dataT", result);
            // commit("loading", false);
          })
          .catch((err) => {
            reject(err);
            // commit("loading", false);
          });
      });
    },
    getLyrics({ commit }, { id }) {
      return new Promise((resolve, reject) => {
        // commit("loading", true);
        apiWithAxios
          .getLyric(id)
          .then((result) => {
            resolve(result);
            commit("dataR", result);
          })
          .catch((err) => {
            reject(err);

            // commit("loading", false);
          });
      });
    },
  },
};
