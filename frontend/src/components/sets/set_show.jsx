import React, { Component } from 'react'

class SetShow extends Component {
  render() {
    const { set } = this.props;

    const start = new Date(set.start);
    const end = new Date(set.end);

    const startHours = start.getHours() === 12 ? 12 : start.getHours() % 12;
    const startMinutes = start.getMinutes() < 10 ? `0${start.getMinutes()}` : start.getMinutes();
    const startTime = `${startHours}:${startMinutes}`

    const endHours = end.getHours() === 12 ? 12 : end.getHours() % 12;
    const endMinutes = end.getMinutes() < 10 ? `0${end.getMinutes()}` : end.getMinutes();
    const endTime = `${endHours}:${endMinutes}`

    return (
      <div className="set-show">
        <h1>{set.artistId ? set.artistId.name : set.artist}</h1>
        <p>{startTime} - {endTime}</p>
        <h2 className="set-stage">{set.stage}</h2>
        <div className="set-attending">
          <h2>Who's gonna be there?</h2>
          {
            set.going.length === 0 ? (
              <h3>No one :(</h3>
            ) : (
              <ul className="set-attending-list">
                {set.going.map(user => <li key={user._id}>{user.name}</li>)}
              </ul>
            )
          }
        </div>
      </div>
    )
  }
}

export default SetShow
