const path = require("path");
module.exports = {
  webpack: {
    alias: {
      Assets: path.resolve(__dirname, "./src/assets"),
      Components: path.resolve(__dirname, "./src/components"),
      Configs: path.resolve(__dirname, "./src/configs"),
      Routes: path.resolve(__dirname, "./src/routes"),
      Services: path.resolve(__dirname, "./src/services"),
      Styles: path.resolve(__dirname, "./src/styles"),
      Views: path.resolve(__dirname, "./src/views"),
    },
  },
};
