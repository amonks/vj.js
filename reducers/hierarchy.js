import { SET_VALUE } from '../constants/ActionTypes'
import Immutable from 'immutable'

const initialState = Immutable.Map()

export default function outlets (state = initialState, action) {
  switch (action.type) {
    case SET_VALUE:
      return state
    default:
      return state
  }
}
