import { Wallet, CONST } from 'js-conflux-sdk';

import store from 'Root/store';
import actions from 'Root/actions';
import { walletInfoPage } from 'Root/static/routes';

import loadAccount from '../load';
import interval from '../interval';

export default async (values, push) => {
  const { options } = store.getState();

  const wallet = new Wallet(
    options.network === 'mainnet' ? CONST.MAINNET_ID : CONST.TESTNET_ID,
  );

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

  interval();

  push(walletInfoPage);
};
