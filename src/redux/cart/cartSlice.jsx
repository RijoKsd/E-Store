import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  totalQuantity: 0,
  totalAmount: 0,
};

// id(pin):2
// title(pin):"Mens Casual Premium Slim Fit T-Shirts "
// price(pin):22.3
// description(pin):"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket."
// category(pin):"men's clothing"
// image(pin):"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
// quantity(pin):1
// totalPrice(pin):22.3

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const existingProduct = state.cart.find(
        (product) => product.id === payload.id
      );
      console.log(existingProduct, "existingProduct");
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
        state.totalQuantity = state.cart.reduce((total, product) =>{
          return total + product.quantity;
        },0);
        state.totalAmount = state.cart.reduce((total,product)=>{
          return total + product.totalPrice;
        
        },0)
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

// addToCart: Adds an item to the cart.
// removeFromCart: Removes an item from the cart.
// updateCartItemQuantity: Updates the quantity of an item in the cart.
// clearCart: Clears the cart.

export default cartSlice.reducer;
export const { addToCart, updateCartItemQuantity, removeFromCart } =
  cartSlice.actions;
