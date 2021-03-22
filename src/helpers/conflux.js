import store from 'Root/store';
import { Conflux, CONST } from 'js-conflux-sdk';

export default () => {
  const { options } = store.getState();

  let conflux;

  if (options.network === 'testnet') {
    conflux = new Conflux({
      url: 'https://test.confluxrpc.org/v2',
      networkId: CONST.TESTNET_ID,
    });
  } else {
    conflux = new Conflux({
      url: 'https://main.confluxrpc.org/v2',
      networkId: CONST.MAINNET_ID,
    });
  }

  return conflux;
};
