import { Tweet } from "../models/tweetSchema.js";
import { USER } from "../models/userSchema.js";

export const CreateTweet = async (req, res) => {
  const { description, id } = req.body;
  if (description.trim().length === 0 || !id) {
    return res.status(401).json({
      message: "Failed to created tweet",
      success: false,
    });
  }

  try {
    const user = await USER.findById(id);
    const tweet = await Tweet.create({
      userId: id,
      description,
      userDetail: user,
    });
    res.status(200).json({
      message: "Tweet created",
      success: true,
    });
  } catch (err) {
    console.log("Failed to created Tweet:", err);
  }
};

export const DeleteTweet = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const isDeleted = await Tweet.findByIdAndDelete(_id);
    if (!isDeleted) {
      return res.status(401).json({
        message: "Failed to delete tweet",
        success: false,
      });
    }

    res.status(200).json({
      message: "Tweet deleted successfully",
      success: true,
    });
  } catch (err) {
    return res.status(401).json({
      message: "Failed to delete tweet",
      success: false,
    });
  }
};

export const LikeDislike = async (req, res) => {
  try {
    const { userId } = req.body;
    const { id: tweetId } = req.params;
    const tweet = await Tweet.findById(tweetId);
    if (tweet.like.includes(userId)) {
      await Tweet.findByIdAndUpdate(tweetId, { $pull: { like: userId } });
      return res.status(200).json({
        message: "Tweet disliked successfully",
        success: true,
      });
    } else {
      await Tweet.findByIdAndUpdate(tweetId, { $push: { like: userId } });
      return res.status(200).json({
        message: "Tweet liked successfully",
        success: true,
      });
    }
  } catch (err) {
    return res.status(401).json({
      message: "Failed to like / dislike  tweet",
      success: false,
    });
  }
};

export const AllTweet = async (req, res) => {
  // LoggedInUser tweet + Its followers tweet
  try {
    const { id: userId } = req.params;
    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized user",
        success: false,
      });
    }

    const user = await USER.findById(userId);
    const userTweets = await Tweet.find({ userId });

    const followings = await Promise.all(
      user.followings.map((otherUserId) => Tweet.find({ userId: otherUserId }))
    );

    return res.status(200).json({
      message: "All tweets fetched successfully",
      myTweets: userTweets,
      followings: followings.length > 0 ? followings[0] : [],
      success: true,
    });
  } catch (err) {
    return res.status(401).json({
      message: "Failed to get tweets",
      success: false,
      error: err,
    });
  }
};

export const FollowingsTweet = async (req, res) => {
  try {
    const { id: userId } = req.params;
    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized user",
        success: false,
      });
    }

    const user = await USER.findById(userId);

    const followingsTweets = await Promise.all(
      user.followings.map((otherUserId) => Tweet.find({ userId: otherUserId }))
    );

    console.log("followingsTweets", followingsTweets);

    return res.status(200).json({
      message: "All tweets fetched successfully",
      followingsTweets: followingsTweets.length > 0 ? followingsTweets[0] : [],
      success: true,
    });
  } catch (err) {
    return res.status(401).json({
      message: "Failed to get tweets",
      success: false,
      error: err,
    });
  }
};
