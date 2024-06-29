import { Tweet } from "../models/tweetSchema.js";
import { USER } from "../models/userSchema.js";

export const CreateTweet = async (req, res) => {
  const { description, uploadedImages, id } = req.body;
  if ((description.trim().length === 0 && uploadedImages.length === 0) || !id) {
    return res.status(401).json({
      message: "Unauthorized user",
      success: false,
    });
  }

  try {
    const user = await USER.findById(id);
    const tweet = await Tweet.create({
      userId: id,
      description,
      userDetail: user,
      images: uploadedImages,
    });
    res.status(200).json({
      message: "Tweet created",
      success: true,
    });
  } catch (err) {
    return res.status(401).json({
      message: "Failed to created tweet",
      success: false,
      error: err,
    });
  }
};

export const DeleteTweet = async (req, res) => {
  try {
    const { id: userId } = req.body;
    const { id: _id } = req.params;
    const isDeleted = await Tweet.findByIdAndDelete(_id);

    try {
      const user = await USER.findById(userId);
      if (user?.bookmarks?.includes(_id)) {
        await user.updateOne({ _id: userId }, { $pull: { images: _id } });
      }
    } catch (err) {
      return res.status(401).json({
        message: "Failed to delete tweet from bookmarks",
        success: false,
      });
    }

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
    const { id: userId } = req.body;
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

export const Bookmarks = async (req, res) => {
  try {
    const { id: userId } = req.body;
    const { id: tweetId } = req.params;
    const user = await USER.findById(userId);
    const tweet = await Tweet.findById(tweetId);
    if (tweet.bookmarks.includes(userId)) {
      await Tweet.findByIdAndUpdate(tweetId, { $pull: { bookmarks: userId } });
      await user.updateOne({
        $pull: { bookmarks: tweetId },
      });
      return res.status(200).json({
        message: "Removed from bookmark",
        success: true,
      });
    } else {
      await Tweet.findByIdAndUpdate(tweetId, { $push: { bookmarks: userId } });
      await user.updateOne({
        $push: { bookmarks: tweetId },
      });

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

export const GetTweetById = async (req, res) => {
  try {
    const { id: profileId } = req.params;
    if (!profileId) {
      return res.status(401).json({
        message: "Unauthorized user",
        success: false,
      });
    }

    const user = await USER.findById(profileId);
    const tweets = await Tweet.find({ userId: profileId });

    return res.status(200).json({
      message: "User profile tweets",
      profileTweet: tweets,
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
