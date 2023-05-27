import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/slice";
import arraySlice from "./product/slice";
import cartSlice from "./cart/slice";
import arrayMarket from "./pijaca/slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    promenaNiza: arraySlice.reducer,
    cart: cartSlice.reducer,
    nizMarket: arrayMarket.reducer,
  },
});
export default store;
