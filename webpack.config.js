/* eslint-disable */

const path = require("path");

module.exports = () => {
  return {
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
      publicPath: "",
      path: path.join(__dirname, "public"),
      filename: "[name].bundle.[chunkhash].js",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
      alias: {
        Assets: path.resolve(__dirname, "src/assets"),
        Components: path.resolve(__dirname, "src/components"),
        Routes: path.resolve(__dirname, "src/routes"),
        Services: path.resolve(__dirname, "src/services"),
        Styles: path.resolve(__dirname, "src/styles"),
        Views: path.resolve(__dirname, "src/views"),
      },
    },
    module: {
      rules: [
        { loader: "babel-loader", test: /\.js$/, exclude: /node_modules/ },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.json",
          },
        },
      ],
    },
  };
};
