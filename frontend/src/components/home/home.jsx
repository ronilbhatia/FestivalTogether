import React, { Component } from 'react';

import Splash from './splash';
import ScheduleContainer from '../schedule/schedule_container';

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props;

    const coachellaId = '5cad33c539a3204d509c86a8'; // Heroku '5cac2562b214f00017a93831' // Development: Personal: '5cac23ed469ac6099c79d0ce', Work: '5cad33c539a3204d509c86a8'

    return isAuthenticated ? (
      <ScheduleContainer festivalId={coachellaId} />
    ) : (
        <Splash />
      );
  }
}

export default Home;
