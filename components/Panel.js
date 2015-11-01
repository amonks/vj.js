import React, { Component } from 'react'

class Panel extends Component {
  constructor (props, context) {
    super(props, context)
  }

  handleChange () {
    this.props.createHierarchyNode('NumberDisplay', this.props.id)
  }

  render () {
    return (
      <div className='number-display panel'>
        <button onClick={this.handleChange.bind(this)} />
        {this.props.children}
      </div>
    )
  }
}

Panel.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
  id: React.PropTypes.string.isRequired,
  createHierarchyNode: React.PropTypes.func.isRequired
}

export default Panel
