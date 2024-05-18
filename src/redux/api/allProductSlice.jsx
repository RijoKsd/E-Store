// api https://fakestoreapi.com/products

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  loading: true,
  error: "",
};
export const fetchProducts = createAsyncThunk(
  "allProducts/fetchProducts",
  async () => {
    const API_URL = "https://fakestoreapi.com/products";
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.log(error.message)
      
    } }
);

const allProductSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.products = [];
      state.loading = false;
      state.error = "Failed to fetch data, Please check your network "
    });
  },
});

export default allProductSlice.reducer;
