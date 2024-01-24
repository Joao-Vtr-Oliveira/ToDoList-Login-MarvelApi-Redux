import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import Login from "./reducer/Login";
import Marvel from "./reducer/MarvelSlice";

const store = configureStore({
  reducer: {
    login: Login,
    marvel: Marvel,
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;