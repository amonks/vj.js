import {
  SET_OUTLET,
  CREATE_OUTLET,
  DESTROY_OUTLET
} from '../constants/ActionTypes'

import Immutable from 'immutable'

const initialState = Immutable.Map({
  '910d32d9-0ee7-4065-874b-679f8fdfcc82': 0
})

export default function outlets (state = initialState, action) {
  switch (action.type) {
    case SET_OUTLET:
      return state.set(action.outlet, action.value)
    case CREATE_OUTLET:
      return state
    case DESTROY_OUTLET:
      return state
    default:
      return state
  }
}
