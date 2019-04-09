import React, { Component } from 'react';

import Splash from './splash';
import ScheduleContainer from '../schedule/schedule_container';

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props;

    const coachellaId = process.env.COACHELLA_ID || '5cac2562b214f00017a93831';

    return isAuthenticated ? (
      <ScheduleContainer festivalId={coachellaId} />
    ) : (
      <Splash />
    );
  }
}

export default Home;
