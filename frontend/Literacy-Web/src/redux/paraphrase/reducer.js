import * as types from "./types";

const initialState = {
  status: {
    valid: false,
    loading: false,
    result: "INIT",
  },
};

export default function paraphrase(state = initialState, action) {
  switch (action.type) {
    case types.PARAPHRASE_CHECK:
      return {
        ...state,
        status: {
          ...state.status,
          loading: true,
        },
      };
    case types.PARAPHRASE_CHECK_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          valid: true,
          loading: false,
          result: action.result,
        },
      };
    case types.PARAPHRASE_CHECK_FAILURE:
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
