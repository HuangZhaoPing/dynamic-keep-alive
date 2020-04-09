<template>
  <el-card v-loading="loading">
    <div slot="header" class="clearfix">
      <span>不缓存组件</span>
    </div>
    <p>不需要缓存时，组件不添加 name 属性即可</p>
    <p>如果此组件必须要加name属性，那么可以添加 noCache 属性并设置为true即可</p>
  </el-card>
</template>

<script>
export default {
  name: 'test-2',

  noCache: true,

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
