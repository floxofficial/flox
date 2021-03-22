import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

import Layout from 'Root/components/Layout';
import * as route from '../static/routes';
import HomePage from './HomePage';
import CreateWallet from './CreateWallet';
import KeyStore from './KeyStore';
import PrivateKey from './PrivateKey';
import WalletInfo from './WalletInfo';
import Dashboard from './Dashboard/Home';

const App = (props) => (
  <>
    <Layout isLoggedIn={props.location.pathname.includes('dashboard')}>
      <Switch>
        <Route exact path={route.homePage} component={HomePage} />
        <Route exact path={route.createWalletPage} component={CreateWallet} />
        <Route exact path={route.privateKeyPage} component={PrivateKey} />
        <Route exact path={route.keyStorePage} component={KeyStore} />
        <Route exact path={route.walletInfoPage} component={WalletInfo} />
        <Route exact path={route.dashboardPage} component={Dashboard} />
        <Redirect to={route.homePage} component={HomePage} />
      </Switch>
    </Layout>
  </>
);

export default withRouter(App);
