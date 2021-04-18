import { format } from 'js-conflux-sdk';

export default (address, network) => {
  try {
    format.address(address, network);
    return true;
  } catch (e) {
    return false;
  }
};
