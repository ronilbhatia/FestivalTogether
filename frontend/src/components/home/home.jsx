import React, { Component } from 'react';
import Splash from './splash';

class Home extends Component {
  render() {
    const { currentUser, isAuthenticated } = this.props;

    return isAuthenticated ? (
      <div>
        Hi {currentUser.name}!
        <button onClick={() => this.props.logoutUser()}>Log Out</button>
      </div>
    ) : (
      <div>
        <Splash />
      </div>
    );
  }
}

export default Home;
