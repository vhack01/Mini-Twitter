import { createSlice } from "@reduxjs/toolkit";
const tweetSlice = createSlice({
  name: "tweet",
  initialState: {
    myTweets: null,
    followers: null,
    refresh: false,
  },
  reducers: {
    setAllTweet: (state, action) => {
      const { followers, myTweets } = action.payload;
      state.myTweets = myTweets;
      state.followers = followers;
    },
    setRefresh: (state) => {
      state.refresh = !state.refresh;
    },
  },
});

export const { setAllTweet, setRefresh } = tweetSlice.actions;
export default tweetSlice.reducer;
