import * as FestivalApiUtil from '../util/festival_api_util';

export const RECEIVE_FESTIVAL = 'RECEIVE_FESTIVAL';

const receiveFestival = festival => ({
  type: RECEIVE_FESTIVAL,
  festival
});

export const fetchFestival = festival => dispatch => (
  FestivalApiUtil.fetchFestival(festival)
    .then(festival => dispatch(receiveFestival(festival.data)))
);
