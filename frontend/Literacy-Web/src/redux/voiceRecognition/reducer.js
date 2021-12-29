import * as types from "./types";

const initialState = {
  status: {
    valid: false,
    loading: false,
    result: "INIT",
  },
};

export default function voiceRecognition(state = initialState, action) {
  switch (action.type) {
    case types.VOICE_RECOGNITION:
      return {
        ...state,
        status: {
          ...state.status,
          loading: true,
        },
      };
    case types.VOICE_RECOGNITION_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          valid: true,
          loading: false,
          result: action.result,
        },
      };
    case types.VOICE_RECOGNITION_FAILURE:
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
