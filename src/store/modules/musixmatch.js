import apiWithAxios from "../../service/apiWithAxios";

export default {
  state: {
    data: null,
  },
  mutations: {
    dataR(state, data) {
      state.data = data;
    },
  },
  actions: {
    getTrack(/*{ commit }*/ { nameTrack, nameAuthor }) {
      return new Promise((resolve, reject) => {
        // commit("loading", true);
        apiWithAxios
          .getTrack(nameTrack, nameAuthor)
          .then((result) => {
            resolve(result);
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
            console.log(result);
          })
          .catch((err) => {
            reject(err);
            console.log(err);

            // commit("loading", false);
          });
      });
    },
  },
};
