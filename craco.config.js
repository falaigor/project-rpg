const path = require("path");
module.exports = {
  webpack: {
    alias: {
      Assets: path.resolve(__dirname, "./src/assets"),
      Components: path.resolve(__dirname, "./src/components"),
      Configs: path.resolve(__dirname, "./src/configs"),
      Hooks: path.resolve(__dirname, "./src/hooks"),
      Routes: path.resolve(__dirname, "./src/routes"),
      Services: path.resolve(__dirname, "./src/services"),
      Styles: path.resolve(__dirname, "./src/styles"),
      Utils: path.resolve(__dirname, "./src/utils"),
      Views: path.resolve(__dirname, "./src/views"),
    },
  },
};
