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

export const fetchFestivals = festivals => dispatch => (
  FestivalApiUtil.fetchFestivals()
    .then(festivals => festivals.data.forEach(
      festival => dispatch(receiveFestival(festival))
    ))
);

export const addUserToSet = (festivalId, setId) => dispatch => (
  FestivalApiUtil.addUserToSet(festivalId, setId)
    .then(festival => dispatch(receiveFestival(festival.data)))
);