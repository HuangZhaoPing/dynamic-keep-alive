<template>
  <main class="app-main">
    <dynamic-keep-alive>
      <router-view/>
    </dynamic-keep-alive>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.app-main {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 10px;
}
</style>
