
import { createStore, applyMiddleware, compose } from 'redux'
import { fromJS, Map } from 'immutable'
import { connectRouter, routerMiddleware } from 'connected-react-router/immutable'
import thunk from 'redux-thunk'
import createReducer from './reducers'

export default function configureStore(initialState = Map(), history) {
  const middlewares = [
    thunk,
    routerMiddleware(history),
  ]
  const enhancers = [applyMiddleware(...middlewares)]

  const rootReducer = createReducer()
  const store = createStore(
    connectRouter(history)(rootReducer), // new root reducer with router state
    fromJS(initialState),
    compose(...enhancers),
  )

  return store
}
