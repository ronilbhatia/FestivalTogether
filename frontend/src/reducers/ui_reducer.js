import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import currFestivalReducer from './curr_festival_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  currFestival: currFestivalReducer
});

export default uiReducer;
