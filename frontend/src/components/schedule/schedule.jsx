import React, { Component } from 'react';
import ScheduleSetItem from './schedule_set_item';

class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: 'friday'
    }
  }

  componentDidMount() {
    this.props.fetchFestival(this.props.festivalId);
  }

  renderDays() {
    return (
      <div className="schedule-days">
        <div
          className={this.state.day === 'friday' ? 'schedule-day active' : 'schedule-day'}
          onClick={() => this.setState({ day: 'friday' })}
        >
          Friday
        </div>

        <div
          className={this.state.day === 'saturday' ? 'schedule-day active' : 'schedule-day'}
          onClick={() => this.setState({ day: 'saturday' })}
        >
          Saturday
        </div>

        <div
          className={this.state.day === 'sunday' ? 'schedule-day active' : 'schedule-day'}
          onClick={() => this.setState({ day: 'sunday' })}
        >
          Sunday
        </div>
      </div>
    )
  }

  renderKey() {
    return (
      <div className="schedule-key">
        <div className="schedule-key-group">
          <h1>You</h1>
          <div className="schedule-key-sub-group">
            <button className="white-circle" />
            <div>Not Attending</div>
          </div>
          <div className="schedule-key-sub-group">
            <button className="green-circle" />
            <div>Attending</div>
          </div>
        </div>
        <div className="schedule-key-group">
          <h1>Group</h1>
          <div className="schedule-key-sub-group">
            <button className="light-purple-square" />
            <div>1-5 attending</div>
          </div>
          <div className="schedule-key-sub-group">
            <button className="purple-square" />
            <div>6-10 attending</div>
          </div>
          <div className="schedule-key-sub-group">
            <button className="dark-purple-square" />
            <div>11+ attending</div>
          </div>
        </div>
      </div>

    )
  }

  renderSetsForStage(stage) {
    const { sets } = this.props;
    const displaySets = sets[stage].filter(set => {
      const day = new Date(set.start).getDay();
      if (this.state.day === 'friday') {
        return day === 5;
      } else if (this.state.day === 'saturday') {
        return day === 6;
      } else {
        return day === 0;
      }
    })
    return (
      <div className="schedule-set-item-container">
        {
          displaySets.map(set => {
            const start = new Date(set.start);
            const end = new Date(set.end);
            const leftOffset =
              (((start.getHours() - 12) * 150) + (start.getMinutes() * (150 / 60)));
            const rightOffset =
              (((end.getHours() - 12) * 150) + (end.getMinutes() * (150 / 60)));
            const width = rightOffset - leftOffset;
            let backgroundColor = '#eee';
            if (set.going.length > 0) {
              backgroundColor = 'rgb(185, 186, 213)';
            }
            if (set.going.length > 5) {
              backgroundColor = 'rgb(125, 128, 198)';
            }
            if (set.going.length > 10) {
              backgroundColor = 'rgb(87, 91, 188)';
            }

            const style = {
              left: `${leftOffset + 300}px`,
              width: `${width}px`,
              backgroundColor
            }

            const startHours = start.getHours() === 12 ? 12 : start.getHours() % 12;
            const startMinutes = start.getMinutes() < 10 ? `0${start.getMinutes()}` : start.getMinutes();
            const startTime = `${startHours}:${startMinutes}`

            const endHours = end.getHours() === 12 ? 12 : end.getHours() % 12;
            const endMinutes = end.getMinutes() < 10 ? `0${end.getMinutes()}` : end.getMinutes();
            const endTime = `${endHours}:${endMinutes}`

            return (
              <ScheduleSetItem
                key={set._id}
                set={set}
                startTime={startTime}
                endTime={endTime}
                style={style}
                currentUser={this.props.currentUser}
                addUserToSet={this.props.addUserToSet}
                removeUserFromSet={this.props.removeUserFromSet}
                openSetModal={this.props.openSetModal}
                festivalId={this.props.festivalId}
              />
            )
          })
        }
      </div>
    )
  }

  render() {
    if (!this.props.currentUser) return null;
    return (
      <div className="schedule-container">
        <div className="schedule-header">
          {this.renderDays()}
          {this.renderKey()}
        </div>
        <div className="schedule">
          <h2 className="schedule-times">
            <div className="schedule-times-empty"><div /></div>
            <div className="schedule-times-12">12</div>
            <div className="schedule-times-1">1</div>
            <div className="schedule-times-2">2</div>
            <div className="schedule-times-3">3</div>
            <div className="schedule-times-4">4</div>
            <div className="schedule-times-5">5</div>
            <div className="schedule-times-6">6</div>
            <div className="schedule-times-7">7</div>
            <div className="schedule-times-8">8</div>
            <div className="schedule-times-9">9</div>
            <div className="schedule-times-10">10</div>
            <div className="schedule-times-11">11</div>
            <div className="schedule-times-12">12</div>
            <div className="schedule-times-1">1</div>
          </h2>
          <div className="schedule-row">
            <div className="schedule-stage">Coachella Stage</div>
            <div className="schedule-sets" />
            {this.renderSetsForStage('Coachella Stage')}
          </div>
          <div className="schedule-row">
            <div className="schedule-stage">Outdoor Theatre</div>
            <div className="schedule-sets" />
            {this.renderSetsForStage('Outdoor Theatre')}
          </div>
          <div className="schedule-row">
            <div className="schedule-stage">Mojave</div>
            <div className="schedule-sets" />
            {this.renderSetsForStage('Mojave')}
          </div>
          <div className="schedule-row">
            <div className="schedule-stage">Gobi</div>
            <div className="schedule-sets" />
            {this.renderSetsForStage('Gobi')}
          </div>
          <div className="schedule-row">
            <div className="schedule-stage">Sahara</div>
            <div className="schedule-sets" />
            {this.renderSetsForStage('Sahara')}
          </div>
          <div className="schedule-row">
            <div className="schedule-stage">Sonora</div>
            <div className="schedule-sets" />
            {this.renderSetsForStage('Sonora')}
          </div>
          <div className="schedule-row">
            <div className="schedule-stage">Yuma</div>
            <div className="schedule-sets" />
            {this.renderSetsForStage('Yuma')}
          </div>
        </div>
      </div>
    );
  }
}

export default Schedule;
