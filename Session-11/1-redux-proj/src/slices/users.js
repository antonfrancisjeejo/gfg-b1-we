import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      let newUsers = [...state.users, action.payload];
      localStorage.setItem("users", JSON.stringify(newUsers));
      state.users = newUsers;
    },
    deleteUser: (state, action) => {
      const newUsers = state.users.filter((user) => {
        return user.id !== action.payload;
      });
      localStorage.setItem("users", JSON.stringify(newUsers));
      state.users = [...newUsers];
    },
    setUsers: (state, action) => {
      state.users = [...action.payload];
    },
  },
});

export const { addUser, deleteUser, setUsers } = usersSlice.actions;

export default usersSlice.reducer;
