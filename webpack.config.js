const path = require("path");
const HTmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

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
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.sass$/i,
          use: ["sass-loader"],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.svg$/i,
          use: ["@svgr/webpack"],
        },
        {
          test: /\.js$/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
      ],
    },
    plugins: [
      new HTmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new MiniCssExtractPlugin(),
    ],
    optimization: {
      minimizer: [
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.squooshMinify,
            options: {
              encodeOptions: {
                mozjpeg: {
                  quality: 90,
                },
              },
            },
          },
        }),
      ],
    },
    devServer: {
      hot: true,
      open: true,
    },
  };
};
