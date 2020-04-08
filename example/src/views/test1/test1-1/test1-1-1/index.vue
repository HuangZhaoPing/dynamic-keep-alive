<template>
  <div>
    <el-alert
      title="测试菜单1-1-1"
      type="success">
    </el-alert>
    <el-table
      :data="tableData"
      border
      v-loading="loading">
      <el-table-column
        prop="name"
        label="名称"
        align="center"
        min-width="100"/>

      <el-table-column
        prop="brand"
        label="品牌"
        align="center"
        min-width="100"/>

      <el-table-column
        prop="price"
        label="价格"
        align="center"
        min-width="100"/>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'test1-1-1',

  data () {
    return {
      tableData: [],
      loading: true
    }
  },

  created () {
    this.fetchTableData()
  },

  methods: {
    fetchTableData () {
      setTimeout(() => {
        this.loading = false
        this.tableData = [
          { name: 'iPhone 11', brand: '苹果（apple）', price: '￥5999' },
          { name: 'iPhone 11', brand: '苹果（apple）', price: '￥5999' },
          { name: 'iPhone 11', brand: '苹果（apple）', price: '￥5999' },
          { name: 'iPhone 11', brand: '苹果（apple）', price: '￥5999' }
        ]
      }, 2000)
    }
  }
}
</script>
