import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import  allProductReducer from "./api/allProductSlice"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    allProducts: allProductReducer,
  },
});
