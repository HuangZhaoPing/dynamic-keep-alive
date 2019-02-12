<template>
  <div>
    <h1>Home</h1>
    <button @click="refresh">remove page1 cache and go to page1</button> <br/>
    <button @click="goToPage1">go to page1</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    refresh () {
      this.$dynamicKeepAlive.removeCache('Page1')
      this.goToPage1()
    },
    goToPage1 () {
      this.$router.push('/page1')
    }
  }
}
</script>
