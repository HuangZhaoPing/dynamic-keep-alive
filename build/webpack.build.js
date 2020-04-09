const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const { resolve } = require('./utils')
const common = require('./webpack.common')
const version = require('../package.json').version

module.exports = merge(common, {
  mode: 'none',
  entry: {
    'dynamic-keep-alive': resolve('src/main.js'),
    'dynamic-keep-alive.min': resolve('src/main.js')
  },
  output: {
    filename: '[name].js',
    path: resolve('lib'),
    library: 'DynamicKeepAlive',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.min.js(\?.*)?$/i
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new SimpleProgressWebpackPlugin(),
    new webpack.BannerPlugin({
      banner: `DynamicKeepAlive.js v${version}`
    })
  ]
})
