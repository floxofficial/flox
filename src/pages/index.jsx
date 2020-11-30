import React, { Fragment, Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Layout from 'Root/components/Layout';
import HomePage from './HomePage';
import CreateWallet from './CreateWallet';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/create-wallet" component={CreateWallet} />
            <Redirect to="/" component={HomePage} />
          </Switch>
        </Layout>
      </Fragment>
    );
  }
}

export default App;
