import * as SetApiUtil from '../util/set_api_util'

export const RECEIVE_SET_GOING = 'RECEIVE_SET_GOING'
export const REMOVE_SET_GOING = 'REMOVE_SET_GOING'

const receiveSetGoing = ({ set, user }) => ({
  type: RECEIVE_SET_GOING,
  set,
  user
});

const removeSetGoing = ({ set, user }) => ({
  type: REMOVE_SET_GOING,
  set,
  user
});

export const addUserToSet = (festivalId, setId) => dispatch => (
  SetApiUtil.addUserToSet(festivalId, setId)
    .then(set => dispatch(receiveSetGoing(set.data)))
);

export const removeUserFromSet = (festivalId, setId) => dispatch => (
  SetApiUtil.removeUserFromSet(festivalId, setId)
    .then(set => dispatch(removeSetGoing(set.data)))
);