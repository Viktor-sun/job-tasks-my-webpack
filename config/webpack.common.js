const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const WebpackBar = require('webpackbar')
const Dotenv = require('dotenv-webpack')
const path = require('path')

module.exports = {
  entry: ['@babel/polyfill', path.resolve(__dirname, '../src/index.js')],
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][hash][ext]',
        },
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][hash][ext]',
        },
      },

      {
        test: /\.(js|ts|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/assets/svg/favicon.svg'),
          to: path.resolve(__dirname, '../dist'),
        },
      ],
    }),
    new WebpackBar(),
    new Dotenv(),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.scss', '.css', '.jpg', '.svg'],
    alias: {
      Assets: path.resolve(__dirname, '../src/assets/'),
      Utilities: path.resolve(__dirname, '../src/utilities/'),
    },
  },
}
