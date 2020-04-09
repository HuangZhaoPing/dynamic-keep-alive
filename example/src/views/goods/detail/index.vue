<template>
  <el-card v-loading="loading">
    <div slot="header" class="clearfix">
      <span>商品详情页</span>
    </div>
    <p>{{ $route.query }}</p>
    <img :src="$route.query.image" style="height: 300px;">
    <p>商品详情页有两种情况：
      <ul>
        <li>情况一：切换标签时不需要刷新</li>
        <li>情况二：重新打开另一商品的详情，需要刷新页面获取最新商品的信息</li>
      </ul>
    </p>
    <p>对于情况二，可以在跳转之前通过 removeCache 方法清除缓存，这样每次跳转详情页都会刷新页面，但进行标签切换时就不会，项目中推荐使用 proxy 对 router 的 push 方法进行二次封装以方便使用，如：this.$router.push({ name: 'goods-detail', refresh: true })
    </p>
  </el-card>
</template>

<script>
export default {
  name: 'goods-detail',

  data () {
    return {
      loading: true
    }
  },

  created () {
    setTimeout(() => { this.loading = false }, 1000)
  }
}
</script>
