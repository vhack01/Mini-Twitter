import { createSlice } from "@reduxjs/toolkit";
const tweetSlice = createSlice({
  name: "tweet",
  initialState: {
    myTweets: null,
    followingTweets: null,
  },
  reducers: {
    setAllTweet: (state, action) => {
      const { followingsTweets, myTweets } = action.payload;
      state.myTweets = myTweets;
      state.followingTweets = followingsTweets;
    },
  },
});

export const { setAllTweet } = tweetSlice.actions;
export default tweetSlice.reducer;
