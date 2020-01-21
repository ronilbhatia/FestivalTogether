import * as FestivalApiUtil from '../util/festival_api_util';

export const RECEIVE_FESTIVAL = 'RECEIVE_FESTIVAL';

const receiveFestival = festival => ({
  type: RECEIVE_FESTIVAL,
  festival
});

export const fetchFestival = festivalId => dispatch => (
  FestivalApiUtil.fetchFestival(festivalId)
    .then(festival => dispatch(receiveFestival(festival.data)))
);

export const fetchFestivalByName = (name, year) => dispatch => (
  FestivalApiUtil.fetchFestivalByName(name, year)
    .then(festival => dispatch(receiveFestival(festival.data)))
);

export const fetchFestivals = festivals => dispatch => (
  FestivalApiUtil.fetchFestivals()
    .then(festivals => festivals.data.forEach(
      festival => dispatch(receiveFestival(festival))
    ))
);
