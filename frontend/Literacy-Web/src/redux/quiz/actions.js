import axios from "axios";
import {
    GET_QUIZ_REQUEST,
    GET_QUIZ_REQUEST_SUCCESS,
    GET_QUIZ_REQUEST_FAILURE,
    POST_QUIZ_RESULT,
    POST_QUIZ_RESULT_SUCCESS,
    POST_QUIZ_RESULT_FAILURE
} from "./types"

export function quizRequest() {
return (dispatch) => {
    dispatch(quizRequestStatus());
    return axios
      .get("http://localhost:8080/wordQuiz")
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

export function postQuizResult(score) {
  return (dispatch) => {
      dispatch(postQuizResultStatus());
      
      return axios
        .post("http://localhost:8080/getQuizResult", score)
        .then((response) => {
          dispatch(postQuizResultSuccess(response.data));
        })
        .catch((error) => {
          dispatch(postQuizResultFailure());
        });
    };
  }
  
  export function postQuizResultStatus() {
    return {
      type: POST_QUIZ_RESULT,
    };
  }
  
  export function postQuizResultSuccess() {
    return {
      type: POST_QUIZ_RESULT_SUCCESS,
    };
  }
  
  export function postQuizResultFailure() {
    return {
      type: POST_QUIZ_RESULT_FAILURE,
    };
  }