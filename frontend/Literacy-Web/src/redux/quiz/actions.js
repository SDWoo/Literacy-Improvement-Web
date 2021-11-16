import axios from "axios";
import {
    GET_QUIZ_REQUEST,
    GET_QUIZ_REQUEST_SUCCESS,
    GET_QUIZ_REQUEST_FAILURE,
} from "./types"

export function quizRequest() {
return (dispatch) => {
    dispatch(quizRequestStatus());
    return axios
      .get("http://localhost:8080/quiz")
      .then((response) => {
        dispatch(quizRequestSuccess(response.data));
      })
      .catch((error) => {
        dispatch(quizRequestFailure());
      });
  };
}

export function quizRequestStatus() {
  return {
    type: GET_QUIZ_REQUEST,
  };
}

export function quizRequestSuccess(quizs) {
  return {
    type: GET_QUIZ_REQUEST_SUCCESS,
    quizs,
  };
}

export function quizRequestFailure() {
  return {
    type: GET_QUIZ_REQUEST_FAILURE,
  };
}