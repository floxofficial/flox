import { Conflux, CONST } from 'js-conflux-sdk';

import store from 'Root/store';
import types from 'Root/actions';
import bigIntToNumber from 'Root/helpers/bigIntToNumber';

export default async (account) => {
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

  const staking = conflux.InternalContract('Staking');

  const balance = await staking.getStakingBalance(account.address);

  store.dispatch({
    type: types.account.CHANGE_STAKING_BALANCE,
    balance: bigIntToNumber(balance),
  });

  return true;
};
