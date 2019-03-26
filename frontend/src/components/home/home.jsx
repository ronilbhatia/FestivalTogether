import React, { Component } from "react"
import { Link } from "react-router-dom";
import Splash from "./splash";

class Home extends Component {
  render() {
    const { currentUser, isAuthenticated } = this.props;
    debugger
    return isAuthenticated ? (
      <div>
        Hi {currentUser.name}!
        <button onClick={() => this.props.logoutUser()}>Log Out</button>
      </div>
    ) : (
      <div>
        Log in you piece of shit
        <br />
        <Link to="/signup">Sign Up</Link>
        <br />
        <Link to="/login">Log In</Link>
      </div>
    );
  }
}

export default Home;