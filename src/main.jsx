import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDom from "react-dom/client";
import App from "./App";
import StoreReducer from "./stores/StoreReducer";
import { Provider } from "react-redux";
import "./index.css";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={StoreReducer}>
      <App />
    </Provider>
  </StrictMode>
);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// const rootElement = document.getElementById("root");
// ReactDom.render(
//   <StrictMode>
//     <Provider store={StoreReducer}>
//       <App />
//     </Provider>
//   </StrictMode>
// );
