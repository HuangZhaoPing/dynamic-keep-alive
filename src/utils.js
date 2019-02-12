export function isDef(v) {
  return v !== undefined && v !== null
}

export function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory
}