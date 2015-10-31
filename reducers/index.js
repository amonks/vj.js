import { combineReducers } from 'redux'
import outlets from './outlets'
import mappings from './mappings'
import hierarchy from './hierarchy'

const rootReducer = combineReducers({
  outlets,
  mappings,
  hierarchy
})

export default rootReducer
