const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", path.resolve(__dirname, "../src/index.js")],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html"),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../src/assets/svg/favicon.svg"),
          to: path.resolve(__dirname, "../dist"),
        },
      ],
    }),
  ],
  resolve: {
    extensions: [".js", ".scss", ".jpg", ".svg"],
    alias: {
      Assets: path.resolve(__dirname, "../src/assets/"),
      Utilities: path.resolve(__dirname, "../src/utilities/"),
    },
  },
};
