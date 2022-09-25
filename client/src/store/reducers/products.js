import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    products: null,
    error: false,
  },
  reducers: {
    fetching: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    fetched: (state, { payload }) => {
      state.isLoading = false;
      state.error = false;
      state.products = action.payload;
    },
    failure: (state, { payload }) => {
      state.error = action.payload;
    },
  },
});

export const { fetching, fetched, failure } = slice.actions;

export default slice.reducer;
