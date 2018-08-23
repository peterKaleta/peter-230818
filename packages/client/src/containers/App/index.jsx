import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route } from 'react-router'
import { ToastContainer, ToastStore } from 'react-toasts'

import StorageListPage from '../StorageListPage'
import * as styles from './styles.scss'

export default function App() {
  return (
    <div className={ styles.main }>
      <Helmet defaultTitle="Kraken Test">
        <meta name="description" content="A really fancy description for the app." />
      </Helmet>
      <Switch>
        <Route exact path="/" component={StorageListPage} />
      </Switch>
      <ToastContainer store={ ToastStore } />
    </div>
  )
}
