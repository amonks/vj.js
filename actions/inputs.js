import * as types from '../constants/ActionTypes'

export function changeValue (value) {
  return { type: types.CHANGE_VALUE, value }
}
