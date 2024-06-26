import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getToken from "../utils/getToken";

const useAuth = () => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken();
    if (token === null) {
      if (pathname === "/signup") navigate("/signup");
      else navigate("/");
    } else {
      navigate(pathname);
    }
  }, []);
};

export default useAuth;
