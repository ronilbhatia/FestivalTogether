import * as SetApiUtil from '../util/set_api_util'

export const RECEIVE_SET = 'RECEIVE_SET'

const receiveSet = set => ({
  type: RECEIVE_SET,
  set
});

export const addUserToSet = (festivalId, setId) => dispatch => (
  SetApiUtil.addUserToSet(festivalId, setId)
    .then(set => dispatch(receiveSet(set.data)))
);

export const removeUserFromSet = (festivalId, setId) => dispatch => (
  SetApiUtil.removeUserFromSet(festivalId, setId)
    .then(set => dispatch(receiveSet(set.data)))
);