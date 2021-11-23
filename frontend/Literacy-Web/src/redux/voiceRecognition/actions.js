import axios from "axios";
import {
  VOICE_RECOGNITION,
  VOICE_RECOGNITION_SUCCESS,
  VOICE_RECOGNITION_FAILURE,
} from "./types";

export function voiceRecognitionRequest(data) {
  return (dispatch) => {
    dispatch(voiceRecognition());

    // audio file formData로 줄때
    const formData = new FormData();
    formData.append("audioFile", data);

    // audio base64 데이터로 줄 때
    let body = {
      audio: data,
    };
    console.log(formData.get("audioFile"));
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
