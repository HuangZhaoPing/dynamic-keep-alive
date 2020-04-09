# DynamicKeepAlive

基于Vue的缓存组件，常用于做后台管理系统的标签页缓存。

![演示](https://github.com/HuangZhaoPing/document-assets/blob/master/images/dynamic-keep-alive/test.gif?raw=true)

解决问题：

* 切换标签页时，不需要刷新页面
* 关闭标签页后，重新打开，需要刷新页面

相对于 keep-alive + vuex 实现有以下优势：

* 不需要依赖vuex
* 可用在嵌套路由中（在通过路由生成菜单的场景下非常实用）

## 安装

    npm i dynamic-keep-alive -S

## 使用

main.js：

    import Vue from 'vue
    import DynamicKeepAlive from 'dynamic-keep-alive'

    Vue.use(DynamicKeepAlive)

router-view中：

    <dynamic-keep-alive>
      <router-view/>
    </dynamic-keep-alive>

** 注意：如果使用的是嵌套路由，则所有router-view都需要包裹\<dynamic-keep-alive\>**

页面组件中：

    <template>
      <div>商品列表页面</div>
    </template>

    <script>
      export default {
        name: 'goods-list', // 添加name，如果不需要缓存，则不添加
        noCache: true // 如果不需要缓存，可以将noCache设置为true，此选项是为了必须加name但又不需要缓存的页面准备
      }
    </script>

至此所有加了name属性的页面均被缓存

## 清除缓存

可以在合适的时机清除缓存，如：

* 关闭标签页
* 跳转详情页前

通过调用以下方法清除缓存：

    import { removeCache } from 'dynamic-keep-alive'

    // 清除单个
    removeCache('goods-list')

    // 清除多个
    removeCache(['goods-list', 'goods-detail'])

## API

### options

Vue.use(DynamicKeepAlive, options)

| 属性 | 类型 | 说明 |
| ---- | ---- | ---- |
| max | Number | 设置最大缓存个数，默认20，当达到最大缓存后，会清除最先缓存的组件。|
| exclude | Array | 添加到此选项的页面均不缓存 |
| noCache | Boolean | 为true时，所以页面均不缓存 |

### methods

import { removeCache } from 'dynamic-keep-alive'

| 属性 | 参数类型 | 说明 |
| ---- | ---- | ---- |
| removeCache | String \| Number | 清除指定name组件的缓存 |

## 项目地址

<https://github.com/HuangZhaoPing/dynamic-keep-alive>
