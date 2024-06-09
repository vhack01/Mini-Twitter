import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./components/Login";
import Error from "./components/Error";
import Explore from "./components/Explore";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import Bookmarks from "./components/Bookmarks";
import Signup from "./components/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Feed />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
