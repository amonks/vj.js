import React from 'react'
import components from '../components/components'

export default function (actions, outlets, mappings) {
  let props = {key: this.key, id: this.key}
  if (this.inlets && this.inlets.size > 0) {
    this.inlets.map((v, k) => props[k] = outlets.get(mappings.get(v)))
  }
  if (this.outlets && this.outlets.size > 0) {
    this.outlets.map((v, k) => {
      props[k + 'Outlet'] = v
      props[k] = outlets.get(v)
    })
    props['setOutlet'] = actions.setOutlet
  }

  let children = []
  if (this.children) {
    children = this.children
      .map(child => child.render(actions, outlets, mappings))
      .toArray()

    props['createHierarchyNode'] = actions.createHierarchyNode
  }
  const node = React.createElement(components[this.type], props, children)

  return node
}
