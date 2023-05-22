import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/slice";
import arraySlice from "./product/slice";
import cartSlice from "./cart/slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    promenaNiza: arraySlice.reducer,
    cart: cartSlice.reducer,
  },
});
export default store;
