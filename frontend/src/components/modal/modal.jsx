import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import SetShowContainer from '../sets/set_show_container';

const Modal = ({ modal, closeModal }) => {
  if (!modal.type) {
    return null;
  }
  let component;
  switch (modal.type) {
    case 'Log In':
      component = <LoginFormContainer />;
      break;
    case 'Register':
      component = <SignupFormContainer />;
      break;
    case 'Set Show':
      component = <SetShowContainer setId={modal.id} />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        <button className="modal-x" onClick={closeModal}>
          X
        </button>
        {component}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
