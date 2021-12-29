import * as types from "./types";

const initialState = {
  status: {
    valid: false,
    loading: false,
    valid2: false,
    loading2: false,
    wordRanking: [],
    userRanking: [],
  },
};

export default function ranking(state = initialState, action) {
  switch (action.type) {
    case types.WORD_RANKING:
      return {
        ...state,
        status: {
          ...state.status,
          loading: true,
        },
      };
    case types.WORD_RANKING_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          loading: false,
          valid: true,
          wordRanking: action.ranking,
        },
      };
    case types.WORD_RANKING_FAILURE:
      return {
        ...state,
        status: {
          ...state.status,
          valid: false,
          loading: false,
        },
      };
    case types.USER_RANKING:
      return {
        ...state,
        status: {
          ...state.status,
          loading2: true,
        },
      };
    case types.USER_RANKING_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          loading2: false,
          valid2: true,
          userRanking: action.ranking,
        },
      };
    case types.USER_RANKING_FAILURE:
      return {
        ...state,
        status: {
          ...state.status,
          valid2: false,
          loading2: false,
        },
      };
    default:
      return state;
  }
}
