<template>
  <el-tabs
    class="tabs"
    type="card"
    :value="$route.name"
    closable
    @tab-click="onClick"
    @tab-remove="removeTab">
    <el-tab-pane
      v-for="item in tabs"
      :key="item.name"
      :label="item.meta.title"
      :name="item.name"
    />
  </el-tabs>
</template>

<script>
import { removeCache } from '@root/src'

const TABS_CACHE_KEY = 'TABS_CACHE_KEY'
const tabs = JSON.parse(sessionStorage.getItem(TABS_CACHE_KEY)) || [{ name: 'home', meta: { title: '首页' } }]

export default {
  data () {
    return {
      tabs
    }
  },

  watch: {
    '$route' () {
      this.addTab()
    }
  },

  methods: {
    addTab () {
      const { name, meta, query } = this.$route
      if (this.findIndex(name) === -1) {
        this.tabs.push({ name, meta, query })
        this.updateCache()
      }
    },

    onEdit (name, action) {
      if (action === 'remove') {
        this.removeTab(name)
        this.updateCache()
      }
    },

    removeTab (name) {
      const index = this.findIndex(name)
      if (index !== -1) {
        this.tabs.splice(index, 1)
        removeCache(name)
        if (this.$route.name === name) {
          this.$router.push(this.tabs[index - 1])
        }
      }
    },

    onClick ({ name }) {
      const route = this.tabs.find(item => item.name === name)
      this.$router.push(route)
    },

    findIndex (name) {
      return this.tabs.findIndex(item => item.name === name)
    },

    updateCache () {
      sessionStorage.setItem(TABS_CACHE_KEY, JSON.stringify(this.tabs))
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  /deep/ .el-tabs__header {
    margin: 0;
    margin-top: 10px;

    .el-tabs__nav-wrap {
      padding: 0 40px;

      .el-tabs__nav-scroll {
        .el-tabs__item {
          height: 35px;
          line-height: 35px;
          min-width: 160px;
          border-radius: 0;

          .el-icon-close {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }

      .el-tabs__nav-next,
      .el-tabs__nav-prev {
        line-height: 39px;
        padding: 0 10px;
      }

      .el-tabs__nav-prev {
        left: 5px;
      }

      .el-tabs__nav-next {
        right: 5px;
      }
    }
  }
}
</style>
