import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import { Provider } from "react-redux";
import Authstore from "./stores/StoreReducer";
import PrivateRoute from "./utils/PrivateRoute";
import TaskManger from "./components/Page/TaskManger";
import AdminComponents from "./components/Page/Admin";
import UserComponent from "./components/Page/User";
import MainComponent from "./components/Page/maincom";
import Homepage from "./components/Page/Homepage";

const App = () => {
  return (
    <Provider store={Authstore}>
      <div className="container bg-purple min-h-screen ">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route
              path="/dashboard"
              element={<PrivateRoute>Dashboard</PrivateRoute>}
            ></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/admin" element={<AdminComponents />}></Route>
            <Route path="/user" element={<UserComponent />}></Route>
            <Route path="/main" element={<MainComponent />}></Route>
            <Route path="/task" element={<TaskManger />}></Route>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
