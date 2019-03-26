import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { loginUser } from "../../util/session_api_util";

const mapStateToProps = state => ({
  formType: "login",
  navLink: <Link to="/signup">Don't have an account? Register</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: userData => dispatch(loginUser(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
