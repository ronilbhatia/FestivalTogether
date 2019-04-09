import axios from 'axios';

export const fetchFestivals = () => {
  return axios.get('/api/festivals/');
};

export const fetchFestival = festivalId => {
  return axios.get(`/api/festivals/${festivalId}`);
};

export const addUserToSet = (festivalId, setId) => {
  return axios.post(`/api/festivals/${festivalId}/sets/${setId}/going`)
}

export const removeUserFromSet = (festivalId, setId) => {
  return axios.delete(`/api/festivals/${festivalId}/sets/${setId}/going`)
}