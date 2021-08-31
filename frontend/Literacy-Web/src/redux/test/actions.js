import axios from "axios";

import { TEST, TEST_SUCCESS, TEST_FAILURE } from "./types";

export function testRequest() {
  return (dispatch) => {
    dispatch(test());
    let body = {
      test: "hi",
    };
    return axios
      .post("http://localhost:8080/signin", body)
      .then((response) => {
        //succeed
        dispatch(testSuccess(response.data));
      })
      .catch((error) => {
        //failed
        dispatch(testFailure());
      });
  };
}

export function test() {
  return {
    type: TEST,
  };
}

export function loginSuccess(testId) {
  return {
    type: TEST_SUCCESS,
    testId,
  };
}

export function loginFailure() {
  return {
    type: TEST_FAILURE,
  };
}
