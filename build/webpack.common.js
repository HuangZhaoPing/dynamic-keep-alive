const path = require('path')

const resolve = dir => {
  return path.resolve(__dirname, dir)
}

module.exports = {
  resolve: {
    extensions: [ '.js', '.vue' ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          resolve('../src'),
          resolve('../example')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ],
            plugins: [
              'dynamic-import-webpack'
            ]
          }
        }
      }
    ]
  }
}