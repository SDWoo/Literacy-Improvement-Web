import axios from "axios";
import {
  MORPHEME_CHECK,
  MORPHEME_CHECK_SUCCESS,
  MORPHEME_CHECK_FAILURE,
} from "./types";

// 화면 구성요소 GET
/* GET Main */
export function morphemeCheckRequest(body) {
  return (dispatch) => {
    dispatch(morphemeCheck());
    return axios
      .post("http://localhost:8080/searchWord", body)
      .then((response) => {
        dispatch(morphemeCheckSuccess(response.data));
      })
      .catch((error) => {
        dispatch(morphemeCheckFailure());
      });
  };
}

export function morphemeCheck() {
  return {
    type: MORPHEME_CHECK,
  };
}

export function morphemeCheckSuccess(result) {
  return {
    type: MORPHEME_CHECK_SUCCESS,
    result,
  };
}

export function morphemeCheckFailure() {
  return {
    type: MORPHEME_CHECK_FAILURE,
  };
}
