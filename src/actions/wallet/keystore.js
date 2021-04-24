import store from 'Root/store';
import actions from 'Root/actions';
import decryptKeystore from 'Root/helpers/decryptKeystore';

import loadAccount from '../load';
import interval from '../interval';

export default (values) => {
  const account = decryptKeystore(values.content, values.password);

  if (!account) {
    return false;
  }

  store.dispatch({
    type: actions.wallet.CREATE,
    payload: {
      ...account,
      active: true,
    },
  });

  store.dispatch({
    type: actions.password.ADD,
    payload: values.password,
  });

  loadAccount(account);
  interval();

  return true;
};
