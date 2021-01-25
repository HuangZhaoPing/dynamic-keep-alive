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
import { remove } from '@root/src/main.js'

export default {
  name: 'goods-all',

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
      remove(name)
      this.$router.push({
        name,
        query: row
      })
    },

    fetchTableData () {
      setTimeout(() => {
        this.loading = false
        this.tableData = [
          { name: 'iPhone 11', brand: '苹果（apple）', price: '￥5999', image: 'http://pro-fd.zol-img.com.cn/t_s400x300c4/g4/M06/06/06/ChMlzF14TlCIcWnlAAD6Gw8y-zkAAXoDwLrMZgAAPoz184.jpg' },
          { name: 'HUAWIE P30', brand: '华为', price: '￥6999', image: 'http://img1.imgtn.bdimg.com/it/u=3661510785,4189688450&fm=26&gp=0.jpg' },
          { name: 'xiaomi 10', brand: '小米', price: '￥7999', image: 'http://img1.imgtn.bdimg.com/it/u=3867710555,2117117988&fm=11&gp=0.jpg' },
          { name: 'meizu 16', brand: '魅族', price: '￥8999', image: 'http://img3.imgtn.bdimg.com/it/u=605485833,3688342626&fm=26&gp=0.jpg' }
        ]
      }, 1000)
    }
  }
}
</script>
