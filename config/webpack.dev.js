const { merge } = require('webpack-merge')
const ESLintPlugin = require('eslint-webpack-plugin')
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'source-map',
  stats: 'minimal',
  devServer: {
    open: true,
    port: 9020,
    compress: true,
    historyApiFallback: true,
    hot: true,
    liveReload: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      exclude: ['/node_modules/', '/config/'],
    }),
  ],
})
