<template>
  <table v-if="!loading">
    <thead>
      <tr>
        <th>name</th>
        <th>phone</th>
        <th>age</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>jack</td>
        <td>112</td>
        <td>21</td>
      </tr>
      <tr>
        <td>rose</td>
        <td>113</td>
        <td>22</td>
      </tr>
      <tr>
        <td>tom</td>
        <td>114</td>
        <td>23</td>
      </tr>
    </tbody>
  </table>
  <div v-else>loading...</div>
</template>

<script>
export default {
  name: 'contacts',
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
