import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = action.payload;
    },
    logout(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});
export default authSlice;

export const { login, logout } = authSlice.actions;

export const selectLogin = (state) => state.auth.isLoggedIn;
