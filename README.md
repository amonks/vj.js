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
  hierarchy: [
    {
      id: 'uuid a',
      type: 'Panel',
      // inlets: {},
      // outlets: {},
      children: [
        {
          id: 'uuid b',
          type: 'NumberInput',
          // inlets: {},
          outlets: {
            'uuid c': 'Number'
          }
        },
        {
          id: 'uuid d',
          type: 'NumberDisplay',
          inlets: {
            'uuid e': 'Number'
          },
          // outlets: {}
        },
      ]
    }
  ],

  outlets: {
    'uuid c': 0,
  },

  mappings: {
    'uuid e': 'uuid c'
  }
}
```
