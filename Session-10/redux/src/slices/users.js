import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    deleteUser: (state, action) => {
      const newUsers = state.users.filter((user) => {
        return user.id !== action.payload;
      });
      state.users = [...newUsers];
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
