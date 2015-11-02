import React, { Component } from 'react'
import nodes from '../nodes/nodes'

class AddChildSelector extends Component {
  constructor (props, context) {
    super(props, context)
  }

  addNode (event) {
    this.props.createChild(event.target.value, this.props.id)
  }

  render () {
    let options = []
    for (const node in nodes) {
      console.log('node:' + node)
      options.push(
        <option value={node} key={node}>{node}</option>
      )
    }
    return (
      <select defaultValue='' onChange={this.addNode.bind(this)}>
        <option value=''>Add Child</option>
        {options}
      </select>
    )
  }
}

AddChildSelector.propTypes = {
  id: React.PropTypes.string.isRequired,
  createChild: React.PropTypes.func.isRequired
}

export default AddChildSelector
