<template>
  <div v-if="!loading">
    <strong>id: 33425751</strong>
    <br>
    <strong>address: 广州天河</strong>
    <br>
    <strong>email: 123@cc.com</strong>
  </div>
  <div v-else>loading...</div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      loading: true
    }
  },
  created () {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  }
}
</script>
