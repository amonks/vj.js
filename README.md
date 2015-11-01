## Actions

* hierarchy
  * ADD_CHILD parent, child
  * DELETE_NODE node
  * MOVE_NODE node, new_parent
* mappings
  * ADD_MAPPING input, output
  * REMOVE_MAPPING mapping

## Path

1. check hierarchy
2. render things
  1. when you get to a thing with inputs, check the mappings store indexed by that input, for the

## Initial State

```js
state = {
  hierarchy: new HierarchyNode({
    key: '9f4eccd3-b9a4-4cd6-ab61-b351e4b30b55',
    type: 'Panel',
    children: Immutable.List([
      new HierarchyNode({
        key: 'da97a90c-84ec-441b-8e3c-174fdb03ba2b',
        type: 'NumberInput',
        outlets: Immutable.Map({
          '910d32d9-0ee7-4065-874b-679f8fdfcc82': 'number'
        })
      }),
      new HierarchyNode({
        key: '7cedebc1-dc1d-4cfd-9eab-51b36ea880f4',
        type: 'NumberDisplay',
        inlets: Immutable.Map({
          'd46e8dbb-1ce7-486c-8158-5df4724672a0': 'number'
        })
      })
    ])
  })

  outlets: Immutable.Map({
    '910d32d9-0ee7-4065-874b-679f8fdfcc82': 0
  })

  mappings: Immutable.Map({
    'd46e8dbb-1ce7-486c-8158-5df4724672a0':
      '910d32d9-0ee7-4065-874b-679f8fdfcc82'
  })
}
```
