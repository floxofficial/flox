import actions from 'Root/actions';

export default (state = [], action) => {
  switch (action.type) {
    case actions.wallet.CREATE: {
      return [action.payload];
    }

    case actions.wallet.LOGOUT: {
      return [];
    }

    case actions.account.CHANGE_BALANCE: {
      const activeAccount = state.find((x) => x.active);

      return [
        {
          ...activeAccount,
          balance: action.balance,
        },
      ];
    }

    case actions.account.CHANGE_STAKING_BALANCE: {
      const activeAccount = state.find((x) => x.active);

      return [
        {
          ...activeAccount,
          stakingBalance: action.balance,
        },
      ];
    }

    case actions.account.CHANGE_EARNED_BALANCE: {
      const activeAccount = state.find((x) => x.active);

      return [
        {
          ...activeAccount,
          earnedBalance: action.earnedBalance,
        },
      ];
    }

    case actions.account.LOADED: {
      const activeAccount = state.find((x) => x.active);

      return [
        {
          ...activeAccount,
          loaded: true,
        },
      ];
    }

    case actions.account.UNLOADED: {
      const activeAccount = state.find((x) => x.active);

      return [
        {
          ...activeAccount,
          loaded: false,
        },
      ];
    }

    default: {
      return state;
    }
  }
};
