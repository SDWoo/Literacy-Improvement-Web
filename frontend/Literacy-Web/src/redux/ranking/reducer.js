import * as types from "./types";

const initialState = {
    status: {
        valid: false,
        loading: false,
        wordRanking: [],
    },
};

export default function ranking(state = initialState, action) {
    switch (action.type) {
        case types.WORD_RANKING:
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: true,
                },
            };
        case types.WORD_RANKING_SUCCESS:
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: false,
                    valid: true,
                    wordRanking: action.ranking,
                },
            };
        case types.WORD_RANKING_FAILURE:
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