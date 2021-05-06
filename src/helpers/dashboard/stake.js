import { Conflux, CONST } from 'js-conflux-sdk';

import store from 'Root/store';
// import types from 'Root/actions';
// import bigIntToNumber from 'Root/helpers/bigIntToNumber';

export default async (activeAccount, amount, type) => {
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

  const account = conflux.wallet.addPrivateKey(activeAccount.privateKey);

  const staking = conflux.InternalContract('Staking');

  let tx;

  if (type === 'withdraw') {
    tx = await staking
      .withdraw(BigInt(parseFloat(amount) * 1000000000000000000))
      .sendTransaction({
        from: account,
      })
      .confirmed();
  } else {
    tx = await staking
      .deposit(BigInt(parseFloat(amount) * 1000000000000000000))
      .sendTransaction({
        from: account,
      })
      .confirmed();
  }

  console.log(tx);

  return true;
};
