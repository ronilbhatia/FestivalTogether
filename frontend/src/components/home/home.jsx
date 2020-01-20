import React, { Component } from 'react';

import Splash from './splash';
import ScheduleContainer from '../schedule/schedule_container';

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props;

    const coachellaId = '5e25476a90ba350516e1b01d'; // Heroku '5cae3da6c3cca80017930680' // Development: '5de2f99f9337ab621b91731d'

    return isAuthenticated ? (
      <ScheduleContainer festivalId={coachellaId} />
    ) : (
      <Splash />
    );
  }
}

export default Home;
