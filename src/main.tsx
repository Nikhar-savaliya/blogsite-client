import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import browserRouter from "./routes/index.tsx";
import UserContextProvider from "./contexts/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={browserRouter} />
    </UserContextProvider>
  </React.StrictMode>
);
