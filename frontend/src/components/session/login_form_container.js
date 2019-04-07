import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';

import SessionForm from './session_form';
import { loginUser, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors: { session } }) => ({
  formType: 'Log In',
  errors: session
});

const mapDispatchToProps = dispatch => ({
  processForm: userData => dispatch(loginUser(userData)),
  navLink: (
    <div>
      Don't have an account?
      <button onClick={() => dispatch(openModal('Register'))}>Register</button>
    </div>
  ),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SessionForm)
);
