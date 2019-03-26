import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { registerUser } from "../../util/session_api_util";

const mapStateToProps = state => ({
  formType: "signup",
  navLink: <Link to="/login">Already have an account? Login</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: userData => dispatch(registerUser(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
