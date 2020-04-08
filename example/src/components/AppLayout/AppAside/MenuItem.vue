<template>
  <el-menu-item v-if="!data.meta.hidden" :index="data.name">
    <i v-if="data.meta.icon" :class="data.meta.icon"></i>
    <span slot="title">{{ data.meta.title }}</span>
  </el-menu-item>
</template>

<script>
export default {
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
