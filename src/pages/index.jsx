import { connect } from 'react-redux';
import React, { Fragment, Component } from 'react';
import {
  Router, Switch, withRouter, Route,
} from 'react-router-dom';

import history from 'Root/history';
import HomePage from './HomePage';
import Layout from "../components/Layout";


class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <Router history={history}>
            <Switch>
              <Route component={HomePage} />
            </Switch>
          </Router>
        </Layout>
      </Fragment>
    );
  }
}

export default withRouter(App);
