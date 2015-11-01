import { SET_VALUE } from '../constants/ActionTypes'
import Immutable from 'immutable'
import HierarchyNode from '../store/types/HierarchyNode'

const initialState = Immutable.List([
  new HierarchyNode({
    id: '9f4eccd3-b9a4-4cd6-ab61-b351e4b30b55',
    type: 'Panel',
    children: Immutable.List([
      new HierarchyNode({
        id: 'da97a90c-84ec-441b-8e3c-174fdb03ba2b',
        type: 'NumberInput',
        outlets: Immutable.Map({
          '910d32d9-0ee7-4065-874b-679f8fdfcc82': 'Number'
        })
      }),
      new HierarchyNode({
        id: '7cedebc1-dc1d-4cfd-9eab-51b36ea880f4',
        type: 'NumberDisplay',
        inlets: {
          'd46e8dbb-1ce7-486c-8158-5df4724672a0': 'Number'
        }
      })
    ])
  })
])

export default function outlets (state = initialState, action) {
  // switch (action.type) {
  //   case SET_VALUE:
  //     return state
  //   default:
  //     return state
  // }
  return state
}
