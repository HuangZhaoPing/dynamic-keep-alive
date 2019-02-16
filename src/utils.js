export function isDef(v) {
  return v !== undefined && v !== null
}

export function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory
}

export function toRawType (value) {
  return Object.prototype.toString.call(value).slice(8, -1)
}
