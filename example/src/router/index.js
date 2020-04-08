import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home'
import goods from './goods'
import test1 from './test1'

Vue.use(VueRouter)

const constantRoutes = [
  { path: '/', redirect: 'home' }
]

export const asyncRoutes = [
  home,
  goods,
  test1
]

export default new VueRouter({
  routes: asyncRoutes.concat(constantRoutes)
})
