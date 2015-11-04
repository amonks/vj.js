import Immutable from 'immutable'
import renderNode from './renderNode'

export default class NumberDisplayNode extends Immutable.Record({
  key: 'uuid',
  type: 'NumberDisplay',
  inlets: Immutable.Map({
    'number': 'uuid'
  })
}) {
  render (actions, outlets, mappings, time) {
    return renderNode.bind(this, actions, outlets, mappings, time)()
  }
}
