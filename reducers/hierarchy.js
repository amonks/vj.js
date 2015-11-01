import {
  CREATE_HIERARCHY_NODE,
  DESTROY_HIERARCHY_NODE,
  MOVE_HIERARCHY_NODE
} from '../constants/ActionTypes'

import UUID from 'node-uuid'
import Immutable from 'immutable'

import nodes from '../nodes/nodes'
import buildNode from '../nodes/buildNode'

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

function addChild (state, parent, child) {
  console.log('gonna add a child.')
  console.log('state:', state)
  console.log('parent:', parent)
  console.log('child:', child)
  if (state.key === parent) {
    const newState = state.updateIn(['children'], val => val.push(child))
    console.log('new state:', newState)
    return newState
  } else {
    // TODO check the children, try aagin
    return state
  }
}

export default function outlets (state = initialState, action) {
  switch (action.type) {
    case CREATE_HIERARCHY_NODE:
      const node = new (nodes[action.node])({
        key: UUID.v4()
      })
      const newState = addChild(state, action.parent, node)
      return newState
    case DESTROY_HIERARCHY_NODE:
      return state
    case MOVE_HIERARCHY_NODE:
      return state
    default:
      return state
  }
  return state
}
