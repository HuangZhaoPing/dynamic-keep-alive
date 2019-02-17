import { initOptions, removeCache, DynamicKeepAlive } from './components/dynamic-keep-alive'

export default {
  install(Vue, options) {
    initOptions(options)
    Vue.component('dynamic-keep-alive', DynamicKeepAlive)
    Vue.prototype.$dynamicKeepAlive = {
      removeCache
    }
  }
}