import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {
    id: 1,
    name: "Akwetey Priscilla",
    role: "user",
  },
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  // The reducers define how the state should change in response to specific actions:
  reducers: {
    login: (state, action) => {
      (state.isAuthenticated = true), (state.user = action.payload.user);
      state.token = action.payload.token;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
