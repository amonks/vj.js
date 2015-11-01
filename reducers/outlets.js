import { SET_OUTLET } from '../constants/ActionTypes'
import Immutable from 'immutable'

const initialState = Immutable.Map({
  '910d32d9-0ee7-4065-874b-679f8fdfcc82': 0
})

export default function outlets (state = initialState, action) {
  switch (action.type) {
    case SET_OUTLET:
    debugger
      return state.outlets.set(action.outlet, action.value)
    default:
      return state
  }
}
