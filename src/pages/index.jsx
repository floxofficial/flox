import React, { Fragment, Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Layout from 'Root/components/Layout';
import * as route from '../static/routes';
import HomePage from './HomePage';
import CreateWallet from './CreateWallet';
import KeyStore from './KeyStore';
import PrivateKey from './PrivateKey';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <Switch>
            <Route exact path={route.homePage} component={HomePage} />
            <Route exact path={route.createWalletPage} component={CreateWallet} />
            <Route exact path={route.privateKeyPage} component={PrivateKey} />
            <Route exact path={route.keyStorePage} component={KeyStore} />
            <Redirect to={route.homePage} component={HomePage} />
          </Switch>
        </Layout>
      </Fragment>
    );
  }
}

export default App;
