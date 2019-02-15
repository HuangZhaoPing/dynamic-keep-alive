<template>
  <div>
    <h1>page1</h1>
    <button @click="$router.push('/home')">back to home</button><br>
    <input type="text" placeholder="input something" v-model="msg">
    <input type="checkbox" v-model="checked">
    <button @click="$router.push('/page1/page1-1')">go page1-1</button>
    <dynamic-keep-alive>
      <router-view/>
    </dynamic-keep-alive>
  </div>
</template>

<script>
export default {
  name: 'Page1',
  data () {
    return {
      msg: '',
      checked: false
    }
  }
}
</script>
