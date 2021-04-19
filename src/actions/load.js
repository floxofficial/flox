import store from 'Root/store';
import types from 'Root/actions';
// import getCFXPrice from 'Root/helpers/dashboard/CFXPrice';
// import getUSDPrice from 'Root/helpers/dashboard/getUSDPrice';
import getListTokens from 'Root/helpers/dashboard/getListTokens';
import getTransactions from 'Root/helpers/dashboard/getTransactions';
import getCurrentBalance from 'Root/helpers/dashboard/getCurrentBalance';

export default (account) =>
  new Promise((resolve) => {
    store.dispatch({
      type: types.account.UNLOADED,
    });

    const currentBalance = getCurrentBalance(account);
    const transactions = getTransactions(account);
    const listTokens = getListTokens(account);
    // const USDPrices = getUSDPrice();
    // const CFXPrice = getCFXPrice();

    Promise.all([
      currentBalance,
      transactions,
      listTokens,
      // USDPrices,
      // CFXPrice
    ]).then(() => {
      store.dispatch({
        type: types.account.LOADED,
      });
    });
  });