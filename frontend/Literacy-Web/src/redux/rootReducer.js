/* 모든 reducer를 store.js에 넘겨주기 위해 모아주는 곳 */
import { combineReducers } from "redux";
import authentication from "./authentication/reducer";
import register from "./signup/reducer";
import dailyWords from "./dailyWords/reducer";
import myPage from "./myPage/reducer";
import oneWord from "./oneWord/reducer";
import paraphrase from "./paraphrase/reducer";
import morpheme from "./morpheme/reducer";
import ranking from "./ranking/reducer";
import kakaoAuth from "./kakaoAuth/reducer";
import quiz from "./quiz/reducer";
import voiceRecognition from "./voiceRecognition/reducer";

const rootReducer = combineReducers({
  register: register,
  authentication: authentication,
  dailyWords: dailyWords,
  myPage: myPage,
  oneWord: oneWord,
  paraphrase: paraphrase,
  morpheme: morpheme,
  ranking: ranking,
  kakaoAuth: kakaoAuth,
  quiz: quiz,
  voiceRecognition: voiceRecognition,
});

export default rootReducer;
