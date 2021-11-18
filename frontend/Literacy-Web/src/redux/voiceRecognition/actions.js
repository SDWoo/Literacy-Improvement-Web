import axios from "axios";
import {
  VOICE_RECOGNITION,
  VOICE_RECOGNITION_SUCCESS,
  VOICE_RECOGNITION_FAILURE,
} from "./types";

export function voiceRecognitionRequest(formData) {
  return (dispatch) => {
    dispatch(voiceRecognition());
    console.log(formData);
    return axios
      .post("http://localhost:8080/voiceRecognition", formData)
      .then((response) => {
        dispatch(voiceRecognitionSuccess(response.data));
      })
      .catch((error) => {
        dispatch(voiceRecognitionFailure());
      });
  };
}

export function voiceRecognition() {
  return {
    type: VOICE_RECOGNITION,
  };
}

export function voiceRecognitionSuccess(result) {
  return {
    type: VOICE_RECOGNITION_SUCCESS,
    result,
  };
}

export function voiceRecognitionFailure() {
  return {
    type: VOICE_RECOGNITION_FAILURE,
  };
}
