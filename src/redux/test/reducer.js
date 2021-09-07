import * as types from "./types";

const initialState = {
  test: {
    status: "test",
    testId: "INIT",
  },
};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case types.TEST:
      return {
        ...state,
        test: {
          status: "WAITING",
        },
      };
    case types.TEST_SUCCESS:
      return {
        ...state,
        test: {
          status: "SUCCESS",
          testId: action.testId,
        },
      };
    case types.TEST_FAILURE:
      return {
        ...state,
        test: {
          status: "FAILURE",
        },
      };
    default:
      return state;
  }
}
