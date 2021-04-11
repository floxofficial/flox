import types from 'Root/actions';

const defaultState = {
  network: 'mainnet',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.options.CHANGE: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case types.options.USD_PRICE: {
      return {
        ...state,
        usd: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
