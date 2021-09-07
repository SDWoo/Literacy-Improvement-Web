import axios from "axios";
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_VERIFICATION,
  USER_VERIFICATION_SUCCESS,
  USER_VERIFICATION_FAILURE,
  LOGOUT,
} from "./types";

/* LOGIN */
export function loginRequest(userId, userPassword) {
  return (dispatch) => {
    // Inform Login API is starting
    dispatch(login());

    let body = {
      userId: userId,
      userPassword: userPassword,
    };

    // API REQUEST
    return axios
      .post("http://localhost:8080/login", body)
      .then((response) => {
        // SUCCEED
        dispatch(loginSuccess(userId));
      })
      .catch((error) => {
        // FAILED
        dispatch(loginFailure());
      });
  };
}

export function login() {
  return {
    type: LOGIN,
  };
}

export function loginSuccess(userId) {
  return {
    type: LOGIN_SUCCESS,
    userId,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

/* GET STATUS */
export function checkUserRequest() {
  return (dispatch) => {
    // inform Get Status API is starting
    dispatch(checkUser());

    return axios
      .get("http://localhost:8080/checkUser")
      .then((response) => {
        dispatch(checkUserSuccess(response.data)); //HTTP 틍신을 통해 userId을 빋이옴
      })
      .catch((error) => {
        dispatch(checkUserFailure());
      });
  };
}

export function checkUser() {
  return {
    type: USER_VERIFICATION,
  };
}

export function checkUserSuccess(userId) {
  return {
    type: USER_VERIFICATION_SUCCESS,
    userId,
  };
}

export function checkUserFailure() {
  return {
    type: USER_VERIFICATION_FAILURE,
  };
}

/* Logout */
export function logoutRequest() {
  return (dispatch) => {
    return axios.post("http://localhost:8080/logout").then((response) => {
      dispatch(logout());
    });
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
