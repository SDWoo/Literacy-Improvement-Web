import axios from "axios";
import {
  WORD_RANKING,
  WORD_RANKING_SUCCESS,
  WORD_RANKING_FAILURE,
  USER_RANKING,
  USER_RANKING_SUCCESS,
  USER_RANKING_FAILURE,
} from "./types";

export function wordRankingRequest() {
  return (dispatch) => {
    dispatch(wordRanking());
    return axios
      .post("http://localhost:8080/wordRank/")
      .then((response) => {
        dispatch(wordRankingSuccess(response.data));
        console.log(response.data);
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

export function userRankingRequest() {
  return (dispatch) => {
    dispatch(userRanking());
    return axios
      .post("http://localhost:8080/userRank/")
      .then((response) => {
        dispatch(userRankingSuccess(response.data));
      })
      .catch((error) => {
        dispatch(userRankingFailure());
      });
  };
}

export function userRanking() {
  return {
    type: USER_RANKING,
  };
}

export function userRankingSuccess(ranking) {
  return {
    type: USER_RANKING_SUCCESS,
    ranking,
  };
}

export function userRankingFailure() {
  return {
    type: USER_RANKING_FAILURE,
  };
}
