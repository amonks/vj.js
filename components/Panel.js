import React, { PropTypes, Component } from 'react'

class NumberDisplay extends Component {
  constructor (props, context) {
    super(props, context)
  }

  render () {
    const { number } = this.props

    return (
      <div className='number-display'>
        {number}
      </div>
    )
  }
}

NumberDisplay.propTypes = {
  number: PropTypes.number.isRequired
}

export default NumberDisplay
