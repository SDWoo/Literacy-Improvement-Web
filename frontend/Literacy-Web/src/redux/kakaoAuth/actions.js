import axios from "axios";
import {
  KAKAO_AUTHORIZE,
  KAKAO_AUTHORIZE_SUCCESS,
  KAKAO_AUTHORIZE_FAILURE,
  KAKAO_LOGOUT,
  KAKAO_VERIFICATION,
  KAKAO_VERIFICATION_SUCCESS,
  KAKAO_VERIFICATION_FAILURE,
} from "./types";

/* KAKAO Authentication and Login */
export function kakaoAuthRequest(code) {
  return async (dispatch) => {
    // Inform Login API is starting
    dispatch(kakaoAuth());

    // API REQUEST
    return await axios
      .get("http://localhost:8080/kakaoAuth/", {
        params: {
          code: code,
        },
      })
      .then((response) => {
        // SUCCEED
        dispatch(kakaoAuthSuccess(response.data));
        // 성공하면 사용자ID 받아오기
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

export function kakaoAuthSuccess(userInfo) {
  return {
    type: KAKAO_AUTHORIZE_SUCCESS,
    userInfo,
  };
}

export function kakaoAuthFailure() {
  return {
    type: KAKAO_AUTHORIZE_FAILURE,
  };
}

/* Check Session KAKAO User */
export function checkSessionRequest() {
  return (dispatch) => {
    // inform Get Status API is starting
    dispatch(checkSession());

    return axios
      .get("http://localhost:8080/getInfo/")
      .then((response) => {
        dispatch(checkSessionSuccess(response.data)); //HTTP 틍신을 통해 userId을 빋이옴
      })
      .catch((error) => {
        dispatch(checkSessionFailure());
      });
  };
}

export function checkSession() {
  return {
    type: KAKAO_VERIFICATION,
  };
}

export function checkSessionSuccess(userInfo) {
  return {
    type: KAKAO_VERIFICATION_SUCCESS,
    userInfo,
  };
}

export function checkSessionFailure() {
  return {
    type: KAKAO_VERIFICATION_FAILURE,
  };
}

/* KAKAO Logout */
export function kakaoLogoutRequest() {
  return (dispatch) => {
    return axios.post("http://localhost:8080/kakaoLogout").then((response) => {
      dispatch(kakaoLogout());
    });
  };
}

export function kakaoLogout() {
  return {
    type: KAKAO_LOGOUT,
  };
}
