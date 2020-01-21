import { RECEIVE_FESTIVAL } from '../actions/festival_actions';

const currFestivalReducer = (state = '', action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FESTIVAL:
      return action.festival._id
    default:
      return state;
  }
}

export default currFestivalReducer;