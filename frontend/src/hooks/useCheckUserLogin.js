import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getToken from "../utils/getToken";

const useCheckUserLogin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken();
    console.log("token:", token);
    if (token === null) {
      navigate("/login");
      return;
    }
  }, []);
};

export default useCheckUserLogin;
