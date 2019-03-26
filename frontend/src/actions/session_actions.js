import * as APIUtil from "../util/session_api_util";
import jwt_decode from "jwt-decode";

export const GET_ERRORS = "GET_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

// Helper method to attach token to localStorage after registering or logging in
const attachToken = (token, dispatch) => {
  // Save to localStorage
  localStorage.setItem("jwtToken", token);
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

// Register User
export const registerUser = userData => dispatch => {
  APIUtil.registerUser(userData)
    .then(res => {
      const { token } = res.data;
      attachToken(token, dispatch);
    })
    .catch(err => {
      debugger;
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
}

// Login User
export const loginUser = userData => dispatch => {
  APIUtil.loginUser(userData)
    .then(res => {
      const { token } = res.data;
      attachToken(token, dispatch)
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

// Log Out User
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  APIUtil.setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(receiveCurrentUser({}));
};
