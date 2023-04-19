import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  open: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeLogin: (state, action) => {
      state.open = !state.open;
    },
  },
});

export const { changeLogin } = loginSlice.actions;

export default loginSlice.reducer;
