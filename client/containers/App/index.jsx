import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route } from 'react-router'

import StorageListPage from '../StorageListPage'

export default function App() {
  return (
    <Fragment>
      <Helmet defaultTitle="Kraken Test">
        <meta name="description" content="A really fancy description for the app." />
      </Helmet>
      <Switch>
        <Route exact path="/" component={StorageListPage} />
      </Switch>
    </Fragment>
  )
}
