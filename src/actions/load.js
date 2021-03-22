import store from 'Root/store';
import types from 'Root/actions';
import getTransactions from 'Root/helpers/dashboard/getTransactions';
import getCurrentBalance from 'Root/helpers/dashboard/getCurrentBalance';

export default (account) =>
  new Promise((resolve) => {
    console.log(account);
    store.dispatch({
      type: types.account.UNLOADED,
    });

    const currentBalance = getCurrentBalance(account);
    const transactions = getTransactions(account);

    Promise.all([currentBalance, transactions]).then(() => {
      store.dispatch({
        type: types.account.LOADED,
      });
    });
  });
