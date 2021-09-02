import axios from "axios";
import {
    SEARCH_WORDS_REQUEST,
    SEARCH_WORDS_REQUEST_SUCCESS,
    SEARCH_WORDS_REQUEST_FAILURE,
    DICTIONARY_WORDS_REQUEST,
    DICTIONARY_WORDS_REQUEST_SUCCESS,
    DICTIONARY_WORDS_REQUEST_FAILURE,
} from "./types";

// 화면 구성요소 GET
/* GET Main */
export function searchWordsRequest() {
    return (dispatch) => {
        dispatch(searchWordsRequestStatus());
        return axios
            .get("http://localhost:8080/searchWords")
            .then((response) => {
                dispatch(searchWordsRequestSuccess(response.data));
            })
            .catch((error) => {
                dispatch(searchWordsRequestFailure());
            });
    };
}

export function searchWordsRequestStatus() {
    return {
        type: SEARCH_WORDS_REQUEST,
    };
}

export function searchWordsRequestSuccess(searchWords) {
    return {
        type: SEARCH_WORDS_REQUEST_SUCCESS,
        searchWords,
    };
}

export function searchWordsRequestFailure() {
    return {
        type: SEARCH_WORDS_REQUEST_FAILURE,
    };
}
export function dictionaryWordsRequest() {
    return (dispatch) => {
        dispatch(dictionaryWordsRequestStatus());
        return axios
            .get("http://localhost:8080/dictionaryWords")
            .then((response) => {
                dispatch(dictionaryWordsRequestSuccess(response.data));
            })
            .catch((error) => {
                dispatch(dictionaryWordsRequestFailure());
            });
    };
}

export function dictionaryWordsRequestStatus() {
    return {
        type: DICTIONARY_WORDS_REQUEST,
    };
}

export function dictionaryWordsRequestSuccess(dictionaryWords) {
    return {
        type: DICTIONARY_WORDS_REQUEST_SUCCESS,
        dictionaryWords,
    };
}

export function dictionaryWordsRequestFailure() {
    return {
        type: DICTIONARY_WORDS_REQUEST_FAILURE,
    };
}

