import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    action: null,
    error: null,
    success: null,
  },
  reducers: {
    addItem: (state, { payload }) => {
      return {
        ...state,
        items: [...state.items, payload],
      };
    },
    fetching: (state, { type }) => {
      state.action = type;
      state.error = null;
      state.success = null;
    },
    fetched: (state, { payload, type }) => {
      state.items = payload.items;
      state.action = type;
      state.error = null;
      state.success = true;
    },
    failure: (state, { payload, type }) => {
      state.action = type;
      state.error = payload;
      state.success = null;
    },
  },
});

const { addItem, fetching, fetched, failure } = slice.actions;

export default slice.reducer;

export const addToCart = (product) => async (dispatch, getState) => {
  try {
    dispatch(fetching());
    dispatch(addItem(product));
    dispatch(fetched({ items: getState().cart.items }));
  } catch (error) {
    dispatch(failure(error));
  }
};