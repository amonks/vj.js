import { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// import * as HierarchyActions from '../actions/hierarchy'
import * as OutletActions from '../actions/outlets'
// import * as MappingActions from '../actions/mappings'

class App extends Component {
  render () {
    const { actions, hierarchy, outlets, mappings } = this.props
    const out = hierarchy.render(actions, outlets, mappings)
    return out
  }
}

App.propTypes = {
  // TODO: typecheck members
  actions: PropTypes.object.isRequired,
  hierarchy: ImmutablePropTypes.record.isRequired,
  outlets: ImmutablePropTypes.map.isRequired,
  mappings: ImmutablePropTypes.map.isRequired
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
