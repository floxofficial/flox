import store from 'Root/store';
import types from 'Root/actions';

export default (state = [], action) => {
  switch (action.type) {
    case 'TEST': {
      return [];
    }

    default: {
      return state;
    }
  }
};
