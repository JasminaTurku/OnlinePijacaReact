import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/slice";
import cartSlice from "../pages/purchase/redux/slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export default store;
