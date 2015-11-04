import React from 'react'
import components from '../components/components'

export default function (actions, outlets, mappings, time) {
  let props = {key: this.key, id: this.key}
  props['time'] = time

  if (this.inlets && this.inlets.size > 0) {
    this.inlets.map((v, k) => props[k] = outlets.get(mappings.get(v)))
  }
  props['destroyThis'] = actions.destroyHierarchyNode

  if (this.outlets && this.outlets.size > 0) {
    this.outlets.map((v, k) => {
      props[k + 'Outlet'] = v
      props[k] = outlets.get(v)
    })
    props['setOutlet'] = actions.setOutlet
  }

  if (this.inlets && this.inlets.size > 0) {
    props['setMapping'] = actions.setMapping
    props['outlets'] = outlets.toJS()
    props['inlets'] = this.inlets.toJS()
  }

  let children = []
  if (this.children) {
    children = this.children
      .map(child => child.render(actions, outlets, mappings, time))
      .toArray()
    props['createChild'] = actions.createHierarchyNode
  }

  const node = React.createElement(components[this.type], props, children)

  return node
}
