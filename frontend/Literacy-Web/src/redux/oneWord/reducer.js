import * as types from "./types";

const initialState = {
    status: {
        valid: false,
        loading: false,
        WordStatus: [],
    },
};

export default function oneWord(state = initialState, action) {
    switch (action.type) {
        case types.ONE_WORD_REQUEST:
            return {
                ...status,
                status: {
                    ...state.status,
                    loading: true,
                },
            };
        case types.ONE_WORD_REQUEST_SUCCESS:
            return {
                ...status,
                status: {
                    ...state.status,
                    loading: false,
                    valid: true,
                    WordStatus: action.oneWord,
                },
            };
        case types.ONE_WORD_REQUEST_FAILURE:
            return {
                ...status,
                status: {
                    ...state.status,
                    valid: false,
                    loading: false,
                }
            }
    }
}