import React, { Component, PropTypes } from 'react'

class NumberInput extends Component {
  constructor (props, context) {
    super(props, context)
  }

  handleChange (event) {
    this.props.setOutlet(this.props.numberOutlet, Number(event.target.value))
  }

  render () {
    return (
      <div className='number-input'>
        <input type='number' value={this.props.number} onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}

NumberInput.propTypes = {
  numberOutlet: PropTypes.string.isRequired,
  setOutlet: PropTypes.func.isRequired,
  number: PropTypes.number
}

export default NumberInput
