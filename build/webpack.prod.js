const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const resolve = dir => {
  return path.resolve(__dirname, dir)
}

module.exports = merge(common, {
  mode: 'production',
  entry: {
    index: resolve('../src/index.js')
  },
  output: {
    filename: '[name].js',
    path: resolve('../dist'),
    library: 'DynamicKeepAlive',
    libraryTarget: 'umd'
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        output: {
          comments: false
        }
      }
    }),
    new CleanWebpackPlugin([ 'dist' ], {
      root: resolve('../')
    })
  ]
})
