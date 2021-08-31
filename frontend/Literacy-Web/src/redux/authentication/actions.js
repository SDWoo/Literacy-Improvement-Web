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
export function loginRequest(userID, userPassword) {
  return (dispatch) => {
    // Inform Login API is starting
    dispatch(login());

    let body = {
      userID: userID,
      userPassword: userPassword,
    };

    console.log(body);

    // API REQUEST
    return axios
      .post("http://localhost:8080/login", body)
      .then((response) => {
        // SUCCEED
        dispatch(loginSuccess(userID));
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

export function loginSuccess(userID) {
  return {
    type: LOGIN_SUCCESS,
    userID,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

/* GET STATUS */
export function getStatusRequest() {
  return (dispatch) => {
    // inform Get Status API is starting
    dispatch(getStatus());

    return axios
      .get("http://localhost:8080/getInfo")
      .then((response) => {
        dispatch(getStatusSuccess(response.data)); //HTTP 틍신을 통해 userId을 빋이옴
      })
      .catch((error) => {
        dispatch(getStatusFailure());
      });
  };
}

export function getStatus() {
  return {
    type: USER_VERIFICATION,
  };
}

export function getStatusSuccess(userID) {
  return {
    type: USER_VERIFICATION_SUCCESS,
    userID,
  };
}

export function getStatusFailure() {
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
