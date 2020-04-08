<template>
  <el-submenu :index="data.name">
    <template slot="title">
      <i v-if="data.meta.icon" :class="data.meta.icon"></i>
      <span>{{ data.meta.title }}</span>
    </template>
    <template v-for="item in data.children">
      <menu-item v-if="!item.children" :key="item.name" :data="item"/>
      <sub-menu v-else :key="item.name" :data="item"/>
    </template>
  </el-submenu>
</template>

<script>
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'

export default {
  name: 'SubMenu',

  components: {
    MenuItem,
    SubMenu
  },

  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
