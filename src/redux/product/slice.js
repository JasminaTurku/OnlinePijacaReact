import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

const arraySlice = createSlice({
  name: "promenaNiza",
  initialState: initialState,
  reducers: {
    setArray(state, action) {
      state.niz = action.payload;
    },
  },
});

export default arraySlice;

export const { setArray } = arraySlice.actions;
export const selectArray = (state) => state.promenaNiza.niz;
