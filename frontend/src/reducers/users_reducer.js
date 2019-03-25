import { RECEIVE_CURRENT_USER } from "../util/session_api_util";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState[action.payload._id] = action.payload;
    default:
      return state;
  }
};

export default usersReducer;
