import { connect } from 'react-redux';
import React, { Fragment, Component } from 'react';
import { Router, Switch, withRouter, Route } from 'react-router-dom';

import HomePage from './HomePage';

import history from 'Root/history';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router history={history}>
          <Switch>
            <Route component={HomePage} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default withRouter(App);
