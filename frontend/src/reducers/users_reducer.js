import { RECEIVE_CURRENT_USER } from "../util/session_api_util";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState[action.payload.id] = action.payload;
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;
