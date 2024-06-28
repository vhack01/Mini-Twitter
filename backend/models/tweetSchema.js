import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    description: {
      type: String,
    },
    like: {
      type: Array,
      default: [],
    },
    comment: {
      type: Array,
      default: [],
    },
    userDetail: {
      type: Object,
      default: {},
    },
    bookmarks: {
      type: Array,
      default: [],
    },
    images: {
      type: Array,
      default: [],
    },
  },

  { timestamps: true }
);
export const Tweet = mongoose.model("Tweet", tweetSchema);
