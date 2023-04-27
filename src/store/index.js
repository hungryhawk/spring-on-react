import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "./burgerSlice";
import loginReducer from "./login/loginSlice";
import navbarReducer from "./navbarSlice";
import blockSlice from "./blocks/blockSlice";

export default configureStore({
  reducer: {
    burger: burgerReducer,
    login: loginReducer,
    navbar: navbarReducer,
    blocks: blockSlice,
  },
});
