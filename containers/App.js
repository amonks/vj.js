import { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as HierarchyActions from '../actions/hierarchy'
import * as OutletActions from '../actions/outlets'
import * as MappingActions from '../actions/mappings'

class App extends Component {
  render () {
    const { actions, hierarchy, outlets, mappings, time } = this.props
    return hierarchy.render(actions, outlets, mappings, time)
  }
}

App.propTypes = {
  // TODO: typecheck members
  actions: PropTypes.object.isRequired,
  hierarchy: ImmutablePropTypes.record.isRequired,
  outlets: ImmutablePropTypes.map.isRequired,
  mappings: ImmutablePropTypes.map.isRequired,
  time: PropTypes.number.isRequired
}

function mapStateToProps (state) {
  return {
    outlets: state.get('outlets'),
    hierarchy: state.get('hierarchy'),
    mappings: state.get('mappings'),
    time: state.get('time')
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({...OutletActions, ...HierarchyActions, ...MappingActions}, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
