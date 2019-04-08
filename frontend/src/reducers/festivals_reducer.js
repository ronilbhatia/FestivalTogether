import merge from 'lodash/merge';

import { RECEIVE_FESTIVAL } from '../actions/festival_actions';

const festivalsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_FESTIVAL:
      const festival = merge({}, action.festival);
      festival.lineup = festival.lineup.map(set => set._id);
      nextState[festival._id] = festival;

      return festival;
    default:
      return state;
  }
}

export default festivalsReducer;