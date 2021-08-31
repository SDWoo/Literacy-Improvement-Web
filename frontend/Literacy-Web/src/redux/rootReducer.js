/* 모든 reducer를 store.js에 넘겨주기 위해 모아주는 곳 */
import { combineReducers } from "redux";
import test from "./test/reducer";
import authentication from "./authentication/reducer";
import register from "./signup/reducer";

const rootReducer = combineReducers({
  register: register,
  authentication: authentication,
});

export default rootReducer;
