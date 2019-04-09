import merge from 'lodash/merge';

import { RECEIVE_FESTIVAL } from '../actions/festival_actions';
import { RECEIVE_SET } from '../actions/set_actions';

const setsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_FESTIVAL:
      action.festival.lineup.forEach(set => {
        nextState[set._id] = set;
      })

      return nextState;
    case RECEIVE_SET:
      nextState[action.set._id] = action.set;
      return nextState;
    default:
      return state;
  }
}

export default setsReducer;