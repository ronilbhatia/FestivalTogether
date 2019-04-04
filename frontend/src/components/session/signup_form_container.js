import { connect } from 'react-redux';
import React from 'react';

import SessionForm from './session_form';
import { registerUser } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  formType: 'Register'
});

const mapDispatchToProps = dispatch => ({
  processForm: userData => dispatch(registerUser(userData)),
  navLink: (
    <button onClick={() => dispatch(openModal('Log In'))}>
      Already have an account? Log In
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
