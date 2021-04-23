import store from 'Root/store';
import types from 'Root/actions';

import load from './load';

export default () => {
  const i = setInterval(() => {
    console.log('BAM BAM BAM');
    const { wallet } = store.getState();

    load(wallet[0], 'already-loaded');
  }, 3000);

  store.dispatch({
    type: types.interval.START,
    payload: i,
  });
};
