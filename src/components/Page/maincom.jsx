import React from "react";
import { useSelector } from "react-redux";
import Admin from "../Page/Admin";
import User from "../Page/User";

const MainComponent = () => {
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <p>Please log in to access this section</p>;
  }

  return <div>{user.role === "admin " ? <Admin /> : <User />}</div>;
};
export default MainComponent;
