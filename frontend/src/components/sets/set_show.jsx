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
        <h1>{set.artist}</h1>
        <p>{startTime} - {endTime}</p>
        <ul>
          {set.going.map(user => <li>{user.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default SetShow
