import axios from "axios";
import {
  KAKAO_AUTHORIZE,
  KAKAO_AUTHORIZE_SUCCESS,
  KAKAO_AUTHORIZE_FAILURE,
} from "./types";

/* KAKAO AUTH */
export function kakaoAuthRequest(code) {
  return (dispatch) => {
    // Inform Login API is starting
    dispatch(kakaoAuth());
    let body = {
      code: code,
    };
    console.log(body);

    // API REQUEST
    return axios
      .get("http://localhost:8080/kakaoAuth", body)
      .then((response) => {
        // SUCCEED
        dispatch(kakaoAuthSuccess());
        console.log(response.data);
      })
      .catch((error) => {
        // FAILED
        dispatch(kakaoAuthFailure());
      });
  };
}

export function kakaoAuth() {
  return {
    type: KAKAO_AUTHORIZE,
  };
}

export function kakaoAuthSuccess() {
  return {
    type: KAKAO_AUTHORIZE_SUCCESS,
  };
}

export function kakaoAuthFailure() {
  return {
    type: KAKAO_AUTHORIZE_FAILURE,
  };
}
