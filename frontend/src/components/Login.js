import BigLogo from "./BigLogo";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col gap-y-4 md:flex-row justify-center font-montserrat">
      <BigLogo />
      <div className="md:h-screen flex items-center">
        <div className="flex flex-col p-4">
          <h1 className="text-6xl font-bold">Happening now</h1>
          <h2 className="mt-10 text-xl font-bold">Sign in to X</h2>
          <div className="pr-6 py-3">
            <form className="flex flex-col gap-y-3">
              <input
                type="text"
                placeholder="Email"
                className="border rounded-full p-2 indent-2"
              />
              <input
                type="passowrd"
                placeholder="Password"
                className="border rounded-full p-2 indent-2"
              />

              <button className="mt-3 border rounded-full p-2 indent-2 bg-themeColor-0 text-white font-medium text-lg">
                Login
              </button>
            </form>
            <p className="text-sm mt-4">
              Do not hava an account?{" "}
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
