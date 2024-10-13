import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import "./index.css";
// import ReactDom from "react";
// import { Provider } from "react-redux";
// import Authstore from "./stores/StoreReducer.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// ReactDom.createRoot(document.getElementById("root")!).render(
//   <Provider store = {Authstore}>

//     <App />

//   </Provider>

// );
