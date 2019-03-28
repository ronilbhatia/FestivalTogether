import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.scss';

// Components
import NavBarContainer from './nav_bar/nav_bar';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import HomeContainer from './home/home_container';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBarContainer />
        <Switch>
          <Route path='/signup' component={SignupFormContainer} />
          <Route path='/login' component={LoginFormContainer} />
          <Route path='/' component={HomeContainer} />
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}

export default App;
