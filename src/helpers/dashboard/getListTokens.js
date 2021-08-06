import fetch from 'node-fetch';

import store from 'Root/store';
import types from 'Root/actions';
import conflux from 'Root/helpers/conflux';
import erc20abi from 'Root/static/erc20-abi.json';
import erc20main from 'Root/static/tokens/erc20main.json';
import erc20test from 'Root/static/tokens/erc20test.json';

import bigIntToNumber from '../bigIntToNumber';
import formatCurrency from '../formatCurrency';

const getTokenDetails = async (token, contract, address) => {
  try {
    const balance = await contract.balanceOf(address);

    return {
      ...token,
      balance: formatCurrency(bigIntToNumber(balance)),
    };
  } catch (e) {
    return {
      ...token,
      balance: 0,
    };
  }
};

const getListAllTokens = async (account, network) => {
  const newTokens = [];
  const tokens = network === 'mainnet' ? erc20main : erc20test;
  const c = conflux();

  for (const token of tokens) {
    const contract = c.Contract({
      abi: erc20abi,
      address: token.address,
    });

    newTokens.push(getTokenDetails(token, contract, account.address));
  }

  const balances = await Promise.all(newTokens);

  return balances;
};

export default async (account) => {
  try {
    const { options } = store.getState();
    const listAllTokens = await getListAllTokens(account, options.network);

    store.dispatch({
      type: types.tokens.LOAD,
      payload: listAllTokens,
    });

    return true;
  } catch (e) {
    return true;
  }
};
