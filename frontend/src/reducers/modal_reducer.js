import merge from 'lodash/merge'

import { OPEN_MODAL, OPEN_SET_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const _nullModal = { type: null }

const modalReducer = (state = _nullModal, action) => {
  let nextState = merge({}, state);

  switch (action.type) {
    case OPEN_MODAL:
      nextState.type = action.modal
      return nextState;
    case OPEN_SET_MODAL:
      return {
        type: action.modal,
        id: action.set
      }
    case CLOSE_MODAL:
      return _nullModal;
    default:
      return state;
  }
}

export default modalReducer;