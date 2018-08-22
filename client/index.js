import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import Immutable from 'immutable'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router/immutable'
import createBrowserHistory from 'history/createBrowserHistory'

import App from './containers/App'
import './assets/main.css'

import configureStore from './configureStore'

const initialState = Immutable.Map()
const history = createBrowserHistory()
const store = configureStore(initialState, history)

const MOUNT_NODE = document.getElementById('app')

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history} >
          <App />
        </ConnectedRouter>
    </Provider>,
    MOUNT_NODE,
  )
}

if (module.hot) {
  module.hot.accept('containers/App', () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE)
    render()
  })
}

render()
