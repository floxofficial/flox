import store from 'Root/store';
import types from 'Root/actions';

import conflux from 'Root/helpers/conflux';
import bigIntToNumber from 'Root/helpers/bigIntToNumber';
import interestRateFormula from 'Root/helpers/interestRateFormula';

export default async (account) => {
  const c = await conflux();

  const { blockNumber } = await c.getStatus();

  let depositList = await c.getDepositList(account.address);

  depositList = depositList.map((x) => ({
    ...x,
    amount: bigIntToNumber(x.amount),
  }));

  depositList = depositList.map((x) => ({
    ...x,
    interest: interestRateFormula({
      ...x,
      blockNumber,
    }),
  }));

  const earnedBalance = depositList.reduce((a, b) => a + b.interest, 0);

  store.dispatch({
    type: types.account.CHANGE_EARNED_BALANCE,
    earnedBalance,
  });
};
