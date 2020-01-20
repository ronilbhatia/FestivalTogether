import React, { Component } from 'react';

import Splash from './splash';
import ScheduleContainer from '../schedule/schedule_container';

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props;

    const coachellaId = '5cae405dec8b5f00178997c5'; // Heroku '5cae3da6c3cca80017930680' // Development: '5de2f99f9337ab621b91731d'

    return isAuthenticated ? (
      <ScheduleContainer festivalId={coachellaId} />
    ) : (
      <Splash />
    );
  }
}

export default Home;
