import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Temp from "./pages/Temp";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
