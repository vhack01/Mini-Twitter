import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    message: {
      type: String,
    },
    like: {
      type: Number,
      default: 0,
    },
    comment: {
      type: Array,
      default: [],
    },
    bookmarks: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);
export const Tweet = mongoose.model("Tweet", tweetSchema);
