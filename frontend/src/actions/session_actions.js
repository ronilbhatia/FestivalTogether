import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const GET_ERRORS = 'GET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

// Helper method to attach token to localStorage after registering or logging in
const attachToken = (token, dispatch) => {
  // Save to localStorage
  localStorage.setItem('jwtToken', token);
  // Set token to Auth header
  APIUtil.setAuthToken(token);
  // Decode token to get user data
  const decoded = jwt_decode(token);
  // Set current user
  dispatch(receiveCurrentUser(decoded));
};

// Set logged in user
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  payload: currentUser
});

// Remove logged in user
export const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

// Register User
export const registerUser = userData => dispatch => {
  return APIUtil.registerUser(userData)
    .then(res => {
      const { token } = res.data;
      attachToken(token, dispatch);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });

      // Return a rejected promise to stop subsequent callback to close session modal
      return Promise.reject(err);
    });
};

// Login User
export const loginUser = userData => dispatch => {
  userData.email = userData.email.toLowerCase();
  return APIUtil.loginUser(userData)
    .then(res => {
      const { token } = res.data;
      attachToken(token, dispatch);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });

      // Return a rejected promise to stop subsequent callback to close session modal
      return Promise.reject(err);
    });
};

// Log Out User
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  APIUtil.setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(removeCurrentUser());
};
