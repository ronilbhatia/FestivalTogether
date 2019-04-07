import axios from 'axios';

export const fetchFestival = festivalId => {
  return axios.get(`/api/festivals/${festivalId}`);
};
