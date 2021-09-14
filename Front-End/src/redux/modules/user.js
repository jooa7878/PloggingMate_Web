import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  is_login: null,
  token: null,
};

// 액션
const LOG_OUT = "user/LOG_OUT";
const GET_USER = "user/GET_USER";
const SET_USER = "user/SET_USER";

// 액션 크리에이터
const logOut = createAction(LOG_OUT);
const getUser = createAction(GET_USER);
const setUser = createAction(SET_USER);

// thunk middleware- 함수형 액션
const login = (id, pwd) => {
  return async function (dispatch, getState) {
    const data = await axios.post("/sign-in", { username: id, password: pwd });
    const { accessToken } = data.jwt;
  };
};

const signup = (id, pwd, user_name) => {
  return function (dispatch, getState) {
    console.log("signup");
    console.log(id, pwd, user_name);
  };
};

const loginCheck = () => {
  return function (dispatch, getState) {
    console.log("loginCheck");
  };
};

const logout = () => {
  return function (dispatch, getState) {
    console.log("logout");
  };
};

// 리듀서
export default createReducer(initialState, {
  [GET_USER]: (state, action) => {},
  [SET_USER]: (state, action) => {
    state.is_login = true;
  },
  [LOG_OUT]: (state, action) => {
    state.is_login = false;
  },
});

// 디스패치용 액션크리에이터
const actionCreators = {
  login,
  signup,
  loginCheck,
  logout,
};

export { actionCreators };
