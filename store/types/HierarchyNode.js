import Immutable from 'immutable'

class HierarchyNode extends Immutable.Record({
  id: 'uuid',
  type: 'Node',
  inlets: new Immutable.Map(),
  outlets: new Immutable.Map(),
  children: new Immutable.List()
}) {
  // class methods, eg:
  // getInlets () {
  //   return this.inlets
  // }
}

export default HierarchyNode
