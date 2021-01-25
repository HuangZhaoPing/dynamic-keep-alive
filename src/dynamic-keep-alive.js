const cache = new Map()
let options = null

function initOptions (o = {}) {
  options = {
    max: o.max || 20,
    exclude: o.exclude || []
  }
}

function isDef (v) {
  return v !== undefined && v !== null
}

function toRawType (value) {
  return Object.prototype.toString.call(value).slice(8, -1)
}

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i]
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

function removeCacheEntry () {
  const name = [...cache.keys()][0]
  handleRemove(name)
}

function remove (val) {
  const rawType = toRawType(val)
  const types = ['String', 'Array']
  if (!types.includes(rawType)) {
    throw new Error('The parameter type must be String or Array!')
  }
  if (rawType === 'String') {
    handleRemove(val)
  } else {
    val.forEach(val => {
      handleRemove(val)
    })
  }
}

function clear () {
  [...cache.keys()].forEach(name => {
    handleRemove(name)
  })
}

function getInstance (name) {
  const cached = cache.get(name)
  return cached ? cached.componentInstance : null
}

function handleRemove (name) {
  const cached = cache.get(name)
  if (cached) {
    cached.componentInstance.$destroy()
    cache.delete(name)
  }
}

const DynamicKeepAlive = {
  name: 'DynamicKeepAlive',
  render () {
    const slot = this.$slots.default
    const vnode = getFirstComponentChild(slot)
    const componentOptions = vnode && vnode.componentOptions
    if (componentOptions) {
      const { name, noCache } = componentOptions.Ctor.options
      if (name && !noCache && (!options.exclude || !options.exclude.includes(name)) && !options.noCache) {
        const cached = cache.get(name)
        if (cached) {
          cache.delete(name)
          vnode.componentInstance = cached.componentInstance
        } else {
          if (options.max && cache.size > options.max) {
            removeCacheEntry()
          }
        }
        cache.set(name, vnode)
        vnode.data.keepAlive = true
      }
    }
    return vnode || (slot && slot[0])
  }
}

export {
  DynamicKeepAlive,
  cache,
  initOptions,
  clear,
  remove,
  getInstance
}
