import data from './data';
import modal from './modal';
import spinner from './spinner';

import { combineReducers } from 'redux-immutable';

const rootReducer = combineReducers({
  data,
  modal,
  spinner
});

export default rootReducer;
