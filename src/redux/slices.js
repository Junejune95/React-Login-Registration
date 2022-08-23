import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};


const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      return { counter: state.counter + 1, payload: action.payload };
    },
    decrement: (state, action) => {
      return { counter: state.counter - 1, payload: action.payload };
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const counterRed = counterSlice.reducer;