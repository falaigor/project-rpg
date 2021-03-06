const GATEWAY_BASE_URL = process.env.REACT_APP_STRAPI_API_URL;

export const PODCASTS_LIST = GATEWAY_BASE_URL + "/podcasts";
export const LIVES_LIST = GATEWAY_BASE_URL + "/lives";

export const PUBLICATIONS_LIST = GATEWAY_BASE_URL + "/publications";
export const PUBLICATIONS_FETCH_PUBLICATION_URL = (id: string) =>
  `${GATEWAY_BASE_URL}/publications?slug=${id}`;

export const AUTHORS_LIST = GATEWAY_BASE_URL + "/authors";
export const AUTHOR_FETCH_URL = (id: string) =>
  `${GATEWAY_BASE_URL}/authors?username=${id}`;
