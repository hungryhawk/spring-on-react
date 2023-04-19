import { configureStore } from '@reduxjs/toolkit';
import burgerReducer from './burgerSlice';
import loginReducer from './loginSlice';
import navbarReducer from './navbarSlice';
import filterSlice from './filterSlice';

export default configureStore({
  reducer: {
    burger: burgerReducer,
    login: loginReducer,
    navbar: navbarReducer,
    filter: filterSlice,
  },
});
