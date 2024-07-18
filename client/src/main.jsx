import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Accueil from "./pages/accueil";

import "./styles/globals.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
    {
        path: "Accueil",
        element: <Accueil />,  
      },
      ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
