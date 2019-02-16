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

组件中要提供name属性，如果没有name属性，则永远不缓存该组件：

    export default {
      name: 'list'
    }

缓存使用了name属性来作为组件的凭证，所以name不能重名，否则在清除缓存时name相同的组件会一并清除。

如果组件中必须要name属性，但又想永远不缓存此组件，可以在安装插件时提供一个exclude的属性：

    Vue.use(DynamicKeepAlive, { exclude: [ 'componentName1', 'componentName2', ... ] })

在dynamic-keep-alive中所有提供了name属性的组件均被缓存，如果需要刷新目标页面，可以在跳转时删除缓存：

    this.$dynamicKeepAlive.removeCache('list')
    this.$router.push({ name: 'list' })

## 关于嵌套路由

dynamic-keep-alive可以使用在嵌套路由中，比如：

App.vue：

    <template>
      <dynamic-keep-alive>
        <router-view/>
      </dynamic-keep-alive>
    </template>

user.vue：

    <template>
      <div>
        ...
        <dynamic-keep-alive>
          <router-view/>
        </dynamic-keep-alive>
      </div>
    </template>

    <script>
      export default {
        name: 'user',
        ...
      }
    </script>

router.js：

    {
      path: '/user',
      component: () => import('../views/user'),
      children: [
        {
          path: 'detail',
          component: () => import('../views/user/detail')
        },
        {
          path: 'contacts',
          component: () => import('../views/user/contacts')
        }
      ]
    }

当删除user组件的缓存时，它的所有后代路由的缓存都会被一并删除：

    // 如果缓存了user、detail、contacts三个组件，那么在删除user时，detail和contacts会一并删除
    this.$dynamicKeepAlive.removeCache('user')