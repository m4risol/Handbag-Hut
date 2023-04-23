import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import { products, product, cart } from "./reducers";

const reducer = {
  products,
  product,
  cart
};

let middleware = () =>
  getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger);

const store = configureStore({ reducer, middleware });

export default store;
