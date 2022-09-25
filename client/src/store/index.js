import { configureStore } from '@reduxjs/toolkit';
import { products } from './reducers';

export const store = configureStore({
  reducer: {
    products
  },
})

export default store;

