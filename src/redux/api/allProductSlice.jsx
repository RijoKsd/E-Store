// api https://fakestoreapi.com/products

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  loading: false,
  error: "",
};
export const fetchProducts = createAsyncThunk(
  "allProducts/fetchProducts",
  async (test) => {
    let url = test
      ? `https://fakestoreapi.com/products/category/${test}`
      : "https://fakestoreapi.com/products";

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    } }
);

const allProductSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.products = [];
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default allProductSlice.reducer;
