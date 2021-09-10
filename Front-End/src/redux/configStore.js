import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import test from "./modules/test";
import user from "./modules/user";

// 루트리듀서
const rootReducer = {
  test,
  user,
};

// 스토어 생성
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
