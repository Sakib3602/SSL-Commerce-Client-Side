import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./index.css";
import Ssl from "./components/Ssl";
import Succes from "./components/Succes";

import FailPage from "./FailPage";
import Cancel from "./components/Cancel";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Ssl></Ssl>,
  },
  {
    path: "/success",
    element: <Succes></Succes>,
  },
  {
    path: "/fail",
    element: <FailPage></FailPage>
  },
  {
    path: "/cancel",
    element: <Cancel></Cancel>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);
