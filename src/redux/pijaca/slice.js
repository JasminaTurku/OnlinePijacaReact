import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

const arrayMarket = createSlice({
  name: "nizMarket",
  initialState: initialState,
  reducers: {
    setPijaca(state, action) {
      state.pijace = action.payload;
    },
  },
});

export default arrayMarket;
export const { setPijaca } = arrayMarket.actions;
