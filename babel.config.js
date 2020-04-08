module.exports = function (api) {
  api.cache(true)
  const presets = ['@babel/preset-env', '@vue/babel-preset-jsx']
  const plugins = ['@babel/plugin-transform-runtime', '@babel/plugin-syntax-dynamic-import']
  return {
    presets,
    plugins
  }
}
