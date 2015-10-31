import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// import * as HierarchyActions from '../actions/hierarchy'
import * as OutletActions from '../actions/outlets'
// import * as MappingActions from '../actions/mappings'

import NumberDisplay from '../components/NumberDisplay'
import NumberInput from '../components/NumberInput'

class App extends Component {
  render () {
    const { actions, hierarchy, outlets, mappings } = this.props
    const out = traverseHierarchy(actions, hierarchy, outlets, mappings)
    return out
  }
}

App.propTypes = {
  // TODO: typecheck members
  actions: PropTypes.object.isRequired,
  hierarchy: ImmutablePropTypes.map.isRequired,
  outlets: ImmutablePropTypes.map.isRequired,
  mappings: ImmutablePropTypes.list.isRequired
}

function traverseHierarchy (actions, hierarchy, outlets, mappings) {
  // TODO: parse and render the hierarchy, return that
  return (
    <div>
      <NumberDisplay number={5} />
      <NumberInput changeValue={actions.changeValue} number={5} />
    </div>
  )
}

function mapStateToProps (state) {
  return {
    outlets: state.outlets
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(OutletActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
