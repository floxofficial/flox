import { Wallet, CONST } from 'js-conflux-sdk';

import store from 'Root/store';
import actions from 'Root/actions';
import { walletInfoPage } from 'Root/static/routes';

import loadAccount from '../load';

export default async (values, push) => {
  const wallet = new Wallet(CONST.MAINNET_ID);

  const account = wallet.addRandom();

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

  push(walletInfoPage);
};
