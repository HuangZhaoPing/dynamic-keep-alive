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

function matches(name) {
  const keys = Object.keys(cache)
  return keys.filter(key => {
    return name === key.substr(key.indexOf('-') + 1)
  })
}

export default {
  name: 'dynamic-keep-alive',

  removeCache(name) {
    const keys = matches(name)
    keys.forEach(key => {
      if (cache[key]) {
        cache[key].componentInstance.$destroy()
        cache[key] = null
      }
    })
  },

  render() {
    const slot = this.$slots.default
    const vnode = getFirstComponentChild(slot)
    const componentOptions = vnode && vnode.componentOptions
    if (componentOptions) {
      const ctor = vnode.componentOptions.Ctor
      const name = ctor.options.name
      const cid = ctor.cid
      const key = `${cid}-${name}`
      if (name !== void 0) {
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
