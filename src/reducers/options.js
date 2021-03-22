import actions from 'Root/actions';

const defaultState = {
  network: 'mainnet',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.options.CHANGE: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
