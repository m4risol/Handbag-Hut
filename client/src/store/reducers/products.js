import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "products",
  initialState: {
    action: null,
    data: null,
    error: null,
    success: null,
  },
  reducers: {
    fetching: (state, { type }) => {
      state.action = type;
      state.error = null;
      state.success = null;
    },
    fetched: (state, { type, payload }) => {
      state.data = payload.data;
      state.action = type;
      state.error = payload.error;
      state.success = payload.success;
    },
    failure: (state, { type, payload }) => {
      state.action = type;
      state.error = payload.error;
      state.success = payload.success;
    },
  },
});

export const { fetching, fetched, failure } = slice.actions;

export default slice.reducer;

export const getProducts = () => async (dispatch) => {
	try {
		dispatch(fetching());

    const response = await fetch('/api/bags');
    const data = await response.json();
    console.log(data)
    dispatch(fetched(data));
    console.log(data)

	} catch (error) {
		dispatch(failure());
	}
};
