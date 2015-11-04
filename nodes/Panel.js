import Immutable from 'immutable'
import renderNode from './renderNode'

export default class Panel extends Immutable.Record({
  key: 'uuid',
  type: 'Panel',
  children: Immutable.List([])
}) {
  render (actions, outlets, mappings, time) {
    return renderNode.bind(this, actions, outlets, mappings, time)()
  }
}
