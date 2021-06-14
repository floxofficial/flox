import fetch from 'node-fetch';

import store from 'Root/store';
import types from 'Root/actions';
import currentExplorer from 'Root/helpers/currentExplorer';

export default async (account) => {
  try {
    const transactions = await fetch(
      `${currentExplorer()}/v1/transaction?accountAddress=${
        account.address
      }&limit=10&skip=0`,
    ).then((res) => res.json());

    // console.log(transactions);

    if (transactions.total < 10000000) {
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
