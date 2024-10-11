import { Navigate } from "react-router-dom";

// this ensures that only authenticated user can access certain pages like the dashboard

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
