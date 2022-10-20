import baseEndpoint from "./base.endpoint";

const getMusicEndpoint = {
  getTrack: (track) =>
    baseEndpoint.baseEndpoint +
    "search.excerpt?" +
    "apikey=" +
    baseEndpoint.apiKey +
    "&q=" +
    track,

  getLyrics: (id) =>
    baseEndpoint.baseEndpoint +
    "search.php?" +
    "musid=" +
    id +
    "&apikey=" +
    baseEndpoint.apiKey,
};

export default getMusicEndpoint;
