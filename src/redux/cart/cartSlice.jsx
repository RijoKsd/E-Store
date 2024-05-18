import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: [],
    totalQuantity: 0,
    totalAmount: 0,
    isProductInCart: false,

};

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart(state,{payload} ){
            console.log(payload, "action");
            const existingProduct = state.cart.find((product)=> product.id === payload.id);
            console.log(existingProduct, "existingProduct");
            // if the product is already in the cart then dont add it again, also no need to update the total quantity and total amount as it is already in the cart we increase or decrese the product qulaity in  the cart page
            if(existingProduct){
                state.isProductInCart = true;
                return;
            }
            state.cart.push(payload);
            state.totalQuantity++;
            state.totalAmount += payload.price;
            
            
            
        }
    }
})

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;