import config from "Configs/config.json";

export const getImageUrl = (image: string) => config.gatewayUrl + image;
