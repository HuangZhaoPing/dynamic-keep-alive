<template>
  <el-table
    :data="tableData"
    border
    height="100%"
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

    <el-table-column
      label="操作"
      width="100"
      align="center"
      fixed="right">
      <template slot-scope="{ row }">
        <el-button type="text" @click="showDetail(row)">详情</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { removeCache } from '@root/src'

export default {
  name: 'goods-sale',

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
    showDetail (row) {
      const name = 'goods-detail'
      removeCache(name)
      this.$router.push({
        name,
        query: row
      })
    },

    fetchTableData () {
      setTimeout(() => {
        this.loading = false
        this.tableData = [
          { name: 'iPhone 11', brand: '苹果（apple）', price: '￥5999' },
          { name: 'HUAWIE P30', brand: '华为', price: '￥6999' },
          { name: 'xiaomi 10', brand: '小米', price: '￥7999' },
          { name: 'meizu 16x', brand: '魅族', price: '￥8999' }
        ]
      }, 2000)
    }
  }
}
</script>
