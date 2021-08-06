import store from 'Root/store';
import types from 'Root/actions';

import conflux from 'Root/helpers/conflux';
import formatCurrency from '../formatCurrency';
import bigIntToNumber from 'Root/helpers/bigIntToNumber';

export default async (account) => {
  const balance = await conflux().getBalance(account.address);

  store.dispatch({
    type: types.account.CHANGE_BALANCE,
    balance: formatCurrency(bigIntToNumber(balance)),
  });

  return true;
};
