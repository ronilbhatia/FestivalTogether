import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import logo from "../logo.svg";
import "../App.css";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>FestivalTogether</h1>
        <p>Coming Soon...</p>
        <Switch>
          <Route path="/signup" component={SignupFormContainer} />
          <Route path="/login" component={LoginFormContainer} />
          <Route path="/" render={() => <div />} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
