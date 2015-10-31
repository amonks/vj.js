import { SET_VALUE } from '../constants/ActionTypes'
import Immutable from 'immutable'

const initialState = Immutable.List()

export default function mappings (state = initialState, action) {
  switch (action.type) {
    case SET_VALUE:
      return state
    default:
      return state
  }
}
