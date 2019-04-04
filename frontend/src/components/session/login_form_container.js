import { connect } from 'react-redux';
import React from 'react';

import SessionForm from './session_form';
import { loginUser } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  formType: 'Log In'
});

const mapDispatchToProps = dispatch => ({
  processForm: userData => dispatch(loginUser(userData)),
  navLink: (
    <button onClick={() => dispatch(openModal('Register'))}>
      Don't have an account? Register
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
