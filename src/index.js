import { inject, removeCache } from './components/dynamic-keep-alive'

export default {
  install(Vue, options) {
    const instance = inject(options)
    Vue.component('dynamic-keep-alive', instance)
    Vue.prototype.$dynamicKeepAlive = {
      removeCache
    }
  }
}