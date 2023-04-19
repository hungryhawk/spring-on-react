import { createSlice } from '@reduxjs/toolkit';

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    heading: '',
  },
  reducers: {
    setHeading(state, action) {
      state.heading = action.payload;
    },
  },
});

export const { setHeading } = navbarSlice.actions;

export default navbarSlice.reducer;
