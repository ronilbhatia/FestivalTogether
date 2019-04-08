import React, { Component } from 'react';

import Splash from './splash';
import ScheduleContainer from '../schedule/schedule_container';

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props;
    const coachellaId = process.env.COACHELLA_ID || '5cab6b1f867ae25229729cac';
    
    return isAuthenticated ? (
      <ScheduleContainer festivalId={coachellaId} />
     ) : (
      <Splash />
     );
  }
}

export default Home;
