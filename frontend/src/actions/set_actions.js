import * as SetApiUtil from '../util/set_api_util'

export const RECEIVE_SET_GOING = 'RECEIVE_SET_GOING'

const receiveSetGoing = set => ({
  type: RECEIVE_SET_GOING,
  set
});

export const addUserToSet = (festivalId, setId) => dispatch => (
  SetApiUtil.addUserToSet(festivalId, setId)
    .then(set => dispatch(receiveSetGoing(set.data)))
);

export const removeUserFromSet = (festivalId, setId) => dispatch => (
  SetApiUtil.removeUserFromSet(festivalId, setId)
    .then(set => dispatch(receiveSetGoing(set.data)))
);