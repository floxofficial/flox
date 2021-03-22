import store from 'Root/store';
import actions from 'Root/actions';

export default async () => {
  store.dispatch({
    type: actions.wallet.LOGOUT,
  });

  store.dispatch({
    type: actions.transaction.LOGOUT,
  });

  store.dispatch({
    type: actions.password.LOGOUT,
  });
};
