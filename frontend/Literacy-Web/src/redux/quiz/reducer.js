import * as types from "./types";

const initialState = {
    status: {
        valid: false,
        loading: false,
        quizStatus: [],
    },
};

export default function quiz(state = initialState, action) {
    switch (action.type) {
        case types.GET_QUIZ_REQUEST:
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: true,
                },
            };
        case types.GET_QUIZ_REQUEST_SUCCESS:
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: false,
                    valid: true,
                    quizStatus: action.quizs,
                },
            };
        case types.GET_QUIZ_REQUEST_FAILURE:
            return {
                ...state,
                status: {
                    ...state.status,
                    valid: false,
                    loading: false,
                },
            };
        default:
            return state;
    }
}