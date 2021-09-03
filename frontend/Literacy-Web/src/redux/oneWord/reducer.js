import * as types from "./types";

const initialState = {
    status: {
        valid: false,
        loading: false,
        wordStatus: [],
    },
};

export default function oneWord(state = initialState, action) {
    switch (action.type) {
        case types.ONE_WORD_REQUEST:
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: true,
                },
            };
        case types.ONE_WORD_REQUEST_SUCCESS:
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: false,
                    valid: true,
                    wordStatus: action.oneWord,
                },
            };
        case types.ONE_WORD_REQUEST_FAILURE:
            return {
                ...state,
                status: {
                    ...state.status,
                    valid: false,
                    loading: false,
                }
            };
        default:
            return state;
    }
}