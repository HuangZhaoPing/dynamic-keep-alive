import { isDef, isAsyncPlaceholder } from '../utils'

const cache = {}

function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      const c = children[i]
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

export default {
  name: 'dynamic-keep-alive',

  removeCache(name) {
    cache[name] = null
  },

  render() {
    const slot = this.$slots.default
    const vnode = getFirstComponentChild(slot)
    const componentOptions = vnode && vnode.componentOptions
    if (componentOptions) {
      const key = vnode.componentOptions.Ctor.options.name
      if (key !== void 0) {
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance
        } else {
          cache[key] = vnode
        }
        vnode.data.keepAlive = true
      }
    }
    return vnode || (slot && slot[0])
  }
}
