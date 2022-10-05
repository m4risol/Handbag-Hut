import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { logger } from 'redux-logger';
import { products } from "./reducers";

export const store = configureStore({
  reducer: {
    products,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export default store;
