import { validateUser } from "../utils/validateUser.js";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

export const Login = async (req, res) => {
  const { username, password } = req.body;
  const auth = await validateUser({ username, password });
  console.log("auth:", auth);
  if (!auth) {
    return res.status(401).json({
      message: "Invalid user credentials",
      success: false,
    });
  }

  let token = null;
  try {
    token = jsonwebtoken.sign({ username }, process.env.SECRET_KEY);
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }

  return res.status(200).json({
    message: "Logged In successfully",
    success: true,
    token,
  });
};
