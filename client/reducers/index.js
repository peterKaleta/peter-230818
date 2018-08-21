import { fromJS } from 'immutable'
import { combineReducers } from 'redux-immutable'
import { LOCATION_CHANGE } from 'connected-react-router/immutable'

import appReducer from '../containers/App/reducer'

const routeInitialState = fromJS({
  location: '/',
})

/**
 * Merge route into the global application state
 */
export function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      })
    default:
      return state
  }
}

export default function createReducer() {
  return combineReducers({
    route: routeReducer,
    app: appReducer,
  })
}
