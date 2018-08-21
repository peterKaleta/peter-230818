
import { createStore, applyMiddleware, compose } from 'redux'
import { fromJS, Map } from 'immutable'
import { connectRouter, routerMiddleware } from 'connected-react-router/immutable'
import createSagaMiddleware from 'redux-saga'
import createReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState = Map(), history) {
  const middlewares = [sagaMiddleware, routerMiddleware(history)]
  const enhancers = [applyMiddleware(...middlewares)]

  const rootReducer = createReducer()
  const store = createStore(
    connectRouter(history)(rootReducer), // new root reducer with router state
    fromJS(initialState),
    compose(...enhancers),
  )

  store.runSaga = sagaMiddleware.run
  store.injectedReducers = {}
  store.injectedSagas = {}

  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers))
    })
  }

  return store
}
