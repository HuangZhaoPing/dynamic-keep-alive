<template>
  <div>
    <h1>Home</h1>
    <a href="javascript: void 0" @click="goList">go list and add cahce</a>
    <br>
    <a href="javascript: void 0" @click="delListCache">remove list cache and go list</a>
    <br>
    <br>
    <br>
    <br>
    <a href="javascript: void 0" @click="goUser">goUser</a>
    <br>
    <a href="javascript: void 0" @click="removeUserDetailCache">removeUserCache</a>
    <br>
    <a href="javascript: void 0" @click="goUserDetail">goUserDetail</a>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goList () {
      this.$router.push('/list')
    },
    delListCache () {
      this.$dynamicKeepAlive.removeCache('list')
      this.goList()
    },
    goUser () {
      this.$router.push('/user')
    },
    goUserDetail () {
      this.$router.push('/user/detail')
    },
    removeUserDetailCache () {
      this.$dynamicKeepAlive.removeCache('user')
    }
  }
}
</script>
