import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import burgerReducer from "./burgerSlice";
import navbarReducer from "./navbarSlice";
import blockSlice from "./blocks/blockSlice";

export default configureStore({
  reducer: {
    burger: burgerReducer,
    navbar: navbarReducer,
    blocks: blockSlice,
    auth: authReducer,
  },
});
