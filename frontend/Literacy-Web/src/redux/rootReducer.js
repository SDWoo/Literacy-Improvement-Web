/* 모든 reducer를 store.js에 넘겨주기 위해 모아주는 곳 */
import { combineReducers } from "redux";
import authentication from "./authentication/reducer";
import register from "./signup/reducer";
import dailyWords from "./dailyWords/reducer";
import myPage from "./myPage/reducer";
import oneWord from "./oneWord/reducer";
import paraphrase from "./paraphrase/reducer";
import morpheme from "./morpheme/reducer";

const rootReducer = combineReducers({
  register: register,
  authentication: authentication,
  dailyWords: dailyWords,
  myPage: myPage,
  oneWord: oneWord,
  paraphrase: paraphrase,
  morpheme: morpheme,
});

export default rootReducer;
