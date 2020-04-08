import { isDef, isAsyncPlaceholder, toRawType } from './utils'

const cache = {}
const cacheKeys = []
let options

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      const c = children[i]
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

function matches (name) {
  const keys = Object.keys(cache)
  return keys.filter(k => {
    return name === k.substr(k.indexOf('-') + 1)
  })
}

function handleRemove (key) {
  const cached = cache[key]
  if (cached) {
    const instance = cached.componentInstance
    if (instance) {
      instance.$destroy()
      cache[key] = null
      delete cache[key]
    }
  }
}

function singleRemove (name) {
  if (cache[name]) {
    handleRemove(name)
  } else {
    const keys = matches(name)
    keys.forEach(k => {
      handleRemove(k)
    })
  }
}

function multipleRemove (names) {
  names.forEach(name => {
    singleRemove(String(name))
  })
}

function handleMaxCache (key) {
  cacheKeys.push(key)
  if (cacheKeys.length > options.max) {
    const k = cacheKeys.shift()
    singleRemove(k)
  }
}

export function removeCache (parameter) {
  const rawType = toRawType(parameter)
  const includeType = ['String', 'Array']
  if (!includeType.includes(rawType)) {
    throw new Error('The parameter type must be String or Array!')
  }
  if (rawType === 'String') {
    singleRemove(parameter)
  } else {
    multipleRemove(parameter)
  }
}

export function initOptions (o = {}) {
  o.max = o.max || 20
  options = o
}

export const DynamicKeepAlive = {
  name: 'DynamicKeepAlive',
  render () {
    const slot = this.$slots.default
    const vnode = getFirstComponentChild(slot)
    const componentOptions = vnode && vnode.componentOptions
    if (componentOptions) {
      const id = componentOptions.Ctor.cid
      const { name, noCache } = componentOptions.Ctor.options
      const key = `${id}-${name}`
      if (name !== undefined && !noCache && (!options.exclude || !options.exclude.includes(name)) && !options.noCache) {
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance
        } else {
          cache[key] = vnode
          handleMaxCache(key)
        }
        vnode.data.keepAlive = true
      }
    }
    return vnode || (slot && slot[0])
  }
}
