import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, name: "Akwetey Priscilla", role: "admin" },
    { id: 2, name: "John Doe", role: "user" },
  ],
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    removUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },

    changeUserRole: (state, action) => {
      const { userId, newRole } = action.payload;
      const existingUser = state.users.find((user) => user.id === userId);
      if (existingUser) {
        existingUser.role = newRole;
      }
    },
  },
});

export const { removerUser, changeUserRole } = UserSlice.actions;
export default UserSlice.reducer;
