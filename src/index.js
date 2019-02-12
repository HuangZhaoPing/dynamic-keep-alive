import DynamicKeepAlive from './components/dynamic-keep-alive'

export default {
  install(Vue) {
    Vue.prototype.$dynamicKeepAlive = DynamicKeepAlive
    Vue.component('dynamic-keep-alive', DynamicKeepAlive)
  }
}