import actions from 'Root/actions';

export default (state = '', action) => {
  switch (action.type) {
    case actions.password.ADD: {
      return action.payload;
    }

    case actions.password.LOGOUT: {
      return '';
    }

    default: {
      return state;
    }
  }
};
