export default {
  name: 'test',
  path: '/test',
  component: () => import('@/views/test'),
  meta: {
    title: '测试菜单',
    icon: 'el-icon-user-solid'
  },
  children: [
    {
      name: 'test-1',
      path: 'test-1',
      component: () => import('@/views/test/test-1'),
      meta: {
        title: '测试菜单-1'
      },
      children: [
        {
          name: 'test-1-1',
          path: 'test-1-1',
          component: () => import('@/views/test/test-1/test-1-1'),
          meta: {
            title: '测试菜单-1-1'
          }
        },
        {
          name: 'test-1-2',
          path: 'test-1-2',
          component: () => import('@/views/test/test-1/test-1-2'),
          meta: {
            title: '测试菜单-1-2'
          }
        }
      ]
    },
    {
      name: 'test-2',
      path: 'test-2',
      component: () => import('@/views/test/test-2'),
      meta: {
        title: '永不缓存'
      }
    }
  ]
}
