const path = require("path");
const HTmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  return {
    mode: env.production ? "production" : "development",
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.join(__dirname, "build"),
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.(css|sass)$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HTmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
    devServer: {
      hot: true,
      open: true,
    },
  };
};
