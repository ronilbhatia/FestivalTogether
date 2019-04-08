import React, { Component } from 'react';

import Splash from './splash';
import ScheduleContainer from '../schedule/schedule_container';

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props;

    return isAuthenticated ? <ScheduleContainer /> : <Splash />;
  }
}

export default Home;
