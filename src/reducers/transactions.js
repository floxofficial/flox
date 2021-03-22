import types from 'Root/actions';

export default (state = [], action) => {
  switch (action.type) {
    case types.transactions.LOAD: {
      return action.payload;
    }

    case types.transactions.LOGOUT: {
      return [];
    }

    default: {
      return state;
    }
  }
};
