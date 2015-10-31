import Immutable from 'immutable'

class HierarchyNode extends Immutable.Record({
  id: 'uuid',
  type: 'Node',
  inlets: new Immutable.Map(),
  outlets: new Immutable.Map()
}) {
  // class methods, eg:
  // getInlets () {
  //   return this.inlets
  // }
}

export default HierarchyNode
