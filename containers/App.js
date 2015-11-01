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
  hierarchy: ImmutablePropTypes.list.isRequired,
  outlets: ImmutablePropTypes.map.isRequired,
  mappings: ImmutablePropTypes.map.isRequired
}

function traverseHierarchy (actions, hierarchy, outlets, mappings) {
  // TODO: parse and render the hierarchy, return that
  const number = outlets.get('910d32d9-0ee7-4065-874b-679f8fdfcc82')
  return (
    <div>
      <NumberDisplay number={number} />
      <NumberInput
        setOutlet={actions.setOutlet}
        outlet={'910d32d9-0ee7-4065-874b-679f8fdfcc82'}
        number={number}
      />
    </div>
  )
}

function mapStateToProps (state) {
  return {
    outlets: state.outlets,
    hierarchy: state.hierarchy,
    mappings: state.mappings
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
