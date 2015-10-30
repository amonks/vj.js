import React, { Component, PropTypes } from 'react'

class NumberDisplay extends Component {
  constructor (props, context) {
    super(props, context)
    // this.state = { filter: SHOW_ALL }
  }

  render () {
    const { inputs } = this.props

    return (
      <div>
        {inputs}
      </div>
    )
  }
}

NumberDisplay.propTypes = {
  inputs: PropTypes.number.isRequired
}

export default NumberDisplay
