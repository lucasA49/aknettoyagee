import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Admin from "./pages/Admin";
import Accueil from "./pages/accueil";
import Contact from "./pages/Contact";
import "./styles/globals.css";
import Extérieur from "./pages/Exterieur";
import Interieur from "./pages/Interieur";
import Mobilier from "./pages/Mobilier";

const router = createBrowserRouter([
 
    {
        path: "/",
        element: <Accueil />,  
      },
      {
        path: "admin",
        element: < Admin/>,  
      },
      {
        path: "contact",
        element: < Contact/>,  
      },
      {
        path: "nettoyagevéhiculeextérieur",
        element: <Extérieur/>,  
      },
      {
        path: "nettoyagevéhiculeintérieur",
        element: < Interieur/>,  
      },
      {
        path: "nettoyagemobiliertextile",
        element: < Mobilier/>,  
      },
      ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
