import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const existingProduct = state.cart.find(
        (product) => product.id === payload.id
      );
      if (existingProduct) {
        return;
      }
      state.cart.push(payload);
      state.totalQuantity++;
      state.totalAmount += payload.price;
    },
    updateCartItemQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingProduct = state.cart.find((product) => product.id === id);
      if (existingProduct) {
        existingProduct.quantity = quantity;
        existingProduct.totalPrice = existingProduct.price * quantity;
        state.totalQuantity = state.cart.reduce((total, product) => {
          return total + product.quantity;
        }, 0);
        state.totalAmount = state.cart.reduce((total, product) => {
          return total + product.totalPrice;
        }, 0);
      }
    },

    removeFromCart(state, { payload }) {
      const existingProduct = state.cart.find(
        (product) => product.id === payload
      );
      if (existingProduct) {
        state.cart = state.cart.filter((product) => product.id !== payload);
        state.totalQuantity -= existingProduct.quantity;
        state.totalAmount -= existingProduct.price * existingProduct.quantity;
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, updateCartItemQuantity, removeFromCart } =
  cartSlice.actions;
