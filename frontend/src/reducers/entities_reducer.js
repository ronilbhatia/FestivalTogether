import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import festivalsReducer from './festivals_reducer';
import setsReducer from './sets_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  festivals: festivalsReducer,
  sets: setsReducer
});

export default entitiesReducer;
