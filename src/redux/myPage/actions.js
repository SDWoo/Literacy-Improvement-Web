import axios from "axios";
import {
    SEARCH_WORDS_REQUEST,
    SEARCH_WORDS_REQUEST_SUCCESS,
    SEARCH_WORDS_REQUEST_FAILURE,
    DICTIONARY_WORDS_REQUEST,
    DICTIONARY_WORDS_REQUEST_SUCCESS,
    DICTIONARY_WORDS_REQUEST_FAILURE,
    WORD_DELETE_REQUEST,
    WORD_DELETE_REQUEST_SUCCESS,
    WORD_DELETE_REQUEST_FAILURE,
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
export function dictionaryWordsRequest(word) {
    return (dispatch) => {
        dispatch(dictionaryWordsRequestStatus());
        console.log(word)

        if (word === false) {
            return axios
                .get("http://localhost:8080/myPage")
                .then((response) => {
                    dispatch(dictionaryWordsRequestSuccess(response.data))
                    console.log(response.data);
                })
                .catch((error) => {
                    dispatch(dictionaryWordsRequestFailure());
                });
        }
        else {
            return axios
                .get("http://localhost:8080/addToNote", {
                    params: {
                        q: word
                    }
                })
                .then((response) => {
                    dispatch(addToNoteRequestSuccess())
                })
                .catch((error) => {
                    dispatch(dictionaryWordsRequestFailure())
                });
        };
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


export function addToNoteRequestSuccess() {
    return {
        type: DICTIONARY_WORDS_REQUEST_SUCCESS,
    };
}

export function wordDeleteRequest(word) {
    return (dispatch) => {
        dispatch(wordDeleteRequestStatus());
        return axios
            .get("http://localhost:8080/deleteFromNote", {
                params: {
                    word: word,
                },
            })
            .then((response) => {
                dispatch(wordDeleteRequestSuccess(response.data));
                console.log(response.data);
            })
            .catch((error) => {
                dispatch(wordDeleteRequestFailure());
            });
    };
}

export function wordDeleteRequestStatus() {
    return {
        type: WORD_DELETE_REQUEST,
    };
}

export function wordDeleteRequestSuccess(deletedDictionary) {
    return {
        type: WORD_DELETE_REQUEST_SUCCESS,
        deletedDictionary,
    };
}

export function wordDeleteRequestFailure() {
    return {
        type: WORD_DELETE_REQUEST_FAILURE,
    };
}