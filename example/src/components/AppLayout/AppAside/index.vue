<template>
  <aside class="app-aside">
    <div class="aside-main">
      <el-menu
        class="el-menu"
        :collapse="isCollapse"
        :default-active="$route.name"
        @select="handleSelect">
        <template v-for="item in menus">
          <menu-item v-if="!item.children" :key="item.name" :data="item"/>
          <sub-menu v-else :key="item.name" :data="item"/>
        </template>
      </el-menu>
    </div>
    <div class="aside-bottom">
      <div class="collapse-btn" @click="isCollapse = !isCollapse">
        <i :class="isCollapse ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i>
      </div>
    </div>
  </aside>
</template>

<script>
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'
import { asyncRoutes } from '@/router'

export default {
  components: {
    MenuItem,
    SubMenu
  },

  data () {
    return {
      isCollapse: false,
      menus: asyncRoutes
    }
  },

  methods: {
    handleSelect (name) {
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-aside {
  flex-shrink: 0;
  border-right: solid 1px #e6e6e6;
  display: flex;
  flex-direction: column;
}

.aside-main {
  flex: 1;
  overflow-y: auto;
}

.aside-bottom {
  border-top: solid 1px #e6e6e6;
  flex-shrink: 0;
  height: 50px;
}

.collapse-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;

  i {
    font-size: 18px;
  }
}

.el-menu {
  height: 100%;
  border-right: none;

  &:not(.el-menu--collapse) {
    width: 200px;
  }
}
</style>
