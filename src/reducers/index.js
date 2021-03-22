import { combineReducers } from 'redux';

import wallet from './wallet';
import options from './options';
import password from './password';
import transactions from './transactions';

export default combineReducers({
  wallet,
  options,
  password,
  transactions,
});
