import React, { Component, PropTypes } from 'react'

class NumberInput extends Component {
  constructor (props, context) {
    super(props, context)
  }

  handleChange (event) {
    this.props.setOutlet(this.props.numberOutlet, Number(event.target.value))
  }

  deleteNode () {
    this.props.destroyThis(this.props.id)
  }

  render () {
    return (
      <div className='number-input panel'>
        <h3>{'Number Input'}</h3>
        <button onClick={this.deleteNode.bind(this)}>{'Delete Number Input'}</button>
        <input type='number' value={this.props.number} onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}

NumberInput.propTypes = {
  id: PropTypes.string.isRequired,
  numberOutlet: PropTypes.string.isRequired,
  setOutlet: PropTypes.func.isRequired,
  destroyThis: React.PropTypes.func.isRequired,
  number: PropTypes.number
}

export default NumberInput
