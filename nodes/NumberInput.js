import Immutable from 'immutable'
import renderNode from './renderNode'

export default class NumberInputNode extends Immutable.Record({
  key: 'uuid',
  type: 'NumberInput',
  outlets: Immutable.Map({
    '910d32d9-0ee7-4065-874b-679f8fdfcc82': 'number'
  })
}) {
  render (actions, outlets, mappings) {
    return renderNode.bind(this, actions, outlets, mappings)()
  }
}
