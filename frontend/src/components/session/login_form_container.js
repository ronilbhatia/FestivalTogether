import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { loginUser } from "../../actions/session_actions";

const mapStateToProps = state => ({
  formType: "Log In",
  navLink: <Link to="/signup">Don't have an account? Register</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: userData => dispatch(loginUser(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
