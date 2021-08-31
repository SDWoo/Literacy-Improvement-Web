/* 모든 reducer를 store.js에 넘겨주기 위해 모아주는 곳 */
import { combineReducers } from "redux";
import test from "./test/reducer";

const rootReducer = combineReducers({
  test: test,
});

export default rootReducer;
