//import { combineReducers } from "redux";

import { createReducer } from "@reduxjs/toolkit";
import { decrement, increment } from "./actions";

const initialState = {
  counter: 0,
};



export const coutnerReducer = createReducer(initialState, {
  [increment]: (state, action) => {
    return { counter: state.counter + 1, payload: action.payload };
  },
  [decrement]: (state, action) => {
    return { counter: state.counter - 1, payload: action.payload };
  },
});

