import { validateUser } from "../utils/validateUser.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

export const Login = async (req, res) => {
  const { username, password } = req.body;
  const user = await validateUser({ username, password });
  console.log("user:", user);
  if (user === null) {
    return res.status(401).json({
      message: "Invalid user credentials",
      success: false,
    });
  }

  let token = null;
  try {
    token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
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
