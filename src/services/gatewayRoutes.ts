import config from "./../configs/config.json";
const GATEWAY_BASE_URL = config.gatewayUrl;

export const PODCASTS_LIST = GATEWAY_BASE_URL + "/podcasts";
export const LIVES_LIST = GATEWAY_BASE_URL + "/lives";
export const AUTHORS_LIST = GATEWAY_BASE_URL + "/authors";
export const PUBLICATIONS_LIST = GATEWAY_BASE_URL + "/publications";