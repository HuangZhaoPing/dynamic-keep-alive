# dynamic-keep-alive

## 安装

    npm i dynamic-keep-alive --save

## 使用

main.js：

    import DynamicKeepAlive from 'dynamic-keep-alive'

    Vue.use(DynamicKeepAlive)

路由：

    <dynamic-keep-alive>
      <router-view/>
    </dynamic-keep-alive>

组件中要提供name属性：

    export default {
      name: 'Page1'
    }

在dynamic-keep-alive中所有提供了name属性的组件均被缓存，如果需要刷新目标页面，可以在跳转时删除缓存：

    this.$dynamicKeepAlive.removeCache('Page1')
    this.$router.push({ name: 'Page1' })