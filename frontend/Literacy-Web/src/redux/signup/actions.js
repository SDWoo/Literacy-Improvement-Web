import axios from "axios";
import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE } from "./types";

/* REGISTER */
export function registerRequest(body) {
  return (dispatch) => {
    // Inform Register API is starting
    dispatch(register());

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
