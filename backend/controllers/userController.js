import { userExist } from "../utils/userExits.js";
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
      success: true,
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
        message: "Tweet unmarked successfully",
        success: true,
      });
    } else {
      console.log("bookmarked");
      await USER.findByIdAndUpdate(userId, { $push: { bookmarks: tweetId } });
      return res.status(200).json({
        message: "Tweet bookmarked successfully",
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
