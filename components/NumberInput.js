import React, { Component, PropTypes } from 'react'

class NumberInput extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      inputs: this.props.inputs || 0
    }
  }

  handleChange (event) {
    this.props.changeValue(Number(event.target.value))
  }

  render () {
    const { inputs } = this.props

    return (
      <div>
        <input type='number' value={inputs} onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}

NumberInput.propTypes = {
  inputs: PropTypes.number.isRequired,
  changeValue: PropTypes.func.isRequired
}

export default NumberInput
