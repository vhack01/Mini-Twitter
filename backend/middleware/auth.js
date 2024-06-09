import jwt from "jsonwebtoken";
import configEnv from "../utils/configEnv.js";
const auth = (req, res, next) => {
  const token = req.headers.authorization;
  console.log("token:", token);
  configEnv("../.env");
  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    console.log("decode:", decode);
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized user",
      success: false,
    });
  }
};

export default auth;
