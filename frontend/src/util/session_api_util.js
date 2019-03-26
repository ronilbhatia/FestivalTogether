import axios from "axios";

export const setAuthToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const registerUser = userData => {
  return axios.post("/api/users/register", userData);
}

// Login - Get User Token
export const loginUser = userData => {
  return axios.post("/api/users/login", userData);
};

