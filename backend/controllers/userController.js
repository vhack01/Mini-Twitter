import { userExist } from "../utils/userExits.js";
import { validateUser } from "../utils/validateUser.js";
import { USER } from "../models/userSchema.js";
import configEnv from "../utils/configEnv.js";
import jwt from "jsonwebtoken";

configEnv("../.env");

export const Signup = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    const user = await userExist({ username, email });
    console.log("Create Account:", user);
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

    if (!isCreated) {
      return res.status(500).json({
        message: "Failed to created account",
        success: false,
      });
    }

    res.status(201).json({
      message: "Account created sucessfully",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Failed to created account",
      success: false,
      error: err,
    });
  }
};

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

  try {
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
    return res.status(200).json({
      message: "Logged In successfully",
      success: true,
      token,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: err,
    });
  }
};

export const Bookmarks = async (req, res) => {
  try {
    const { userId } = req.body;
    const { id: tweetId } = req.params;
    const user = await USER.findById(userId);
    console.log("tweet:", user);
    if (user.bookmarks.includes(tweetId)) {
      console.log("unmarked");
      await USER.findByIdAndUpdate(userId, { $pull: { bookmarks: tweetId } });
      return res.status(200).json({
        message: "Removed from bookmark",
        success: true,
      });
    } else {
      console.log("bookmarked");
      await USER.findByIdAndUpdate(userId, { $push: { bookmarks: tweetId } });
      return res.status(200).json({
        message: "Saved to bookmark",
        success: true,
      });
    }
  } catch (err) {
    return res.status(401).json({
      message: "Failed to bookmarked tweet",
      success: false,
    });
  }
};

export const Profile = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(401).json({
      message: "Unable to fetch profile",
      success: false,
      data: {},
    });
  }

  try {
    const user = await USER.findById(id).select("-password");
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
        data: {},
      });
    }

    res.status(200).json({
      message: "User profile",
      success: true,
      data: user,
    });
  } catch (err) {
    return res.status(401).json({
      message: "Unable to fetch profile",
      success: false,
      data: {},
    });
  }
};
export const OthersProfile = async (req, res) => {
  try {
    const { id: loggedInId } = req.params;
    console.log("loggedInId");
    if (!loggedInId) {
      return res.status(404).json({
        message: "No user found",
        success: false,
        data: {},
      });
    }

    const users = await USER.find({ _id: { $ne: loggedInId } }).select(
      "-password"
    );
    if (!users) {
      return res.status(404).json({
        message: "No users found",
        success: false,
        data: {},
      });
    }

    res.status(200).json({
      message: "User profile",
      success: true,
      data: users,
    });
  } catch (err) {
    return res.status(401).json({
      message: "Unable to fetch profile",
      success: false,
      error: err,
    });
  }
};

export const Follow = async (req, res) => {
  try {
    const { userId: loggedInId } = req.body;
    const { id: otherUserId } = req.params;

    if (!loggedInId || !otherUserId) {
      return res.status(401).json({
        message: "Unauthorized user",
        success: false,
      });
    }
    const loggedInUser = await USER.findById(loggedInId);
    const otherUser = await USER.findById(otherUserId);

    if (!loggedInUser || !otherUser) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    if (!loggedInUser.followings.includes(otherUserId)) {
      // follow
      await loggedInUser.updateOne({
        $push: { followings: otherUserId },
      });
      await otherUser.updateOne({
        $push: { followers: loggedInId },
      });

      return res.status(200).json({
        message: `${loggedInUser.name} is following ${otherUser.name}`,
        success: true,
      });
    } else {
      return res.status(200).json({
        message: `Already following ${otherUser.name}`,
        success: false,
      });
    }
  } catch (err) {
    return res.status(401).json({
      message: "Unable to follow profile",
      success: false,
      error: err,
    });
  }
};

export const Unfollow = async (req, res) => {
  try {
    const { id: loggedInId } = req.body;
    const { id: otherUserId } = req.params;

    if (!loggedInId || !otherUserId) {
      return res.status(401).json({
        message: "Unauthorized user",
        success: false,
      });
    }

    const loggedInUser = await USER.findById(loggedInId);
    const otherUser = await USER.findById(otherUserId);
    if (!loggedInUser || !otherUser) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    if (loggedInUser.followings.includes(otherUserId)) {
      // follow
      await loggedInUser.updateOne({
        $pull: { followings: otherUserId },
      });
      await otherUser.updateOne({
        $pull: { followers: loggedInId },
      });

      return res.status(200).json({
        message: `${loggedInUser.name} has unfollowed ${otherUser.name}`,
        success: true,
      });
    } else {
      return res.status(200).json({
        message: `Already unfollowing ${otherUser.name}`,
        success: false,
      });
    }
  } catch (err) {
    return res.status(401).json({
      message: "Unable to follow profile",
      success: false,
      error: err,
    });
  }
};
