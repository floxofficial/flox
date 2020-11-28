import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import store from './store';
import App from './pages';
import history from './history';
import './styles/base.less';

(async () => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    global.document.getElementById('react'),
  );
})();
