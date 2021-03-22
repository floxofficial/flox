import { format } from 'js-conflux-sdk';

export default (privateKey) => {
  try {
    format.privateKey(privateKey);
    return true;
  } catch (e) {
    return false;
  }
};
