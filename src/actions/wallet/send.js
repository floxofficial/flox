import { Conflux, CONST } from 'js-conflux-sdk';

import store from 'Root/store';
import erc20abi from 'Root/static/erc20-abi.json';

export default async (transaction) => {
  const { options, wallet } = store.getState();
  const account = wallet[0];

  const url =
    options.network === 'mainnet'
      ? 'http://main.confluxrpc.org/v2'
      : 'http://test.confluxrpc.org/v2';

  const networkId = options.network === 'mainnet' ? CONST.MAINNET_ID : CONST.TESTNET_ID;

  const conflux = new Conflux({
    url,
    networkId,
  });

  conflux.wallet.addPrivateKey(account.privateKey);

  if (transaction.token === 'CFX') {
    const params = {
      from: account.address,
      to: transaction.to,
      value: parseFloat(transaction.amount) * 1000000000000000000,
    };

    if (transaction.gasPrice) {
      params.gasPrice = transaction.gasPrice;
    }

    if (transaction.gasLimit) {
      params.gas = transaction.gasLimit;
    }

    const hash = await conflux.sendTransaction(params);

    return hash;
  }

  const { tokens } = store.getState();
  const token = tokens.find((x) => x.symbol === transaction.token);

  const contract = conflux.Contract({
    abi: erc20abi,
    address: token.address,
  });

  const hash = await contract
    .transfer(
      transaction.to,
      BigInt(parseFloat(transaction.amount) * 1000000000000000000),
    )
    .sendTransaction({ from: account.address });

  return hash;
};
