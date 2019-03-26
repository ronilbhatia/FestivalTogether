import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from "../actions/session_actions";

const _nullUser = Object.freeze({ user: null, isAuthenticated: false });

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        user: {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email
        },
        isAuthenticated: true
      };
    case REMOVE_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
