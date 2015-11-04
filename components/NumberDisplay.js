import React, { PropTypes, Component } from 'react'
import SetMappings from './SetMappings'

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
        <SetMappings
          outlets={this.props.outlets}
          setMapping={this.props.setMapping}
          type='NumberDisplay'
          inlets={this.props.inlets}
        />
        <button onClick={this.deleteNode.bind(this)}>{'Delete Number Display'}</button>
        {number === undefined ? 'inlet not set' : number}
      </div>
    )
  }
}

NumberDisplay.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.number,
  destroyThis: React.PropTypes.func.isRequired,
  setMapping: React.PropTypes.func.isRequired,
  outlets: React.PropTypes.object.isRequired,
  inlets: React.PropTypes.object.isRequired
}

export default NumberDisplay
