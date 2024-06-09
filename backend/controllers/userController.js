import { userExist } from "../middleware/userExits.js";
import { USER } from "../models/userSchema.js";

export const Signup = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    const user = await userExist({ username, email });
    console.log("user:", user);
    if (user) {
      return res.status(401).json({
        message: "User already exist",
        success: false,
      });
    }

    const isCreated = await USER.create({
      name,
      username,
      email,
      password,
    });

    console.log("Account Created:", isCreated);
    if (!isCreated) {
      return res.status(500).json({
        message: "Failed to created account",
        success: false,
      });
    }

    res.status(201).json({
      message: "Account created sucessfully",
      success: false,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Failed to created account",
      success: true,
    });
  }
};
