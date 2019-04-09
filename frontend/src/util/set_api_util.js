import axios from 'axios';

export const addUserToSet = (festivalId, setId) => {
  return axios.post(`/api/festivals/${festivalId}/sets/${setId}/going`)
}

export const removeUserFromSet = (festivalId, setId) => {
  return axios.delete(`/api/festivals/${festivalId}/sets/${setId}/going`)
}