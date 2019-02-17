import { isDef, isAsyncPlaceholder, toRawType } from '../utils'

const cache = {}
let options

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

function getComponentName(vnode) {
  if (vnode && vnode.componentOptions) {
    return vnode.componentOptions.Ctor.options.name
  }
}

function getComponentId(vnode) {
  if (vnode && vnode.componentOptions) {
    return vnode.componentOptions.Ctor.cid
  }
}

function matches(name) {
  const keys = Object.keys(cache)
  return keys.filter(k => {
    return name === k.substr(k.indexOf('-') + 1)
  })
}

function handleRemove(key) {
  const cached = cache[key]
  if (cached) {
    const instance = cached.componentInstance
    instance.$destroy()
    cache[key] = null
  }
}

function removeChildrenCache(componentInstance) {
  const children = componentInstance.$children
  if (Array.isArray(children) && children.length > 0) {
    for (let i = children.length - 1; i >= 0; i--) {
      const c = children[i]
      const vnode = c.$vnode
      const id = getComponentId(vnode)
      const name = getComponentName(vnode)
      if (id && name) {
        handleRemove(`${id}-${name}`)
      }
    }
  }
}

function singleRemove(name) {
  if (cache[name]) {
    handleRemove(name)
  } else {
    const keys = matches(name)
    keys.forEach(k => {
      handleRemove(k)
    })
  }
}

function multipleRemove(names) {
  names.forEach(name => {
    singleRemove(String(name))
  })
}

export function removeCache(parameter) {
  const rawType = toRawType(parameter)
  const includeType = [ 'String', 'Array' ]
  if (!includeType.includes(rawType)) {
    throw new Error('The parameter type must be String or Array!')
  }
  if (rawType === 'String') {
    singleRemove(parameter)
  } else {
    multipleRemove(parameter)
  }
}

export function initOptions(o = {}) {
  options = o
}

export const DynamicKeepAlive = {
  name: 'dynamic-keep-alive',
  render() {
    const slot = this.$slots.default
    const vnode = getFirstComponentChild(slot)
    const componentOptions = vnode && vnode.componentOptions
    if (componentOptions) {
      const id = getComponentId(vnode)
      const name = getComponentName(vnode)
      const key = `${id}-${name}`
      if (name !== void 0 && (!options.exclude || !options.exclude.includes(name))) {
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance
        } else {
          cache[key] = vnode
        }
        vnode.data.keepAlive = true
      }
    }
    return vnode || (slot && slot[0])
  },
  beforeDestroy() {
    removeChildrenCache(this)
  }
}
