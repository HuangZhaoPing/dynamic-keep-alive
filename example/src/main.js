import Vue from 'vue'
import App from './App'
import router from './router'
import DynamicKeepAlive from '../../src'
// import DynamicKeepAlive from '../../dist'

Vue.use(DynamicKeepAlive, { exclude: [ 'list' ] })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})