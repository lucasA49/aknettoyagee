import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Accueil from "./pages/accueil";
import Admin from "./pages/Admin"
import "./styles/globals.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
    {
        path: "Home",
        element: <Accueil />,  
      },
      {
        path: "admin",
        element: < Admin/>,  
      },
      ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
