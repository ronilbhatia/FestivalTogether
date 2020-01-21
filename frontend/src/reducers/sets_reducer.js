import merge from 'lodash/merge';

import { RECEIVE_FESTIVAL } from '../actions/festival_actions';
import { RECEIVE_SET_GOING, REMOVE_SET_GOING } from '../actions/set_actions';

const setsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState, set

  switch (action.type) {
    case RECEIVE_FESTIVAL:
      nextState = merge({}, state);
      action.festival.lineup.forEach(set => {
        nextState[set._id] = set;
      })

      return nextState;
    case RECEIVE_SET_GOING:
      nextState = merge({}, state);
      set = nextState[action.set._id];
      debugger
      set.going.push(action.user)
      return nextState;
    case REMOVE_SET_GOING:
      nextState = merge({}, state);
      set = nextState[action.set._id];
      const removeIndex = set.going.find(user => user._id === action.user._id);
      set.going.splice(removeIndex, 1);
      return nextState;
    default:
      return state;
  }
}

export default setsReducer;