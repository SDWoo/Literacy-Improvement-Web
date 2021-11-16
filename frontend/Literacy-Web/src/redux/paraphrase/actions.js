import axios from "axios";
import {
  PARAPHRASE_CHECK,
  PARAPHRASE_CHECK_SUCCESS,
  PARAPHRASE_CHECK_FAILURE,
} from "./types";

// 화면 구성요소 GET
/* GET Main */
export function paraphraseCheckRequest(body) {
  return (dispatch) => {
    dispatch(paraphraseCheck());
    return axios
      .post("http://localhost:8080/paraphraseCheck", body)
      .then((response) => {
        dispatch(paraphraseCheckSuccess(response.data.return_object.result));
      })
      .catch((error) => {
        dispatch(paraphraseCheckFailure());
      });
  };
}

export function paraphraseCheck() {
  return {
    type: PARAPHRASE_CHECK,
  };
}

export function paraphraseCheckSuccess(result) {
  return {
    type: PARAPHRASE_CHECK_SUCCESS,
    result,
  };
}

export function paraphraseCheckFailure() {
  return {
    type: PARAPHRASE_CHECK_FAILURE,
  };
}
