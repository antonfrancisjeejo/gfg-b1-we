import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/users";
import companyReducer from "../slices/company";

const store = configureStore({
  reducer: {
    usersInfo: usersReducer,
    companiesInfo: companyReducer,
  },
});

export default store;
