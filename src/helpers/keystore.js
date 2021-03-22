import { PrivateKeyAccount, CONST } from 'js-conflux-sdk';

export default (account, password) => {
  const wallet = new PrivateKeyAccount(account.privateKey, CONST.MAINNET_ID);

  const keystore = wallet.encrypt(password);

  return JSON.stringify(keystore);
};
