import {
  CREATE_MAPPING,
  DESTROY_MAPPING,
  SET_MAPPING
} from '../constants/ActionTypes'
import Immutable from 'immutable'

const initialState = Immutable.Map({
  'd46e8dbb-1ce7-486c-8158-5df4724672a0': '910d32d9-0ee7-4065-874b-679f8fdfcc82'
})

export default function mappings (state = initialState, action) {
  switch (action.type) {
    case CREATE_MAPPING:
      return state
    case DESTROY_MAPPING:
      return state
    case SET_MAPPING:
      return state
    default:
      return state
  }
}
