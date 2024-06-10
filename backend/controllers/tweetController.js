import { Tweet } from "../models/tweetSchema.js";

export const CreateTweet = async (req, res) => {
  const { description, id } = req.body;
  if (description.trim().length === 0 || !id) {
    return res.status(401).json({
      message: "Failed to created tweet",
      success: false,
    });
  }

  try {
    const tweet = await Tweet.create({ userId: id, description });
    res.status(200).json({
      message: "Tweet created",
      success: true,
    });
  } catch (err) {
    console.log("Failed to created Tweet:", err);
  }
};

export const EditTweet = async (req, res) => {};

export const DeleteTweet = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const isDeleted = await Tweet.findByIdAndDelete(_id);
    console.log("isDeleted:", isDeleted);
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
