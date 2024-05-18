import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: [],
    totalQuantity: 0,
    totalAmount: 0,

};

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart(state,{payload} ){
            console.log(payload, "action");
            const existingProduct = state.cart.find((product)=> product.id === payload.id);
            console.log(existingProduct, "existingProduct");
            if(existingProduct){
                return;
            
            }
            state.cart.push(payload);
            state.totalQuantity++;
            state.totalAmount += payload.price;
        },
      

    }
})

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;