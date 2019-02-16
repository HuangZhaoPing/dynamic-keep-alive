<template>
  <div>
    <h1>detail</h1>
    <div v-if="!loading">
      <strong>title: {{ query.title }}</strong>
      <br>
      <strong>id: {{ query.id }}</strong>
    </div>
    <div v-else>loading...</div>
  </div>
</template>

<script>
export default {
  computed: {
    query () {
      return this.$route.query
    }
  },
  data () {
    return {
      loading: true
    }
  },
  created () {
    setTimeout(() => this.loading = false, 2000)
  }
}
</script>
