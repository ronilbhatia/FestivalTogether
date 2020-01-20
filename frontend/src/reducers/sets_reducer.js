import merge from 'lodash/merge';

import { RECEIVE_FESTIVAL } from '../actions/festival_actions';
import { RECEIVE_SET_GOING } from '../actions/set_actions';

const setsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_FESTIVAL:
      action.festival.lineup.forEach(set => {
        nextState[set._id] = set;
      })

      return nextState;
    case RECEIVE_SET_GOING:
      nextState[action.set._id].going = action.set.going;
      return nextState;
    default:
      return state;
  }
}

export default setsReducer;