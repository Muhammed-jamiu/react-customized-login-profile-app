import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./style.css";
// import "./index.css";
import BaseApp from "./LogProfileass/BaseApp.jsx";
import Testing from "./Testing.jsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      {/* <Testing /> */}
      <BaseApp />
    </BrowserRouter>
  </StrictMode>
);
