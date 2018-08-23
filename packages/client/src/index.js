import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import Immutable from 'immutable'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router/immutable'
import createBrowserHistory from 'history/createBrowserHistory'
import { ToastContainer } from 'react-toastify'

import App from './containers/App'
import './assets/main.scss'
import 'react-toastify/dist/ReactToastify.css'

import configureStore from './configureStore'

const initialState = Immutable.Map()
const history = createBrowserHistory()
const store = configureStore(initialState, history)


const MOUNT_NODE = document.getElementById('app')

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <ConnectedRouter history={history} >
          <App />
        </ConnectedRouter>
        <ToastContainer />
      </div>
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
