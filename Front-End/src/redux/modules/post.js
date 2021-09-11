import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  array: [],
};

// 액션
const PLUS = "test/PLUS";
const MINUS = "test/MINUS";
const ADD = "test/ADD";
const REMOVE = "test/REMOVE";

// 액션 크리에이터
const plus = createAction(PLUS);
const minus = createAction(MINUS);
const add = createAction(ADD);
const remove = createAction(REMOVE);

// thunk middleware- 함수형 액션
const thunkTest = (payload) => {
  return function (dispatch, getState) {
    dispatch(plus());
  };
};

// 리듀서
export default createReducer(initialState, {
  [PLUS]: (state, action) => {
    state.value++;
  },
  [MINUS]: (state, action) => {
    state.value--;
  },
  [ADD]: (state, action) => {
    state.array.push(action.payload.value);
  },
  [REMOVE]: (state, action) => {
    state.array.filter((item) => item.key !== action.payload.key);
  },
});

// 디스패치용 액션크리에이터
const actionCreators = {
  plus,
  minus,
  add,
  remove,
  thunkTest,
};

export { actionCreators };
