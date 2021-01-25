const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const merge = require('webpack-merge')
const { resolve } = require('./utils')
const common = require('./webpack.common')

const config = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: resolve('example/src/main.js'),
  output: {
    filename: '[name].js',
    path: resolve('dist')
  },
  devServer: {
    host: 'localhost',
    port: 9010,
    clientLogLevel: 'warning',
    compress: true,
    inline: true,
    hot: true,
    quiet: true,
    progress: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  resolve: {
    alias: {
      '@': resolve('example/src'),
      '@root': resolve(),
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: 'url-loader',
          options: {
            esModule: false,
            limit: 8129
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
        use: {
          loader: 'url-loader',
          options: { limit: 8129 }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        use: {
          loader: 'url-loader',
          options: { limit: 8129 }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Example',
      template: resolve('example/index.html')
    }),
    new VueLoaderPlugin(),
    new StyleLintPlugin({
      files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}']
    })
  ]
})

module.exports = () => {
  const { https, host, port } = config.devServer
  const protocol = https ? 'https:' : 'http:'
  config.plugins.push(
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Example is running here ${protocol}//${host}:${port}`]
      }
    })
  )
  return config
}
