export default {
  path: '/goods',
  name: 'goods',
  component: () => import('@/views/goods'),
  meta: {
    title: '商品管理',
    icon: 'el-icon-menu'
  },
  children: [
    {
      path: 'all',
      name: 'goods-all',
      component: () => import('@/views/goods/all'),
      meta: {
        title: '全部商品'
      }
    },
    {
      path: 'sale',
      name: 'goods-sale',
      component: () => import('@/views/goods/sale'),
      meta: {
        title: '优惠商品'
      }
    },
    {
      path: 'detail',
      name: 'goods-detail',
      component: () => import('@/views/goods/detail'),
      meta: {
        title: '商品详情',
        hidden: true
      }
    }
  ]
}
