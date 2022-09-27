import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { CableProvider } from "./context/cable";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CableProvider>
        <App cable={cable} />
      </CableProvider>
    </BrowserRouter>
  </React.StrictMode>
);
