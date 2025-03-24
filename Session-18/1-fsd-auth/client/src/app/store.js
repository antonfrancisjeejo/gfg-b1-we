import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/user";

const store = configureStore({
  reducer: {
    userInfo: userReducer,
  },
});
export default store;
