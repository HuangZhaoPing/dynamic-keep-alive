<template>
  <el-card v-loading="loading">
    <div slot="header" class="clearfix">
      <span>商品详情页</span>
    </div>
    <p>{{ $route.query }}</p>
    <p>商品详情页有两种情况：
      <ul>
        <li>情况一：在切换标签时需要带缓存</li>
        <li>情况二：重新打开另一个商品详情时，需要刷新页面</li>
      </ul>
    </p>
    <p>
      对于情况二，可以在跳转之前通过removeCache方法删除缓存后再进行跳转，
      这样每次打开详情页都会刷新页面，但进行标签切换时就不会刷新，项目中推荐使用proxy
      对router的push方法进行二次封装以方便使用，如：this.$router.push({ name: 'goods-detail', refresh: true })
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
    setTimeout(() => { this.loading = false }, 2000)
  }
}
</script>
