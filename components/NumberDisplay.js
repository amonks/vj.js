import React, { PropTypes, Component } from 'react'

class NumberDisplay extends Component {
  constructor (props, context) {
    super(props, context)
  }

  deleteNode () {
    this.props.destroyThis(this.props.id)
  }

  render () {
    const { number } = this.props

    return (
      <div className='number-display panel'>
        <h3>{'Number Display'}</h3>
        <button onClick={this.deleteNode.bind(this)}>{'Delete Number Display'}</button>
        {number === undefined ? 'inlet not set' : number}
      </div>
    )
  }
}

NumberDisplay.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.number,
  destroyThis: React.PropTypes.func.isRequired
}

export default NumberDisplay
