import * as types from "./types";

const initialState = {
    status: {
        valid: false,
        loading: false,
        item: [],
    },
};

export default function morpheme(state = initialState, action) {
    switch (action.type) {
        case types.MORPHEME_CHECK:
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: true,
                },
            };
        case types.MORPHEME_CHECK_SUCCESS:
            return {
                ...state,
                status: {
                    ...state.status,
                    valid: true,
                    loading: false,
                    item: action.result,
                },
            };
        case types.MORPHEME_CHECK_FAILURE:
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: false,
                    valid: false,
                },
            };
        default:
            return state;
    }
}