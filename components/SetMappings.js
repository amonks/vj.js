import React, { Component } from 'react'

class SetMappings extends Component {
  constructor (props, context) {
    super(props, context)
  }

  setMapping (event) {
    let ary = event.target.value.split('::')
    this.props.setMapping(ary[0], ary[1])
  }

  render () {
    const inlets = []
    for (const key in this.props.inlets) {
      const outlets = []
      for (const outletKey in this.props.outlets) {
        outlets.push(
          <option value={this.props.inlets[key] + '::' + outletKey} key={key + ' ' + outletKey}>{outletKey}</option>
        )
      }
      inlets.push(
        <div>
        <select defaultValue='' key={key} onChange={this.setMapping.bind(this)}>
          <option value=''>Set outlet</option>
          {outlets}
        </select>
        </div>
      )
    }
    return (
      <div>
        {inlets}
      </div>
    )
  }
}

SetMappings.propTypes = {
  setMapping: React.PropTypes.func.isRequired,
  outlets: React.PropTypes.object.isRequired,
  inlets: React.PropTypes.object.isRequired,
  type: React.PropTypes.string.isRequired
}

export default SetMappings
