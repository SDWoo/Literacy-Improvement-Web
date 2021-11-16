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
    userInfo: [],
  },
  code: "INIT",
};

export default function kakaoAuth(state = initialState, action) {
  switch (action.type) {
    /* KAKAO Authentication and Login */
    case types.KAKAO_AUTHORIZE:
      return {
        ...state,
        kakakoAuth: {
          status: "WAITING",
        },
        kakaoLogin: {
          status: "WAITING",
        },
      };
    case types.KAKAO_AUTHORIZE_SUCCESS:
      return {
        ...state,
        kakakoAuth: {
          status: "SUCCESS",
        },
        kakaoLogin: {
          status: "SUCCESS",
        },
        status: {
          ...state.status,
          isLoggedIn: true,
          valid: true,
          userInfo: action.userInfo,
        },
      };
    case types.KAKAO_AUTHORIZE_FAILURE:
      return {
        ...state,
        kakaoAuth: {
          status: "FAILURE",
        },
        kakaoLogin: {
          status: "FAILURE",
        },
        status: {
          ...state.status,
          isLoggedIn: false,
          valid: false,
        },
      };

    /* KAKAO LOGOUT */
    case types.KAKAO_LOGOUT:
      return {
        ...state,
        kakakoAuth: {
          status: "INIT",
        },
        kakaoLogin: {
          status: "INIT",
        },
        status: {
          valid: false,
          isLoggedIn: false,
          userId: "INIT",
        },
      };

    // /* Check Session KAKAO Login info */
    // case types.KAKAO_VERIFICATION:
    //   return {
    //     ...state,
    //     status: {
    //       ...state.status,
    //     },
    //   };
    // case types.KAKAO_VERIFICATION_SUCCESS:
    //   return {
    //     ...state,
    //     kakakoAuth: {
    //       status: "SUCCESS",
    //     },
    //     kakaoLogin: {
    //       status: "SUCCESS",
    //     },
    //     status: {
    //       ...state.status,
    //       isLoggedIn: true,
    //       valid: true,
    //       userId: action.userId,
    //     },
    //   };
    // case types.KAKAO_VERIFICATION_FAILURE:
    //   return {
    //     ...state,
    //     kakaoAuth: {
    //       status: "FAILURE",
    //     },
    //     kakaoLogin: {
    //       status: "FAILURE",
    //     },
    //     status: {
    //       ...state.status,
    //       isLoggedIn: false,
    //       valid: false,
    //     },
    //   };

    /* default */
    default:
      return state;
  }
}
