import { configureStore } from "@reduxjs/toolkit";
import userApplicationReducer from "./userApplicationSlice";

export const reducer = { userApplication: userApplicationReducer };

export const store = configureStore({
  reducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
