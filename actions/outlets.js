import * as types from '../constants/ActionTypes'

export function setValue (outlet, value) {
  return { type: types.SET_VALUE, value }
}
