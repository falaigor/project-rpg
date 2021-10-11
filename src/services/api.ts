import axios from "axios";
import { PODCASTS_LIST } from "./gatewayRoutes";

export const getPodcastList = async () => {
  const { data } = await axios.get(PODCASTS_LIST);
  return data;
};
