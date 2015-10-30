import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NumberDisplay from '../components/NumberDisplay'
import NumberInput from '../components/NumberInput'

import * as InputActions from '../actions/inputs'

class App extends Component {
  render () {
    const { inputs, actions } = this.props
    return (
      <div>
        <NumberDisplay inputs={inputs} />
        <NumberInput changeValue={actions.changeValue} inputs={inputs} />
      </div>
    )
  }
}

App.propTypes = {
  inputs: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    inputs: state.inputs
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(InputActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
