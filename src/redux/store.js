import { configureStore } from "@reduxjs/toolkit";
import { counterRed } from "./slices";

export const store = configureStore({
  reducer: {
    coutnerReducer: counterRed,
  },
});