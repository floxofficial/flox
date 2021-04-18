import { Wallet, CONST } from 'js-conflux-sdk';

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

  if (wallet[0]) {
    const a = new Wallet(network === 'mainnet' ? CONST.MAINNET_ID : CONST.TESTNET_ID);

    const account = a.addPrivateKey(wallet[0].privateKey);

    store.dispatch({
      type: types.wallet.CREATE,
      payload: {
        ...account,
        active: true,
      },
    });

    load(account);
  }
};
