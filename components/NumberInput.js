import React, { Component, PropTypes } from 'react'

class NumberInput extends Component {
  constructor (props, context) {
    super(props, context)
  }

  handleChange (event) {
    this.props.setOutlet(this.props.outlet, Number(event.target.value))
  }

  render () {
    const { number } = this.props

    return (
      <div className='number-input'>
        <input type='number' value={number} onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}

NumberInput.propTypes = {
  number: PropTypes.number.isRequired,
  outlet: PropTypes.string.isRequired,
  setOutlet: PropTypes.func.isRequired
}

export default NumberInput
