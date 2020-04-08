import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import DynamicKeepAlive from '@root/src'
import '@/assets/styles/common.scss'

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small' })
Vue.use(DynamicKeepAlive)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
