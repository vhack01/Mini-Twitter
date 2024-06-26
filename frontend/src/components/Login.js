import { useState } from "react";
import BigLogo from "./BigLogo";
import { Link, useNavigate } from "react-router-dom";
import validateLogin from "../utils/validateLogin";
import axios from "axios";
import { USER_END_POINT } from "../utils/constants";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const message = validateLogin({ username, password });
    if (message !== null) {
      toast.error("Invalid credentials");
      return;
    }
    try {
      const res = await axios.post(
        `${USER_END_POINT}/login`,
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("login res:", res);
      if (res?.data?.success === false) {
        toast.error("Invalid credentials");
        return;
      }

      const token = res?.data?.token;
      localStorage.setItem("token", JSON.stringify(token));
      toast.success(res.data.message);
      dispatch(setUser(res?.data?.user));
      navigate("/home/feed");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="flex flex-col gap-y-4 md:flex-row justify-center font-montserrat">
      <BigLogo />
      <div className="md:h-screen flex items-center justify-center">
        <div className="w-[80%] flex flex-col p-4">
          <h1 className="text-6xl font-bold">Happening now</h1>
          <h2 className="mt-10 text-xl font-bold">Sign in to X</h2>
          <div className="pr-6 py-3">
            <form
              className="flex flex-col gap-y-3"
              onSubmit={(e) => handleLogin(e)}
            >
              <input
                type="text"
                placeholder="Email"
                className="border rounded-full p-2 indent-2"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                spellCheck="false"
              />
              <input
                type="password"
                placeholder="Password"
                className="border rounded-full p-2 indent-2"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                spellCheck="false"
              />

              <button className="mt-3 border rounded-full p-2 indent-2 bg-themeColor-0 text-white font-medium text-lg">
                Login
              </button>
            </form>
            <p className="text-sm mt-4">
              Do not have an account?{" "}
              <Link to="/signup">
                <span className="text-themeColor-0 font-semibold cursor-pointer">
                  Signup
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
