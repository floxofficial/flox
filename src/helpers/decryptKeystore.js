import { PrivateKeyAccount, CONST } from 'js-conflux-sdk';

export default (content, password) => {
  try {
    const account = PrivateKeyAccount.decrypt(content, password, CONST.MAINNET_ID);

    return account;
  } catch (e) {
    return false;
  }
};
