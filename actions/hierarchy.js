import * as types from '../constants/ActionTypes'

export function createHierarchyNode (id, node, parent) {
  return { type: types.CREATE_HIERARCHY_NODE, id, node, parent }
}
export function destroyHierarchyNode (id) {
  return { type: types.DESTROY_HIERARCHY_NODE, id }
}
export function moveHierarchyNode (id, parent) {
  return { type: types.MOVE_HIERARCHY_NODE, id, parent }
}
