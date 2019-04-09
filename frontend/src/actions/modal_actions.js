export const OPEN_MODAL = 'OPEN_MODAL';
export const OPEN_SET_MODAL = 'OPEN_SET_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modal => ({
  type: OPEN_MODAL,
  modal
});

export const openSetModal = (modal, set) => ({
  type: OPEN_SET_MODAL,
  modal,
  set
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});