import store from 'Root/store';
import types from 'Root/actions';
// import getCFXPrice from 'Root/helpers/dashboard/CFXPrice';
// import getUSDPrice from 'Root/helpers/dashboard/getUSDPrice';
import getStakingBalance from 'Root/helpers/dashboard/getStakingBalance';
import getListTokens from 'Root/helpers/dashboard/getListTokens';
import getTransactions from 'Root/helpers/dashboard/getTransactions';
import getCurrentBalance from 'Root/helpers/dashboard/getCurrentBalance';

export default (account, isAlreadyLoaded) =>
  new Promise((resolve) => {
    if (!isAlreadyLoaded) {
      store.dispatch({
        type: types.account.UNLOADED,
      });
    }

    const currentBalance = getCurrentBalance(account);
    const transactions = getTransactions(account);
    const listTokens = getListTokens(account);
    const stakingBalance = getStakingBalance(account);
    // const USDPrices = getUSDPrice();
    // const CFXPrice = getCFXPrice();

    Promise.all([
      currentBalance,
      transactions,
      listTokens,
      // USDPrices,
      // CFXPrice
    ]).then(() => {
      if (!isAlreadyLoaded) {
        store.dispatch({
          type: types.account.LOADED,
        });
      }
    });
  });
