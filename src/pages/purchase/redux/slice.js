import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.cena;
      } else {
        state.itemsList.push({
          id: newItem.id,
          cena: newItem.cena,
          quantity: 1,
          totalPrice: newItem.cena,
          naziv: newItem.naziv,
        });
        state.totalQuantity++;
      }
    },
    removeToCart(state, action) {
      const id = action.payload;

      const existingItem = state.itemsList.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.cena;
      }
    },
    setProducts(state, action) {
      state.products = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});
export default cartSlice;
export const cartAction = cartSlice.actions;

export const { setProducts, setAllProducts, setSearch } = cartSlice.actions;
export const selectProducts = (state) => state.cart.products;
export const selectSearch = (state) => state.cart.search;
