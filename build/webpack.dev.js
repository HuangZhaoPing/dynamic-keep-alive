const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const common = require('./webpack.common')
const merge = require('webpack-merge')

const HOST = 'localhost'
const PORT = 8888
const resolve = dir => {
  return path.resolve(__dirname, dir)
}

module.exports = merge(common, {
  mode: 'development',
  entry: resolve('../example/src/main.js'),
  output: {
    filename: '[name].bundle.js',
    path: resolve('../dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: resolve('../dist'),
    compress: true,
    host: HOST,
    port: PORT,
    inline: true,
    hot: false,
    compress: true,
    quiet: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('../example/index.html'),
      inject: true,
      title: 'example'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [ `Example is running here http://${ HOST }:${ PORT }` ]
      },
      quiet: true
    })
  ]
})
