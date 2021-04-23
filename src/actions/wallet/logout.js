import store from 'Root/store';
import actions from 'Root/actions';

export default async () => {
  store.dispatch({
    type: actions.interval.STOP,
  });

  store.dispatch({
    type: actions.wallet.LOGOUT,
  });

  store.dispatch({
    type: actions.transactions.LOGOUT,
  });

  store.dispatch({
    type: actions.password.LOGOUT,
  });
};
