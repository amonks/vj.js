import React, { Component, PropTypes } from 'react'

class TimeCounter extends Component {
  constructor (props, context) {
    super(props, context)
  }

  handleChange () {
    this.props.setOutlet(this.props.numberOutlet, this.props.time)
  }

  deleteNode () {
    this.props.destroyThis(this.props.id)
  }

  render () {
    setTimeout(this.handleChange.bind(this), 10)
    return (
      <div className='oscillator panel'>
        <h3>{'TimeCounter'}</h3>
        <button onClick={this.deleteNode.bind(this)}>{'Delete TimeCounter'}</button>
        <span>{this.props.number}</span>
      </div>
    )
  }
}

TimeCounter.propTypes = {
  id: PropTypes.string.isRequired,
  numberOutlet: PropTypes.string.isRequired,
  setOutlet: PropTypes.func.isRequired,
  destroyThis: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
  number: PropTypes.number
}

export default TimeCounter
