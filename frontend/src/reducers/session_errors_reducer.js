import {
  GET_ERRORS,
  CLEAR_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const sessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return {};
    case RECEIVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default sessionErrorsReducer;
