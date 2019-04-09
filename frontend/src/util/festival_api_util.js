import axios from 'axios';

export const fetchFestivals = () => {
  return axios.get('/api/festivals/');
};

export const fetchFestival = festivalId => {
  return axios.get(`/api/festivals/${festivalId}`);
};
