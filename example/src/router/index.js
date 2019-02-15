import Vue from 'Vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('../views/home')
    },
    {
      path: '/page1',
      component: () => import('../views/page1'),
      children: [
        {
          path: 'page1-1',
          component: () => import('../views/page1-1')
        }
      ]
    }
  ]
})
