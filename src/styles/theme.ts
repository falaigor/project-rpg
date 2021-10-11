import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2128",
      "700": "#242730",
      "600": "#373A42",
      "500": "#616480",
      "400": "#797D94",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#E4E4E4",
      "20": "#F1F1F1",
      "10": "#FBFBFB",
    },
    purple: {
      "500": "#6F5ECE",
    },
    orange: {
      "500": "#FF7554",
    },
  },
  fonts: {
    heading: "Sora",
    body: "Sora",
  },
  styles: {
    global: {
      body: {
        fontSize: "0.9rem",
      },
    },
  },
});
