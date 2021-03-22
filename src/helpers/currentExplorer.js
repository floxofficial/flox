import store from 'Root/store';
import config from 'Root/config';

export default () => {
  const { options } = store.getState();

  return options.network === 'mainnet'
    ? config.explorer.mainnet
    : config.explorer.testnet;
};
