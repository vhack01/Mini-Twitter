import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import tweetReducer from "./slices/tweetSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    tweet: tweetReducer,
  },
});

export default appStore;
