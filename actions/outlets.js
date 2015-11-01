import * as types from '../constants/ActionTypes'

export function setOutlet (outlet, value) {
  return { type: types.SET_OUTLET, outlet, value }
}
