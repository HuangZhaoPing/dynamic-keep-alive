import {
  DynamicKeepAlive,
  cache,
  initOptions,
  clear,
  remove,
  getInstance
} from './dynamic-keep-alive'

export default {
  install (Vue, options) {
    initOptions(options)
    Vue.component(DynamicKeepAlive.name, DynamicKeepAlive)
  }
}

export {
  cache,
  clear,
  remove,
  getInstance
}
