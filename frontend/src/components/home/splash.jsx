import React from 'react';
import lineup from '../../assets/images/lineup.jpg';

const Splash = ({ currentUser }) => {
  return (
    <div className="splash">
      <div className="splash-main"/>
      <div className="splash-body">
        {/* <p>
          FestivalTogether is an app that lets you coordinate set times at music 
          festivals with your friends. Never miss a set because you thought that 
          none of your friends wanted to go.
        </p> */}
        <div className="splash-lineup">
          <h1>2019 Coachella Lineup</h1>
          <img src={lineup} alt="lineup" />
        </div>
      </div>
    </div>
  );
};

export default Splash;
