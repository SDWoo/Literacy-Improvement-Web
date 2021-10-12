/* Kakao auth */
import * as types from "./types";

const initialState = {
  kakakoAuth: {
    status: "INIT",
  },
  kakaoLogin: {
    status: "INIT",
  },
  register: {
    status: "INIT",
    error: -1,
  },
  status: {
    valid: false,
    isLoggedIn: false,
    currentUser: "NONE",
    AUTHORIZE_CODE: "INIT",
  },
};

export default function kakaoAuth(state = initialState, action) {
  switch (action.type) {
    case types.KAKAO_AUTHORIZE:
      console.log("KAKAO_AUTHORIZE");
      return {
        ...state,
        kakakoAuth: {
          status: "WAITING",
        },
      };
    case types.KAKAO_AUTHORIZE_SUCCESS:
      console.log("KAKAO_AUTHORIZE_SUCCESS");
      return {
        ...state,
        kakakoAuth: {
          status: "SUCCESS",
        },
        status: {
          ...state.status,
          //AUTHORIZE_CODE: action.code,
        },
      };
    case types.KAKAO_AUTHORIZE_FAILURE:
      console.log("KAKAO_AUTHORIZE_FAILURE");
      return {
        ...state,
        kakaoLogin: {
          status: "FAILURE",
        },
      };
    default:
      return state;
  }
}
