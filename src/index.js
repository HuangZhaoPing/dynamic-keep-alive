import { initOptions, removeCache, DynamicKeepAlive } from './dynamic-keep-alive'

export default {
  install (Vue, options) {
    initOptions(options)
    Vue.component(DynamicKeepAlive.name, DynamicKeepAlive)
  }
}

export {
  removeCache
}
