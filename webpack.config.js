const path = require("path");
const HTmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  return {
    mode: env.WEBPACK_SERVE ? "development" : "production",

    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.join(__dirname, "built"),
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
      ],
    },
    plugins: [
      new HTmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  };
};
