import React, { Component } from 'react'
import AddChildSelector from './AddChildSelector'

class Panel extends Component {
  constructor (props, context) {
    super(props, context)
  }

  addNode () {
    this.props.createChild('NumberDisplay', this.props.id)
  }

  deleteNode () {
    this.props.destroyThis(this.props.id)
  }

  render () {
    return (
      <div className='number-display well'>
        <h3>{'Panel'}</h3>
        <AddChildSelector createChild={this.props.createChild} id={this.props.id} />
        <button onClick={this.deleteNode.bind(this)}>{'Delete Panel'}</button>
        {this.props.children}
      </div>
    )
  }
}

Panel.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
  id: React.PropTypes.string.isRequired,
  createChild: React.PropTypes.func.isRequired,
  destroyThis: React.PropTypes.func.isRequired
}

export default Panel
