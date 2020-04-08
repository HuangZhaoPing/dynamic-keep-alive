const merge = require('webpack-merge')
const { resolve } = require('./utils')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  entry: resolve('src/index.js'),
  output: {
    filename: 'dynamic-keep-alive.js',
    path: resolve('dist'),
    library: 'DynamicKeepAlive',
    libraryTarget: 'umd'
  }
})
