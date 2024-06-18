import BigLogo from "./BigLogo";
import { Link } from "react-router-dom";
import { useState } from "react";
import validateSignup from "../utils/validateSignup";
import axios from "axios";
import { USER_END_POINT } from "../utils/constants";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validMessage = validateSignup({ name, username, email, password });
    if (validMessage !== null) {
      alert(validMessage);
      return;
    }

    try {
      const res = await axios.post(
        `${USER_END_POINT}/signup`,
        {
          name,
          username,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res?.data?.success === false) {
        toast.error(res.data.message);
        return;
      }
      toast.success(res.data.message);
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
          <h2 className="mt-10 text-xl font-bold">Join today</h2>
          <div className="pr-6 py-3">
            <form
              className="flex flex-col gap-y-3"
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                type="text"
                placeholder="Name"
                className="border rounded-full p-2 indent-2"
                spellCheck="false"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Username"
                className="border rounded-full p-2 indent-2"
                spellCheck="false"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <input
                type="email"
                placeholder="Email"
                className="border rounded-full p-2 indent-2"
                spellCheck="false"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Password"
                className="border rounded-full p-2 indent-2"
                spellCheck="false"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <button className="mt-3 border rounded-full p-2 indent-2 bg-themeColor-0 text-white font-medium text-lg">
                Signup
              </button>
            </form>
            <p className="text-sm mt-4">
              Already hava an account?{" "}
              <Link to="/login">
                <span className="text-themeColor-0 font-semibold cursor-pointer">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Signup;
