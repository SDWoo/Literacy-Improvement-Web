import axios from "axios";
import {
    WORD_RANKING,
    WORD_RANKING_SUCCESS,
    WORD_RANKING_FAILURE
} from "./types"


export function wordRankingRequest() {
    return (dispatch) => {
        dispatch(wordRanking());
        return axios
            .post("http://localhost:8080/wordRank/"
            )
            .then((response) => {
                dispatch(wordRankingSuccess(response.data));
            })
            .catch((error) => {
                dispatch(wordRankingFailure());
            });
    };
}

export function wordRanking() {
    return {
        type: WORD_RANKING,
    };
}

export function wordRankingSuccess(ranking) {
    return {
        type: WORD_RANKING_SUCCESS,
        ranking,
    };
}

export function wordRankingFailure() {
    return {
        type: WORD_RANKING_FAILURE,
    };
}
