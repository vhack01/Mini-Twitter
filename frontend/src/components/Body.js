import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import useCheckUserLogin from "../hooks/useCheckUserLogin";

const Body = () => {
  useCheckUserLogin();
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
};

export default Body;
