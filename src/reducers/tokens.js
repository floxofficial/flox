import types from 'Root/actions';

export default (state = [], action) => {
  switch (action.type) {
    case types.tokens.LOAD: {
      return action.payload;
    }

    case types.tokens.LOGOUT: {
      return [];
    }

    case types.tokens.ADD_PRICE: {
      const newState = [...state];

      for (let i = 0; i < newState.length; ++i) {
        const { address } = newState[i];
        const element = action.payload.find((x) => x.address === address);

        if (element) {
          newState[i].price = element.price;
        }
      }

      return newState;
    }

    default: {
      return state;
    }
  }
};
