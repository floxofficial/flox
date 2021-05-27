import fetch from 'node-fetch';

import store from 'Root/store';
import types from 'Root/actions';
import currentExplorer from 'Root/helpers/currentExplorer';

export default async (account) => {
  try {
    console.log(account.address);
    const transactions = await fetch(
      `${currentExplorer()}/v1/transaction?accountAddress=${
        account.address
      }&limit=10&skip=0`,
    ).then((res) => res.json());

    if (transactions.list < 10000000) {
      store.dispatch({
        type: types.transactions.LOAD,
        payload: transactions.list,
      });
    }

    return true;
  } catch (e) {
    store.dispatch({
      type: types.transactions.LOAD,
      payload: [],
    });

    return true;
  }
};
