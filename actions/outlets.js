import * as types from '../constants/ActionTypes'

export function setOutlet (outlet, value) {
  return { type: types.SET_OUTLET, outlet, value }
}
export function createOutlet (outlet) {
  return { type: types.CREATE_OUTLET, outlet }
}
export function destroyOutlet (outlet) {
  return { type: types.DESTROY_OUTLET, outlet }
}
