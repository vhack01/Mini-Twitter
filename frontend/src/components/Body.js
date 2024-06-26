import { Toaster } from "react-hot-toast";
import Login from "./Login";
import Error from "./Error";
import Explore from "./Explore";
import Profile from "./Profile";
import Feed from "./Feed";
import Bookmarks from "./Bookmarks";
import Signup from "./Signup";
import Home from "./Home";
import Notification from "./Notification";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
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
          path: "/home/notification",
          element: <Notification />,
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
      errorElement: <Error />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
};

export default Body;
