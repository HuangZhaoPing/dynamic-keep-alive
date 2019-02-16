<template>
  <div>
    <h1>list</h1>
    <ul v-if="list.length > 0">
      <li v-for="item in list" :key="item.id">
        <a
          href="javascript: void 0"
          @click="$router.push({ path: '/detail', query: { title: item.title, id: item.id } })">
        {{ item.title }}
        </a>
      </li>
    </ul>
    <div v-else>loading...</div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      list: []
    }
  },
  created () {
    setTimeout(() => {
      this.initList()
    }, 2000)
  },
  methods: {
    initList () {
      for (let i = 1; i < 20; i++) {
        this.list.push({ title: `goods${i}`, id: i })
      }
    }
  }
}
</script>
