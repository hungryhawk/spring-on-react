import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  active: false,
};

const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    changeBurger: (state, action) => {
      state.active = !state.active;
    },
  },
});

export const { changeBurger } = burgerSlice.actions;

export default burgerSlice.reducer;
