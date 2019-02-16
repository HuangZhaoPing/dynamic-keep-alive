<template>
  <div>
    <button @click="$router.replace('/home')">back</button>
    <h1>user</h1>
    <div v-if="!loading">
      <strong>name: hzp</strong>
      <br>
      <strong>age: 20</strong>
      <br>
      <strong>phone: 110</strong>

      <ul class="more">
        <li><a href="javascript: void 0" @click="detail">detail</a></li>
        <li><a href="javascript: void 0" @click="contacts">contacts</a></li>
      </ul>
      <dynamic-keep-alive>
        <router-view/>
      </dynamic-keep-alive>
    </div>
    <div v-else>loading...</div>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      loading: true
    }
  },
  created () {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  },
  methods: {
    detail () {
      this.$router.push('/user/detail')
    },
    contacts () {
      this.$router.push('/user/contacts')
    }
  }
}
</script>

<style>
.more {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 10px;
  overflow: hidden;
}
.more li {
  float: left;
}
.more li:not(:first-child) {
  margin-left: 20px;
}
</style>
