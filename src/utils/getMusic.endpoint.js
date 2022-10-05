import baseEndpoint from "./base.endpoint";

const getMusicEndpoint = {
  getTrack: (nameTrack, nameAuthor) =>
    baseEndpoint.baseEndpoint +
    "track.search?q_track=" +
    nameTrack +
    "&q_artist=" +
    nameAuthor +
    baseEndpoint.apiKey,

  getLyrics: (id) =>
    baseEndpoint.baseEndpoint +
    "matcher.lyrics.get?track_id=" +
    id +
    baseEndpoint.apiKey,
};

export default getMusicEndpoint;
