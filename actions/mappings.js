import * as types from '../constants/ActionTypes'

export function setMapping (mapping, value) {
  return { type: types.SET_MAPPING, mapping, value }
}
export function createMapping (mapping) {
  return { type: types.CREATE_MAPPING, mapping }
}
export function destroyMapping (mapping) {
  return { type: types.DESTROY_MAPPING, mapping }
}
