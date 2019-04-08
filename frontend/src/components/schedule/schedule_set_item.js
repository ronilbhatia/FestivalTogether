import React from 'react'

const ScheduleSetItem = ({ set, style, startTime, endTime }) => {
  debugger
  return (
    <div className="schedule-set-item" style={style} >
      <h3>{set.artist}</h3>
      <p>{startTime} - {endTime}</p>
    </div>
  )
}

export default ScheduleSetItem;