<template>
  <el-card class="box-card" v-loading="loading">
    <div slot="header" class="clearfix">
      <span>不缓存组件</span>
    </div>
    <p>不需要缓存时，组件不添加name属性即可</p>
    <p>如果迫不得以需要添加name属性，那么可以再添加一个noCache属性，设为true即可</p>
  </el-card>
</template>

<script>
export default {
  name: 'test1-2',

  noCache: true,

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

<style lang="scss" scoped>
.box-card {
  width: 400px;
}
</style>
