import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import jwt_decode from 'jwt-decode';

import configureStore from './store/store';
import Root from './components/Root';
import { setAuthToken } from './util/session_api_util';
import { logoutUser, receiveCurrentUser } from './actions/session_actions';
import * as serviceWorker from './serviceWorker';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // Check for token
  if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(receiveCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = '/login';
    }
  }
  // Grab root div and replace with react app
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.register();
});
