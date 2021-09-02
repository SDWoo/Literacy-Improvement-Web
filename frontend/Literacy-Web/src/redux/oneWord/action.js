import axios from "axios";
import {
    ONE_WORD_REQUEST,
    ONE_WORD_REQUEST_SUCCESS,
    ONE_WORD_REQUEST_FAILURE
} from "./types"


export function oneWordRequest() {
    return (dispatch) => {
        dispatch(oneWordRequestStatus());
        return axios
          .get("http://localhost:8080/oneWord")
          .then((response) => {
            dispatch(oneWordRequestSuccess(response.data));
          })
          .catch((error) => {
            dispatch(oneWordRequestFailure());
          });
      };
    }
    
    export function oneWordRequestStatus() {
      return {
        type: ONE_WORD_REQUEST,
      };
    }
    
    export function oneWordRequestSuccess(oneWord) {
      return {
        type: ONE_WORD_REQUEST_SUCCESS,
        oneWord,
      };
    }
    
    export function oneWordRequestFailure() {
      return {
        type: ONE_WORD_REQUEST_FAILURE,
      };
    }
    