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
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/home",
        element: <Home />,
        children: [
          {
            path: "/home/feed",
            element: <Feed />,
          },
          {
            path: "/home/explore",
            element: <Explore />,
          },
          {
            path: "/home/profile/:id",
            element: <Profile />,
          },
          {
            path: "/home/bookmarks",
            element: <Bookmarks />,
          },
        ],
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
