import {
  CREATE_HIERARCHY_NODE,
  DESTROY_HIERARCHY_NODE,
  MOVE_HIERARCHY_NODE,
  SET_OUTLET,
  SET_MAPPING
} from '../constants/ActionTypes'

import UUID from 'node-uuid'
import Immutable from 'immutable'

import nodes from '../nodes/nodes'

import {
  addChild,
  removeNode
} from './hierarchyHelpers'

class State extends Immutable.Record({
  'hierarchy': Immutable.Map(),
  'mappings': Immutable.Map(),
  'outlets': Immutable.Map(),
  'time': 0
}) {}

const initialState = new State({
  'hierarchy': new nodes['Panel']({
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
  }),
  'mappings': Immutable.Map({
    'd46e8dbb-1ce7-486c-8158-5df4724672a0': '910d32d9-0ee7-4065-874b-679f8fdfcc82'
  }),
  'outlets': Immutable.Map({
    '910d32d9-0ee7-4065-874b-679f8fdfcc82': 0
  }),
  'time': 0
})

export default function outlets (state = initialState, action) {
  let newHierarchy = state.get('hierarchy')
  let newOutlets = state.get('outlets')
  let newMappings = state.get('mappings')
  let newTime = state.get('time') + 1

  switch (action.type) {
    case CREATE_HIERARCHY_NODE:
      let node = new (nodes[action.node])({
        key: UUID.v4()
      })
      if (node.outlets) {
        node.outlets.forEach((p, type) => {
          let outletUUID = UUID.v4()
          node = node.set('outlets', node.get('outlets').set(type, outletUUID))
          let oldOutlets = state.get('outlets')
          newOutlets = oldOutlets.set(outletUUID, 0)
        })
      }
      newHierarchy = addChild(state.get('hierarchy'), action.parent, node)
      break

    case DESTROY_HIERARCHY_NODE:
      newHierarchy = removeNode(state.get('hierarchy'), action.id)
      if (newHierarchy === undefined) {
        newHierarchy = new nodes['Panel']({
          key: UUID.v4()
        })
      }
      break

    case MOVE_HIERARCHY_NODE:
      break

    case SET_OUTLET:
      newOutlets = state.get('outlets').set(action.outlet, action.value)
      break

    case SET_MAPPING:
      newMappings = state.get('mappings').set(action.mapping, action.value)
      break

    default:
      break
  }
  return state
    .set('outlets', newOutlets)
    .set('mappings', newMappings)
    .set('time', newTime)
    .set('hierarchy', newHierarchy)
}
