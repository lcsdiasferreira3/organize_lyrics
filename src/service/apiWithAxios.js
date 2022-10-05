import getMusicEndpoint from "../utils/getMusic.endpoint";
import axios_service from "./axios_service";

const apiWithAxios = {
  getTrack(nameTrack, NameAuthor) {
    return axios_service.get(getMusicEndpoint.getTrack(nameTrack, NameAuthor));
  },
  getLyric(id) {
    return axios_service.get(getMusicEndpoint.getLyrics(id));
  },
};

export default apiWithAxios;
