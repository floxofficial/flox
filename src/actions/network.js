import store from 'Root/store';
import types from 'Root/actions';

import load from './load';

export default (network) => {
  store.dispatch({
    type: types.options.CHANGE,
    payload: {
      network,
    },
  });

  const { wallet } = store.getState();

  load(wallet[0]);
};
