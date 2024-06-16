import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    otherUser: null,
    profile: null,
  },
  reducers: {
    setUser: (state, action) => {
      console.log("setUser:", action.payload);
      state.user = action.payload;
    },
    setOtherUser: (state, action) => {
      state.otherUser = action.payload;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    updateFollowing: (state, action) => {
      const id = action.payload;
      if (state.user.followings.includes(id)) {
        const updateFollowing = state.user.followings.filter(
          (followingId) => followingId !== id
        );
        state.user.followings = [...updateFollowing];
      } else {
        state.user.followings.push(id);
      }
    },
  },
});

export const { setUser, setOtherUser, setProfile, updateFollowing } =
  userSlice.actions;
export default userSlice.reducer;
