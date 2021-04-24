import { format } from 'js-conflux-sdk';

export default (pk) => {
  try {
    format.privateKey(pk);
    return true;
  } catch (e) {
    return false;
  }
};
