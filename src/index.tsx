import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DarkContextProvider } from "./context/useDarkContext";
import { UserContextProvider } from "./context/useUserContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <DarkContextProvider>
        <App />
      </DarkContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
