import { Wallet, CONST } from 'js-conflux-sdk';

import store from 'Root/store';
import actions from 'Root/actions';

import loadAccount from '../load';

export default (values) => {
  try {
    const { options } = store.getState();

    const wallet = new Wallet(
      options.network === 'mainnet' ? CONST.MAINNET_ID : CONST.TESTNET_ID,
    );

    const account = wallet.addPrivateKey(values.privateKey);

    store.dispatch({
      type: actions.wallet.CREATE,
      payload: {
        ...account,
        active: true,
      },
    });

    loadAccount(account);

    return true;
  } catch (e) {
    return false;
  }
};
