import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getToken from "../utils/getToken";

const useCheckUserLogin = () => {
  const location = useLocation();
  console.log("location:", location);
  const { pathname } = location;
  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken();
    console.log("token:", token);
    if (token === null) {
      navigate("/login");
      return;
    } else {
      navigate("pathname");
    }
  }, []);
};

export default useCheckUserLogin;
