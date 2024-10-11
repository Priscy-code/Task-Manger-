import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../constants/authSlice";
import taskReducer from "../constants/taskSlice";

const Authstore = configureStore({
  reducer: {
    auth: authReducer,
    task: taskReducer,
  },
});

export default Authstore;
