import axios from "axios";
import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  DUPLICATE_ID,
  DUPLICATE_ID_NOT,
  DUPLICATE_ID_YES,
} from "./types";

/* DUPLICATE_ID USER ID */

export function duplicateIdCheckRequest(userID) {
  return (dispatch) => {
    // Inform Register API is starting
    dispatch(duplicateIdCheck());

    return axios
      .post("http://localhost:8080/duplicateIdCheck", userID)
      .then((response) => {
        // useable this userID
        dispatch(duplicateIdNot());
      })
      .catch((error) => {
        // request change userID
        dispatch(duplicateIdYes());
      });
  };
}

export function duplicateIdCheck() {
  return {
    type: DUPLICATE_ID,
  };
}

export function duplicateIdNot() {
  return {
    type: DUPLICATE_ID_NOT,
  };
}

export function duplicateIdYes() {
  return {
    type: DUPLICATE_ID_YES,
  };
}

/* REGISTER */
export function registerRequest(body) {
  return (dispatch) => {
    // Inform Register API is starting
    dispatch(register());

    console.log(body);

    return axios
      .post("http://localhost:8080/register", body)
      .then((response) => {
        // SUCCEED
        dispatch(registerSuccess());
      })
      .catch((error) => {
        dispatch(registerFailure());
      });
  };
}

export function register() {
  return {
    type: REGISTER,
  };
}

export function registerSuccess() {
  return {
    type: REGISTER_SUCCESS,
  };
}

export function registerFailure() {
  return {
    type: REGISTER_FAILURE,
  };
}
