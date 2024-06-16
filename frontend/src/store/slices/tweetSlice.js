import { createSlice } from "@reduxjs/toolkit";
const tweetSlice = createSlice({
  name: "tweet",
  initialState: {
    myTweets: null,
    refresh: false,
    isActive: 0,
  },
  reducers: {
    setMyTweet: (state, action) => {
      state.myTweets = action.payload;
    },

    setRefresh: (state) => {
      state.refresh = !state.refresh;
    },
    setIsActive: (state) => {
      state.isActive = 1 - state.isActive;
    },
  },
});

export const { setMyTweet, setRefresh, setIsActive } = tweetSlice.actions;
export default tweetSlice.reducer;
