import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import  allProductReducer from "./api/allProductSlice"
import cartReducer from   './cart/cartSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
}


const rootReducer = combineReducers({
  theme: themeReducer,
  allProducts: allProductReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);


// export const store = configureStore({
//   reducer: {
//     theme: themeReducer,
//     allProducts: allProductReducer,
//     cart: cartReducer,
//   },
// });
