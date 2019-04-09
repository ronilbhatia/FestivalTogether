import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import '../App.scss';

// Components
import Modal from './modal/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import HomeContainer from './home/home_container';
import MyScheduleContainer from './schedule/my_schedule_container';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Modal />
        <NavBarContainer />
        <Switch>
          <ProtectedRoute path="/myschedule" component={MyScheduleContainer} />
          <Route path='/' component={HomeContainer} />
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}

export default App;
