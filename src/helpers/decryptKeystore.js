import { PrivateKeyAccount, CONST } from 'js-conflux-sdk';

import store from 'Root/store';

export default (content, password) => {
  try {
    const { options } = store.getState();
    const account = PrivateKeyAccount.decrypt(
      content,
      password,
      options.network === 'mainnet' ? CONST.MAINNET_ID : CONST.TESTNET_ID,
    );

    return account;
  } catch (e) {
    return false;
  }
};
