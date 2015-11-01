import {
  CREATE_HIERARCHY_NODE,
  DESTROY_HIERARCHY_NODE,
  MOVE_HIERARCHY_NODE
} from '../constants/ActionTypes'

import UUID from 'node-uuid'
import Immutable from 'immutable'

import nodes from '../nodes/nodes'

// const initialState = new HierarchyNode({
//   id: 'da97a90c-84ec-441b-8e3c-174fdb03ba2b',
//   type: 'NumberInput',
//   outlets: Immutable.Map({
//     '910d32d9-0ee7-4065-874b-679f8fdfcc82': 'number'
//   })
// })

const initialState = new nodes['Panel']({
  key: '9f4eccd3-b9a4-4cd6-ab61-b351e4b30b55',
  children: Immutable.List([
    new nodes['NumberInput']({
      key: 'da97a90c-84ec-441b-8e3c-174fdb03ba2b',
      outlets: Immutable.Map({
        'number': '910d32d9-0ee7-4065-874b-679f8fdfcc82'
      })
    }),
    new nodes['NumberDisplay']({
      key: '7cedebc1-dc1d-4cfd-9eab-51b36ea880f4',
      inlets: Immutable.Map({
        'number': 'd46e8dbb-1ce7-486c-8158-5df4724672a0'
      })
    })
  ])
})

export default function outlets (state = initialState, action) {
  switch (action.type) {
    case CREATE_HIERARCHY_NODE:
      const parent = state.findNodeByKey(action.parent)
      parent.children.push(new (nodes[action.node])({
        key: UUID.v4()
      }))
      return state
    case DESTROY_HIERARCHY_NODE:
      return state
    case MOVE_HIERARCHY_NODE:
      return state
    default:
      return state
  }
  return state
}
