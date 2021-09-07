import * as types from "./types";

const initialState = {
  status: {
    valid: false,
    loading: false,
    dailyWordsList: [],
  },
};

export default function dailyWords(state = initialState, action) {
  switch (action.type) {
    case types.DAILY_WORDS_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          loading: true,
        },
      };
    case types.DAILY_WORDS_REQUEST_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          valid: true,
          loading: false,
          dailyWordsList: action.dailyWords,
        },
      };
    case types.DAILY_WORDS_REQUEST_FAILURE:
      return {
        ...state,
        status: {
          ...state.status,
          loading: false,
          valid: false,
        },
      };
    default:
      return state;
  }
}
