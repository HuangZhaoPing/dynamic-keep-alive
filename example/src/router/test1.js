export default {
  name: 'test1',
  path: '/test1',
  component: () => import('@/views/test1'),
  meta: {
    title: '测试菜单1',
    icon: 'el-icon-user-solid'
  },
  children: [
    {
      name: 'test1-1',
      path: 'test1-1',
      component: () => import('@/views/test1/test1-1'),
      meta: {
        title: '测试菜单1-1'
      },
      children: [
        {
          name: 'test1-1-1',
          path: 'test1-1-1',
          component: () => import('@/views/test1/test1-1/test1-1-1'),
          meta: {
            title: '测试菜单1-1-1'
          }
        },
        {
          name: 'test1-1-2',
          path: 'test1-1-2',
          component: () => import('@/views/test1/test1-1/test1-1-2'),
          meta: {
            title: '测试菜单1-1-2'
          }
        }
      ]
    },
    {
      name: 'test1-2',
      path: 'test1-2',
      component: () => import('@/views/test1/test1-2'),
      meta: {
        title: '测试菜单1-2'
      }
    }
  ]
}
