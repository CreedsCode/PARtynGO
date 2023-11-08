import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Testing from "./pages/Testing";
import OpenAI from "./pages/Openai";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/404",
    element: <NoPage />,
  },
  {
    path: "/testing",
    element: <Testing />,
  },
  {
    path: "/openai",
    element: <OpenAI />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
