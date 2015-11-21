import React, { Component, PropTypes } from 'react'

class Oscillator extends Component {
  constructor (props, context) {
    super(props, context)
  }

  handleChange () {
    this.props.setOutlet(this.props.numberOutlet, Math.sin(this.props.time / 100.0))
  }

  deleteNode () {
    this.props.destroyThis(this.props.id)
  }

  render () {
    setTimeout(this.handleChange.bind(this), 10)
    return (
      <div className='oscillator panel'>
        <h3>{'Oscillator'}</h3>
        <button onClick={this.deleteNode.bind(this)}>{'Delete Oscillator'}</button>
        <span>{this.props.number}</span>
      </div>
    )
  }
}

Oscillator.propTypes = {
  id: PropTypes.string.isRequired,
  numberOutlet: PropTypes.string.isRequired,
  setOutlet: PropTypes.func.isRequired,
  destroyThis: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
  number: PropTypes.number
}

export default Oscillator
