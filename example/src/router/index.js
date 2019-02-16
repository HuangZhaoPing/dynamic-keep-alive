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
      path: '/list',
      component: () => import('../views/list')
    },
    {
      path: '/detail',
      component: () => import('../views/detail')
    },
    {
      path: '/user',
      component: () => import('../views/user'),
      children: [
        {
          path: 'detail',
          component: () => import('../views/user/detail')
        },
        {
          path: 'contacts',
          component: () => import('../views/user/contacts')
        }
      ]
    }
  ]
})
