import { CHANGE_VALUE } from '../constants/ActionTypes'

const initialState = 1

export default function inputs (state = initialState, action) {
  switch (action.type) {
    case CHANGE_VALUE:
      return action.value
    default:
      return initialState
  }
}
