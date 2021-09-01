import axios from "axios";
import {
  DAILY_WORDS_REQUEST,
  DAILY_WORDS_REQUEST_SUCCESS,
  DAILY_WORDS_REQUEST_FAILURE,
} from "./types";

// 화면 구성요소 GET
/* GET Main */
export function dailyWordsRequest() {
  return (dispatch) => {
    dispatch(dailyWordsRequestStatus());
    console.log(2);
    return axios
      .get("http://localhost:8080/dailyWords", {})
      .then((response) => {
        dispatch(dailyWordsRequestSuccess(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        dispatch(dailyWordsRequestFailure());
      });
  };
}

export function dailyWordsRequestStatus() {
  return {
    type: DAILY_WORDS_REQUEST,
  };
}

export function dailyWordsRequestSuccess(dailyWords) {
  return {
    type: DAILY_WORDS_REQUEST_SUCCESS,
    dailyWords,
  };
}

export function dailyWordsRequestFailure() {
  return {
    type: DAILY_WORDS_REQUEST_FAILURE,
  };
}
