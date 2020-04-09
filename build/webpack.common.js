module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css', '.vue']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: /(node_modules|bower_components)/,
        use: 'eslint-loader'
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components|lib)/,
        use: 'babel-loader'
      }
    ]
  }
}
