import getMusicEndpoint from "../utils/getMusic.endpoint";
import axios_service from "./axios_service";

const apiWithAxios = {
  getTrack(track) {
    return axios_service.get(getMusicEndpoint.getTrack(track));
  },
  getLyric(id) {
    return axios_service.get(getMusicEndpoint.getLyrics(id));
  },
};

export default apiWithAxios;
