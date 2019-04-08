import React, { Component } from 'react';
import ScheduleSetItem from './schedule_set_item';

class Schedule extends Component {
  componentDidMount() {
    this.props.fetchFestival(this.props.festivalId);
  }

  renderSetsForStage(stage) {
    const { sets } = this.props;
    return (
      <div className="schedule-set-item-container">
        {
          sets[stage].map(set => {
            const start = new Date(set.start);
            const end = new Date(set.end);
            const leftOffset =
              (((start.getHours() - 12) * 150) + (start.getMinutes() * (150 / 60)));
            const rightOffset =
              (((end.getHours() - 12) * 150) + (end.getMinutes() * (150 / 60)));
            const width = rightOffset - leftOffset;

            const style = {
              left: `${leftOffset + 300}px`,
              width: `${width}px`
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
              />
            )
          })
        }
      </div>
    )
  }

  render() {
    return (
      <div className="schedule-container">
        <div className="schedule">
          <h2 className="schedule-times">
            <div className="schedule-times-empty"></div>
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
