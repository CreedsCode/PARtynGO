import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Testing from "./pages/Testing";
import OpenAI from "./pages/Openai";

import "./index.css";
import Login from "./pages/Login";
import StartAfterLogin from "./pages/StartAfterLogin";
import CreateGame from "./pages/CreateGame";
import JoinGame from "./pages/JoinGame";
import GameStart from "./pages/GameStart";
import GameRunning from "./pages/GameRunning";
import GameResults from "./pages/GameResults";

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
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/startAfterLogin",
    element: <StartAfterLogin />,
  },
  {
    path: "/createGame",
    element: <CreateGame />,
  },
  {
    path: "/joinGame",
    element: <JoinGame />,
  },
  {
    path: "/gameStart",
    element: <GameStart />,
  },
  {
    path: "/game/:gameID/results",
    element: <GameResults />,
  },
  {
    path: "/game/:gameID",
    element: <GameRunning />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
