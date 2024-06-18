import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getToken from "../utils/getToken";

const useCheckUserLogin = () => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken();
    console.log("token:", token);
    if (token === null) {
      navigate("/login");
      return;
    } else {
      if (pathname === "/") navigate("/home/feed");
      else navigate(pathname);
    }
  }, []);
};

export default useCheckUserLogin;
