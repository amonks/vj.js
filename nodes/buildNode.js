import nodes from '../nodes/nodes'

const nodeFromJS = function (js) {
  console.log('\njs', js)

  const type = js.type
  const key = js.key
  const inlets = buildInlets(js.inlets)
  const outlets = buildOutlets(js.outlets)
  const children = buildChildren(js.children)

  return buildNode(type, key, inlets, outlets, children)
}

const buildNode = function (type, key, inlets, outlets, children) {
  return new nodes[type]({key, id: key, inlets, outlets, children})
}

const buildChildren = function (children) {
  let builtChildren = []
  if (children) {
    for (const child of children) {
      children = children.push(nodeFromJS(child))
    }
  }
  return builtChildren
}

const buildInlets = function (children) {
  let builtChildren = []
  if (children) {
    for (const child of children) {
      children = children.push(nodeFromJS(child))
    }
  }
  return builtChildren
}

const buildOutlets = function (children) {
  let builtChildren = []
  if (children) {
    for (const child of children) {
      children = children.push(nodeFromJS(child))
    }
  }
  return builtChildren
}

export default nodeFromJS
