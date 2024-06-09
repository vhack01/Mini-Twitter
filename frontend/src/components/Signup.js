import BigLogo from "./BigLogo";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col gap-y-4 md:flex-row justify-center font-montserrat">
      <BigLogo />
      <div className="md:h-screen flex items-center">
        <div className="flex flex-col p-4">
          <h1 className="text-6xl font-bold">Happening now</h1>
          <h2 className="mt-10 text-xl font-bold">Join today</h2>
          <div className="pr-6 py-3">
            <form className="flex flex-col gap-y-3">
              <input
                type="text"
                placeholder="Name"
                className="border rounded-full p-2 indent-2"
                spellCheck="false"
              />
              <input
                type="text"
                placeholder="Username"
                className="border rounded-full p-2 indent-2"
                spellCheck="false"
              />
              <input
                type="email"
                placeholder="Email"
                className="border rounded-full p-2 indent-2"
                spellCheck="false"
              />
              <input
                type="passowrd"
                placeholder="Password"
                className="border rounded-full p-2 indent-2"
                spellCheck="false"
              />

              <button className="mt-3 border rounded-full p-2 indent-2 bg-themeColor-0 text-white font-medium text-lg">
                Signup
              </button>
            </form>
            <p className="text-sm mt-4">
              Already hava an account?{" "}
              <Link to="/signup">
                <span className="text-themeColor-0 font-semibold cursor-pointer">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
