import { combineReducers } from 'redux';

import tokens from './tokens';
import wallet from './wallet';
import options from './options';
import password from './password';
import transactions from './transactions';

export default combineReducers({
  wallet,
  tokens,
  options,
  password,
  transactions,
});
