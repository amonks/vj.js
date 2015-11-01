import React, { Component } from 'react'

class Panel extends Component {
  constructor (props, context) {
    super(props, context)
  }

  render () {
    return (
      <div className='number-display panel'>
        {this.props.children}
      </div>
    )
  }
}

Panel.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.element)
}

export default Panel
