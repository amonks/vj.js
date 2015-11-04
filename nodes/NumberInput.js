import Immutable from 'immutable'
import renderNode from './renderNode'

export default class NumberInputNode extends Immutable.Record({
  key: 'uuid',
  type: 'NumberInput',
  outlets: Immutable.Map({
    'number': 'uuid'
  })
}) {
  render (actions, outlets, mappings, time) {
    return renderNode.bind(this, actions, outlets, mappings, time)()
  }
}
