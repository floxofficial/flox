import { format } from 'js-conflux-sdk';

export default (publicKey) => {
  try {
    format.publicKey(publicKey);
    return true;
  } catch (e) {
    return false;
  }
};
