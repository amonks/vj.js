export function addChild (root, parent, child) {
  if (root.key === parent) {
    const newChildren = root.children.push(child)
    return root.set('children', newChildren)
  } else {
    if (root.children) {
      const newChildren = root.children
        .map(childState => addChild(childState, parent, child))
      return root.set('children', newChildren)
    } else {
      return root
    }
  }
}

export function removeNode (root, id) {
  if (root.key === id) {
    return undefined
  } else {
    if (root.children) {
      const newChildren = root.children
        .map(child => removeNode(child, id))
        .filter(child => child !== undefined)
      return root.set('children', newChildren)
    } else {
      return root
    }
  }
}
